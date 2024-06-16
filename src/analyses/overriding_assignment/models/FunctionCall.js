const Occurrence = require('./Occurrence')

class FunctionCall extends Occurrence {
    constructor(functionID, name, location, branch, beforeInvoke) {
        super(functionID, name, location, branch)
        this.beforeInvoke = beforeInvoke
    }

    getTrace() {
        return `    at ${this.getName()} ${this.getLocation()}${this.getBranch() !== undefined ? ` from branch ${this.getBranch()}` : ''}`
    }

    isBeforeInvoke() {
        return this.beforeInvoke
    }
}

module.exports = FunctionCall