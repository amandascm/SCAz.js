const AnalysisStrategy = require(".")
const path = require('path')
const { BASE_DIR, AVAILABLE_ANALYSES_DIR } = require('./../../../config')
const { AnalysisParamService } = require('../../services/analysisParamService')
const Context = require('./../../models/Context')
const AnalysisEnum = require("../../models/AnalysisEnum")
const { v4: uuidv4 } = require('uuid')
const ExecutionUnit = require('../../models/ExecutionUnit')

class OverridingAssignmentAnalysisStrategy extends AnalysisStrategy {
    constructor () {
        super()
        this.identifier = AnalysisEnum.OVERRIDING_ASSIGNMENT
        this.instance = undefined
    }

    static getInstance () {
        if (!this.instance) {
            this.instance = new OverridingAssignmentAnalysisStrategy()
        }
        return this.instance
    }

    _validateParams (params) {
        // use JSON schema instead
        if (
            !(params instanceof Object &&
            "inputFilePath" in params &&
            "lineToBranchMapPath" in params)
        ) {
            throw new Error(`Invalid params for analysis ${this.identifier}`)
        }
    }

    buildExecutionUnit (params) {
        const chainedAnalysesPath = path.join(BASE_DIR, 'jalangi2', 'src', 'js', 'sample_analyses', 'ChainedAnalyses.js')
        const smemoryAnalysisPath = path.join(BASE_DIR, 'jalangi2', 'src', 'js', 'runtime', 'SMemory.js')
        // const traceAllAnalysisPath = path.join(BASE_DIR, 'jalangi2', 'src', 'js', 'sample_analyses', 'pldi16', 'TraceAll.js') //--analysis ${traceAllAnalysisPath}
        const jalangiPath = path.join(BASE_DIR, 'jalangi2', 'src', 'js', 'commands', 'jalangi.js')
        const uuid = uuidv4()
        this._validateParams(params)
        const extraParams = AnalysisParamService.encodeParams({...params, UUID: uuid})
        Context.getInstance().setUUID(uuid)
        return new ExecutionUnit(
            params.inputFilePath,
            (`node ${jalangiPath} ` +
            `--initParam extraParams:${extraParams} ` +
            `--inlineIID ` +
            `--inlineSource ` +
            `--analysis ${chainedAnalysesPath} ` +
            `--analysis ${smemoryAnalysisPath} ` +
            `--analysis ${path.join(AVAILABLE_ANALYSES_DIR, this.identifier, 'index.js')} ` +
            `${params.inputFilePath}`),
            uuid
        )
    }
}

module.exports = OverridingAssignmentAnalysisStrategy;
