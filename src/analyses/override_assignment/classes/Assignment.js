const Occurrence = require('./Occurrence')

class Assignment extends Occurrence {
    constructor(frameOrObjectID, nameOrField, location, isObject = false, functionCallStack = undefined) {
        super(frameOrObjectID, nameOrField, location)
        this.isObject = isObject
        this.functionCallStack = functionCallStack
    }
}

module.exports = Assignment