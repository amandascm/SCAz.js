class LineToBranchMapper {
    constructor(linesBranchMap = {}) {
        this.linesBranchMap = linesBranchMap
    }

    setLineToBranchMap(linesBranchMap) {
        this.linesBranchMap = linesBranchMap
    }

    mapLineToBranch(sourceFileLine) {
        return this.linesBranchMap[sourceFileLine] ?? undefined
    }

    static getInstance (linesBranchMap = {}) {
        if (!this.instance) {
            this.instance = new LineToBranchMapper(linesBranchMap)
        }
        return this.instance
    }

}

module.exports = LineToBranchMapper