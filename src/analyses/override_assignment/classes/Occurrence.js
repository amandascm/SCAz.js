const utils = require('./../utils')
const LineToBranchMapper = require('./LineToBranchMapper')

class Occurrence {
    constructor(id, name, location) {
        this.id = id
        this.name = name
        this.location = location
        this.branch = LineToBranchMapper.getInstance().mapLineToBranch(this.getLine())
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
        return utils.getSourceFileCorrespondingLine(this.location)
    }

    setBranch(branch) {
        this.branch = branch
    }
}

module.exports = Occurrence