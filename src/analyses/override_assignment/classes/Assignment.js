const Occurrence = require('./Occurrence')

class Assignment extends Occurrence {
    constructor(frameOrObjectID, nameOrField, location, isObject = false) {
        super(frameOrObjectID, nameOrField, location)
        this.isObject = isObject
    }
}

module.exports = Assignment