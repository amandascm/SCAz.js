const utils = require('./../utils')

class LocationToBranchService {
    constructor(linesBranchMap = {}) {
        this.linesBranchMap = linesBranchMap
        this.inputFilePath = undefined
    }

    setInputs(linesBranchMap, inputFilePath) {
        this.linesBranchMap = linesBranchMap
        this.inputFilePath = inputFilePath
    }

    getLineToBranchMap() {
        return this.linesBranchMap
    }

    mapLocationEndLineToBranch(sourceFileLocation) {
        if (utils.getSourceFilePath(sourceFileLocation) === this.inputFilePath) {
            return this.linesBranchMap[utils.getFileLocationEndLine(sourceFileLocation)] ?? undefined
        }
        return undefined
    }

    mapLocationLineRangeToBranch(sourceFileLocation) {
        let branch = undefined
        if (utils.getSourceFilePath(sourceFileLocation) === this.inputFilePath) {
            const [startLine, endLine] = utils.getFileLocationLines(sourceFileLocation)
            for (let line = startLine; line <=endLine; line++) {
                branch = this.linesBranchMap[line] ?? branch
            }
        }
        return branch
    }

    static getInstance (linesBranchMap = {}) {
        if (!this.instance) {
            this.instance = new LocationToBranchService(linesBranchMap)
        }
        return this.instance
    }

}

module.exports = LocationToBranchService