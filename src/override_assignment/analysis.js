// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

/**
 * @author  Koushik Sen
 *
 */
const path = require('node:path')
const utils = require(path.join(__dirname,'utils.js'))
// const { Assignment } = require(path.join(__dirname, 'src', 'entities', 'assignment.js'))

const TEST_CASE = J$.initParams.testCase

// Input: represents all lines that came from Left (L) or Right (R) branches - the rest is assumed to be from base
const LINE_TO_BRANCH_MAP = require(path.join(__dirname, 'test_cases', `${TEST_CASE}`, 'line_to_branch_map.json'))

class Occurrence {
    constructor(id, name, location) {
        this.id = id
        this.name = name
        this.location = location
        this.branch = (new MergeController()).mapLineToBranch(this.getLine())
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getLHSIdentifier() {
        return `${this.id}_${this.name}`
    }

    getBranch() {
        return this.branch
    }

    getLocation() {
        return this.location
    }

    getLine() {
        return utils.getSourceFileCorrespondingLine(this.location)
    }

    setBranch(branch) {
        this.branch = branch
    }
}

class Assignment extends Occurrence{
    constructor(frameOrObjectID, nameOrField, location, isObject = false) {
        super(frameOrObjectID, nameOrField, location)
        this.isObject = isObject
    }
}

class FunctionCall extends Occurrence {
    constructor(functionID, name, location, beforeInvoke) {
        super(functionID, name, location)
        this.beforeInvoke = beforeInvoke
    }

    getTrace() {
        return `${this.getLocation()} in ${this.name}`
    }

    isBeforeInvoke() {
        return this.beforeInvoke
    }
}

class Interference {
    constructor(previousAssignment, currentAssignment) {
        this.previousAssignment = previousAssignment
        this.currentAssignment = currentAssignment
    }

    getPreviousAssigment() {
        return this.previousAssignment
    }

    getCurrentAsssignment() {
        return this.currentAssignment
    }

    log() {
        console.log(`----Override assignment detected on ${this.previousAssignment.getLHSIdentifier()}: branch ${this.previousAssignment.getBranch()} at line ${this.previousAssignment.getLine()}, branch ${this.currentAssignment.getBranch()} at line ${this.currentAssignment.getLine()}----`)
    }
}

class FunctionCallStack {
    constructor () {
        this.stack = []
    }

    push(func) {
        if (func instanceof FunctionCall) {
            this.stack.push(func)
        } else {
            throw new Error(`[FunctionCallStack] New element must be an instance of ${FunctionCall.name}`)
        }
    }    

    pop(_) {
        return this.stack.pop()
    }

    getBranch() {
        if (!this.isEmpty()) {
            return this.stack.at(-1).getBranch()
        }
        return undefined
    }

    isEmpty() {
        return this.stack.length === 0
    }
}

class OverrideAssignmentController {
    constructor() {
        this.branchAssignmentSets = {}
        this.functionCallStack = new FunctionCallStack() // In the format [{FUNCTION: BRANCH}]
    }

    functionHandler(func) {
        if ((!this.functionCallStack.isEmpty() || func.getBranch()) && func.isBeforeInvoke()) {
            if (!func.getBranch()) func.setBranch(this.functionCallStack.getBranch())
            this.functionCallStack.push(func)
        } else if (!func.isBeforeInvoke()) {
            this.functionCallStack.pop(func)
        }
    }

    _updateAssignBranchBasedOnFunctionStack(assignment) {
        const functionCallStackCurrentBranch = this.functionCallStack.getBranch()
        if (!assignment.getBranch()) {
            assignment.setBranch(functionCallStackCurrentBranch)
        }
        else if (functionCallStackCurrentBranch && functionCallStackCurrentBranch !== assignment.getBranch()){
            const propagatedFunctionAssignment = new Assignment(assignment.getId(), assignment.getName(), assignment.getLocation())
            propagatedFunctionAssignment.setBranch(functionCallStackCurrentBranch)
            this.assignmentHandler(propagatedFunctionAssignment)
        }
    }

    _assignmentExistsOnOtherBranch(assignment) {
        const assignmentIdentifier = assignment.getLHSIdentifier()
        const currentBranch = assignment.getBranch()

        for (let branch of Object.keys(this.branchAssignmentSets)) {
            if (branch !== currentBranch && this.branchAssignmentSets[branch][assignmentIdentifier]) {
                return new Interference(this.branchAssignmentSets[branch][assignmentIdentifier], assignment)
            }
        }

        return undefined
    }

    _removeAssignmentFromBranch(assignment, branch) {
        const assignmentIdentifier = assignment.getLHSIdentifier()

        if (this.branchAssignmentSets[branch][assignmentIdentifier]) {
            delete this.branchAssignmentSets[branch][assignmentIdentifier]
        }
    }

    _removeAssignmentFromOtherBranches(assignment) {
        const currentBranch = assignment.getBranch()
        const assignmentOnBaseBranch = currentBranch === undefined
        for (let branch of Object.keys(this.branchAssignmentSets)) {
            if (assignmentOnBaseBranch || (!assignmentOnBaseBranch && branch !== currentBranch)) {
                this._removeAssignmentFromBranch(assignment, branch)
            }
        }
    }

    assignmentHandler(assignment) {
        this._updateAssignBranchBasedOnFunctionStack(assignment)
        const currentBranch = assignment.getBranch()
        if (currentBranch) {
            const interference = this._assignmentExistsOnOtherBranch(assignment)
            interference?.log()

            const assignmentIdentifier = assignment.getLHSIdentifier()
            if (!this.branchAssignmentSets[currentBranch]) {
                this.branchAssignmentSets[currentBranch] = {};
            }
            this.branchAssignmentSets[currentBranch][assignmentIdentifier] = assignment;
        }
        this._removeAssignmentFromOtherBranches(assignment)
    }
}

class MergeController {
    constructor(linesBranchMap = LINE_TO_BRANCH_MAP) {
        this.linesBranchMap = linesBranchMap
    }

    mapLineToBranch(sourceFileLine) {
        return this.linesBranchMap[sourceFileLine] ?? undefined
    }

}

(function (sandbox) {

    if (sandbox.Constants.isBrowser) {
        sandbox.Results = {};
    }

    function MyAnalysis() {

        const overrideAssignmentController = new OverrideAssignmentController()

        this.invokeFunPre = function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
            const location = J$.iidToLocation(J$.sid, iid)

            if (isMethod && base instanceof Array) {
                const actualObjectId = sandbox.smemory.getIDFromShadowObjectOrFrame(sandbox.smemory.getShadowObject(base, false).owner)
                let offsets = []
                if (f === Array.prototype.push) {
                    const affectedLength = Object.keys(args).length
                    const affectedMinIdx = base.length
                    offsets = Array.from({ length: affectedLength}, (_, index) => index + affectedMinIdx)
                }
                if (f === Array.prototype.pop) { // removes
                    offsets = [(base.length - 1)]
                }
                if (f === Array.prototype.unshift) {
                    const affectedLength = Object.keys(args).length + base.length
                    const affectedMinIdx = 0
                    offsets = Array.from({ length: affectedLength}, (_, index) => index + affectedMinIdx)
                }
                if (f === Array.prototype.shift) { // removes
                    const affectedLength = base.length
                    const affectedMinIdx = 0
                    offsets = Array.from({ length: affectedLength}, (_, index) => index + affectedMinIdx)
                }
                if (f === Array.prototype.splice) { // removes
                    const elementsToAdd = (Object.keys(args).length - 2) ?? 0
                    const elementsToRemove = (typeof args[1] == "number") ? args[1] : 0
                    const affectedMinIdx = args[0]
                    const affectedLength = (elementsToAdd - elementsToRemove) > 0 // consider the biggest array
                        ? base.length - (affectedMinIdx) + (elementsToAdd - elementsToRemove) 
                        : elementsToAdd === elementsToRemove && elementsToRemove !== 0 // Added as much as removed in the same positions, doesn't affect other positions
                            ? elementsToAdd
                            : base.length - (affectedMinIdx)
                    offsets = Array.from({ length: affectedLength}, (_, index) => index + affectedMinIdx)
                }
                if (f === Array.prototype.fill) {
                    const affectedMinIdx = args[1] ?? 0
                    const affectedLength = (args[2] ?? base.length) - affectedMinIdx
                    offsets = Array.from({ length: affectedLength}, (_, index) => index + affectedMinIdx)
                }
                if (f === Array.prototype.copyWithin) {
                    const affectedMinIdx = args[0] // target
                    const start = args[1] ?? 0 // start
                    const end = args[2] ?? base.length // end
                    const affectedLength = end -  start - affectedMinIdx
                    offsets = Array.from({ length: affectedLength}, (_, index) => index + affectedMinIdx)
                }
                if (f === Array.prototype.reverse) {
                    const affectedMinIdx = 0
                    const affectedLength = base.length
                    offsets = Array.from({ length: affectedLength}, (_, index) => index + affectedMinIdx)
                    offsets.splice(base.length / 2, base.length % 2 === 0 ? 0 : 1)
                }
                if (f === Array.prototype.sort) {
                    const affectedMinIdx = 0
                    const affectedLength = base.length
                    const sortedArray = base.sort(args[0] ?? undefined)
                    offsets = Array.from({ length: affectedLength}, (_, index) => index + affectedMinIdx)
                    offsets.filter((offset) => base[offset] !== sortedArray[offset])
                }
                for (let offset of offsets) {
                    const assignment = new Assignment(actualObjectId, offset, location)
                    overrideAssignmentController.assignmentHandler(assignment)
                }
            }

            overrideAssignmentController.functionHandler(new FunctionCall(functionIid, f.name, location, true))
        };

        this.invokeFun = function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
            const location = J$.iidToLocation(J$.sid, iid)
            const line = utils.getSourceFileCorrespondingLine(location)
            overrideAssignmentController.functionHandler(new FunctionCall(functionIid, f.name, location, false))
        };

        this.putFieldPre = function (iid, base, offset, val, isComputed, isOpAssign) {
            const actualObjectId = sandbox.smemory.getIDFromShadowObjectOrFrame(sandbox.smemory.getShadowObject(base, offset, false).owner)
            const location = J$.iidToLocation(J$.sid, iid)

            const assignment = new Assignment(actualObjectId, offset, location)
            overrideAssignmentController.assignmentHandler(assignment)
        };

        this.write = function (iid, name, val, lhs, isGlobal, isScriptLocal) {
            const frameId = sandbox.smemory.getIDFromShadowObjectOrFrame(sandbox.smemory.getShadowFrame(name))
            const location = J$.iidToLocation(J$.sid, iid)

            const assignment = new Assignment(frameId, name, location)
            overrideAssignmentController.assignmentHandler(assignment)

            return {result: val}
        };

        this.endExecution = function () {
            if (sandbox.Results) {
                for (let i = 0; i < logs.length; i++) {
                    sandbox.log(logs[i]);
                }
            }
        };
    }

    sandbox.analysis = new MyAnalysis();

}(J$));

/*
 node ../jalangi2/src/js/commands/jalangi.js --inlineIID --inlineSource --initParam testCase:example --analysis ./jalangi2/src/js/sample_analyses/ChainedAnalyses.js --analysis ./jalangi2/src/js/runtime/SMemory.js --analysis src/override_assignment/analysis.js src/override_assignment/test_cases/example/index.js
 node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/runtime/SMemory.js --analysis src/js/sample_analyses/pldi16/LogLoadStore.js tests/pldi16/CountObjectsPerAllocationSiteTest.js
 node src/js/commands/esnstrument_cli.js --inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/runtime/SMemory.js --analysis src/js/sample_analyses/pldi16/LogLoadStore.js --out /tmp/pldi16/CountObjectsPerAllocationSiteTest.html  tests/pldi16/CountObjectsPerAllocationSiteTest.html
 node src/js/commands/esnstrument_cli.js --inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/runtime/SMemory.js --analysis src/js/sample_analyses/pldi16/LogLoadStore.js --out /tmp/pldi16/CountObjectsPerAllocationSiteTest.js  tests/pldi16/CountObjectsPerAllocationSiteTest.js
 open file:///tmp/pldi16/CountObjectsPerAllocationSiteTest.html
 */


