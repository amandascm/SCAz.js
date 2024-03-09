class AssignmentController {
    constructor() {
        this.assignmentSet = {}
        this.potentialOAInterferenceTargets = {}
        this.maxOverridenTargets = 5
    }

    assignmentHandler(assignment) {
        if (Object.keys(this.potentialOAInterferenceTargets).length < this.maxOverridenTargets) {
            const assignmentIdentifier = assignment.getLHSIdentifier()
            if (this.assignmentSet[assignmentIdentifier]) {
                this.potentialOAInterferenceTargets[assignmentIdentifier] = {
                    lastAssignment: assignment,
                    totalAssignments: this.potentialOAInterferenceTargets[assignmentIdentifier] 
                        ? (this.potentialOAInterferenceTargets[assignmentIdentifier].totalAssignments + 1 )
                        : 2
                }
            }
            this.assignmentSet[assignmentIdentifier] = true
        }
    }

    getOverridenTargetsAmount() {
        return Object.keys(this.potentialOAInterferenceTargets).length
    }

    getOverridenTargets() {
        return this.potentialOAInterferenceTargets
    }

}

module.exports = AssignmentController