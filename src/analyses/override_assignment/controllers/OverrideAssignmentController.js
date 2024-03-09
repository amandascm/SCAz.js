const {
    Assignment, FunctionCallStack, Interference
} = require('../classes')

class AssignmentOverridingController {
    constructor() {
        this.branchAssignmentSets = {}
        this.functionCallStack = new FunctionCallStack() // In the format [{FUNCTION: BRANCH}]
        this.interferences = []
    }

    functionHandler(func) {
        if ((!this.functionCallStack.isEmpty() || func.getBranch()) && func.isBeforeInvoke()) {
            // if (!func.getBranch()) func.setBranch(this.functionCallStack.getBranch())
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
        // else if (functionCallStackCurrentBranch && functionCallStackCurrentBranch !== assignment.getBranch() && !assignment.getBranch()){
        else if (functionCallStackCurrentBranch && functionCallStackCurrentBranch !== assignment.getBranch()){
            const propagatedFunctionAssignment = new Assignment(assignment.getId(), assignment.getName(), assignment.getLocation(), undefined, this.functionCallStack.getCurrentStack())
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
            if (interference) {
                this.interferences.push(interference)
            }

            const assignmentIdentifier = assignment.getLHSIdentifier()
            if (!this.branchAssignmentSets[currentBranch]) {
                this.branchAssignmentSets[currentBranch] = {};
            }
            this.branchAssignmentSets[currentBranch][assignmentIdentifier] = assignment;
        }
        this._removeAssignmentFromOtherBranches(assignment)
    }

    getInterferences() {
        return this.interferences
    }
}

module.exports = AssignmentOverridingController