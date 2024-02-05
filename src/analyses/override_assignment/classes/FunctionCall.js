const Occurrence = require('./Occurrence')

class FunctionCall extends Occurrence {
    constructor(functionID, name, location, beforeInvoke) {
        super(functionID, name, location)
        this.beforeInvoke = beforeInvoke
    }

    getTrace() {
        return `    at ${this.getName()} ${this.getLocation()}`
    }

    isBeforeInvoke() {
        return this.beforeInvoke
    }
}

module.exports = FunctionCall