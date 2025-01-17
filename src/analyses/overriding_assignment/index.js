// do not remove the following comment
// JALANGI DO NOT INSTRUMENT

/**
 * @author  Koushik Sen
*
*/

(function (sandbox) {
    const { Assignment, FunctionCall } = require('./models')
    const { AssignmentService, OverridingAssignmentService, LocationToBranchService } = require('./services')
    const { Event, EventTypeEnum } = require('../../models/Event')
    const { EventService } = require('../../services/eventService')
    const { AnalysisParamService } = require('../../services/analysisParamService')

    if (!J$.initParams.extraParams) {
        throw new Error('No extraParams provided')
    }
    const extraParamsObject = AnalysisParamService.decodeParams(J$.initParams.extraParams)
    
    const UUID = extraParamsObject.UUID
    // Input: represents all lines that came from Left (L) or Right (R) branches - the rest is assumed to be from base
    const LINE_TO_BRANCH_MAP = require(extraParamsObject.lineToBranchMapPath)
    const INPUT_FILE_PATH = extraParamsObject.inputFilePath
    LocationToBranchService.getInstance().setInputs(LINE_TO_BRANCH_MAP, INPUT_FILE_PATH)

    function OverridingAssignmentAnalysis() {

        const overridingAssignmentService = new OverridingAssignmentService()
        const assignmentService = new AssignmentService()

        this.invokeFunPre = function (iid, f, base, args, isConstructor, isMethod, functionIid, functionSid) {
            const location = J$.iidToLocation(J$.sid, iid)
            const branch = LocationToBranchService.getInstance().mapLocationLineRangeToBranch(location)

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
                    overridingAssignmentService.assignmentHandler(new Assignment(actualObjectId, offset, location, branch))
                    assignmentService.assignmentHandler(new Assignment(actualObjectId, offset, location, branch))
                }
            }
            const functionCallBranch = LocationToBranchService.getInstance().mapLocationEndLineToBranch(location)
            overridingAssignmentService.functionHandler(new FunctionCall(functionIid, f.name, location, functionCallBranch, true))
        };

        this.invokeFun = function (iid, f, base, args, result, isConstructor, isMethod, functionIid, functionSid) {
            const location = J$.iidToLocation(J$.sid, iid)
            const functionCallBranch = LocationToBranchService.getInstance().mapLocationEndLineToBranch(location)
            overridingAssignmentService.functionHandler(new FunctionCall(functionIid, f.name, location, functionCallBranch, false))
        };

        this.putFieldPre = function (iid, base, offset, val, isComputed, isOpAssign) {
            const actualObjectId = sandbox.smemory.getIDFromShadowObjectOrFrame(sandbox.smemory.getShadowObject(base, offset, false).owner)
            const location = J$.iidToLocation(J$.sid, iid)
            const branch = LocationToBranchService.getInstance().mapLocationLineRangeToBranch(location)

            overridingAssignmentService.assignmentHandler(new Assignment(actualObjectId, offset, location, branch, true, undefined, val))
            assignmentService.assignmentHandler(new Assignment(actualObjectId, offset, location, branch, true))
        };

        this.write = function (iid, name, val, lhs, isGlobal, isScriptLocal) {
            const frameId = sandbox.smemory.getIDFromShadowObjectOrFrame(sandbox.smemory.getShadowFrame(name))
            const location = J$.iidToLocation(J$.sid, iid)
            const branch = LocationToBranchService.getInstance().mapLocationLineRangeToBranch(location)

            overridingAssignmentService.assignmentHandler(new Assignment(frameId, name, location, branch, undefined, undefined, val))
            assignmentService.assignmentHandler(new Assignment(frameId, name, location, branch))

            return {result: val}
        };

        this.endExecution = function () {
            const interferences = overridingAssignmentService.getInterferences()
            const overridenTargetsCount = assignmentService.getOverridenTargetsAmount()
            const overridenTargets = assignmentService.getOverridenTargets()
            const eventBatch = EventService.buildBatch(
                UUID, 
                {overridenTargetsCount, overridenTargets},
                interferences.map(interference => {
                    return new Event(EventTypeEnum.OVERRIDING_ASSIGNMENT, 'Overriding Assignment Conflict', {
                        description: `${interference.describe()}`,
                        interference
                })
            }))
            console.log(EventService.batchToRecoverableString(eventBatch))
        };
    }

    sandbox.analysis = new OverridingAssignmentAnalysis();

}(J$));

/*
 node ../jalangi2/src/js/commands/jalangi.js --inlineIID --inlineSource --initParam testCase:example --analysis ./jalangi2/src/js/sample_analyses/ChainedAnalyses.js --analysis ./jalangi2/src/js/runtime/SMemory.js --analysis src/override_assignment/analysis.js src/override_assignment/test_cases/example/index.js
 node src/js/commands/jalangi.js --inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/runtime/SMemory.js --analysis src/js/sample_analyses/pldi16/LogLoadStore.js tests/pldi16/CountObjectsPerAllocationSiteTest.js
 node src/js/commands/esnstrument_cli.js --inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/runtime/SMemory.js --analysis src/js/sample_analyses/pldi16/LogLoadStore.js --out /tmp/pldi16/CountObjectsPerAllocationSiteTest.html  tests/pldi16/CountObjectsPerAllocationSiteTest.html
 node src/js/commands/esnstrument_cli.js --inlineIID --inlineSource --analysis src/js/sample_analyses/ChainedAnalyses.js --analysis src/js/runtime/SMemory.js --analysis src/js/sample_analyses/pldi16/LogLoadStore.js --out /tmp/pldi16/CountObjectsPerAllocationSiteTest.js  tests/pldi16/CountObjectsPerAllocationSiteTest.js
 open file:///tmp/pldi16/CountObjectsPerAllocationSiteTest.html
 */


