class Interference {
    constructor(previousAssignment, currentAssignment) {
        this.previousAssignment = previousAssignment
        this.currentAssignment = currentAssignment
        this.targetIdentifier = previousAssignment.getLHSIdentifier()
    }

    getPreviousAssigment() {
        return this.previousAssignment
    }

    getCurrentAsssignment() {
        return this.currentAssignment
    }

    describe() {
        return `Interference detected on ${this.previousAssignment.getLHSIdentifier()}:\n${this.previousAssignment.describe()}\n${this.currentAssignment.describe()}`
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