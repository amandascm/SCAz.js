const Occurrence = require('./Occurrence')

class Assignment extends Occurrence {
    constructor(frameOrObjectID, nameOrField, location, isObjectField = false, functionCallStack = undefined) {
        super(frameOrObjectID, nameOrField, location)
        this.isObject = isObjectField
        this.functionCallStack = functionCallStack
    }

    describe () {
        return `Branch ${this.getBranch()} at line ${this.getLine()} ${this.getLocation()}${this.functionCallStack?.length ? ` with interprocedural stack: ${JSON.stringify(this.functionCallStack)}` : ''}`
    }
}

module.exports = Assignment