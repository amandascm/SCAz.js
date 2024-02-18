class Interference {
    constructor(previousAssignment, currentAssignment, callStack) {
        this.previousAssignment = previousAssignment
        this.currentAssignment = currentAssignment
        this.targetIdentifier = previousAssignment.getLHSIdentifier()
        this.callStack = callStack
    }

    getPreviousAssigment() {
        return this.previousAssignment
    }

    getCurrentAsssignment() {
        return this.currentAssignment
    }

    describe() {
        return `Override assignment detected on ${this.previousAssignment.getLHSIdentifier()}: branch ${this.previousAssignment.getBranch()} at line ${this.previousAssignment.getLine()} ${this.previousAssignment.getLocation()}, branch ${this.currentAssignment.getBranch()} at line ${this.currentAssignment.getLine()} ${this.currentAssignment.getLocation()}\n${this.callStack}`
    }

    getAssignmentByBranch(branch) {
        return this.previousAssignment.getBranch() === branch
            ? this.previousAssignment
            : this.currentAssignment
    }

    getTarget() {
        return this.targetIdentifier
    }
}

module.exports = Interference