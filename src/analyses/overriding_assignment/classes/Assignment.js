const Occurrence = require('./Occurrence')
const LineToBranchMapper = require('./LineToBranchMapper')

class Assignment extends Occurrence {
    constructor(frameOrObjectID, nameOrField, location, isObjectField = false, functionCallStack = undefined) {
        super(frameOrObjectID, nameOrField, location)
        this.isObject = isObjectField
        this.functionCallStack = functionCallStack
        this.branch = LineToBranchMapper.getInstance().mapLocationLineRangeToBranch(this.getLocation())
    }

    describe () {
        return `Branch ${this.getBranch()} at ${this.getLocation()}${this.functionCallStack?.length ? ` with interprocedural stack: ${JSON.stringify(this.functionCallStack)}` : ''}`
    }

    setFunctionCallStack (functionCallStack) {
        this.functionCallStack = functionCallStack
    }
}

module.exports = Assignment