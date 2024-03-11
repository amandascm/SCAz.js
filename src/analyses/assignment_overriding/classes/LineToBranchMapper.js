const utils = require('./../utils')

class LineToBranchMapper {
    constructor(linesBranchMap = {}) {
        this.linesBranchMap = linesBranchMap
        this.inputFilePath = undefined
    }

    setLineToBranchMap(linesBranchMap, inputFilePath) {
        this.linesBranchMap = linesBranchMap
        this.inputFilePath = inputFilePath
    }

    getLineToBranchMap() {
        return this.linesBranchMap
    }

    mapLocationToBranch(sourceFileLocation) {
        if (utils.getSourceFilePath(sourceFileLocation) === this.inputFilePath) {
            return this.linesBranchMap[utils.getSourceFileCorrespondingLine(sourceFileLocation)] ?? undefined
        }
        return undefined
    }

    static getInstance (linesBranchMap = {}) {
        if (!this.instance) {
            this.instance = new LineToBranchMapper(linesBranchMap)
        }
        return this.instance
    }

}

module.exports = LineToBranchMapper