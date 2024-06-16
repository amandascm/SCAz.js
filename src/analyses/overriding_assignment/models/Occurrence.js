const utils = require('./../utils')

class Occurrence {
    constructor(id, name, location, branch) {
        this.id = id
        this.name = name
        this.location = location
        this.branch = branch
    }

    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getLHSIdentifier() {
        return `${this.id}_${this.name}`
    }

    getBranch() {
        return this.branch
    }

    getLocation() {
        return this.location
    }

    getLine() {
        return utils.getFileLocationEndLine(this.location)
    }

    setBranch(branch) {
        this.branch = branch
    }
}

module.exports = Occurrence