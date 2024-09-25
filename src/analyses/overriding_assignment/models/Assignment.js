const Occurrence = require('./Occurrence')

class Assignment extends Occurrence {
    constructor(frameOrObjectID, nameOrField, location, branch, isObjectField = false, functionCallStack = undefined, val = undefined) {
        super(frameOrObjectID, nameOrField, location, branch)
        this.isObject = isObjectField
        this.functionCallStack = functionCallStack
        this.val = val
    }

    describe () {
        return `Branch ${this.getBranch()} at ${this.getLocation()}${this.functionCallStack?.length ? ` with interprocedural stack: ${JSON.stringify(this.functionCallStack)}` : ''}`
    }

    setFunctionCallStack (functionCallStack) {
        this.functionCallStack = functionCallStack
    }

    getVal () {
        return this.val
    }
}

module.exports = Assignment