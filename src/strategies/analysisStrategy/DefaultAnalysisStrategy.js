const AnalysisStrategy = require(".")
const path = require('path')
const { BASE_DIR } = require('./../../../config')
const { AnalysisParamService } = require('../../services/analysisParamService')
const Context = require('./../../models/Context')
const { v4: uuidv4 } = require('uuid')
const ExecutionUnit = require('../../models/ExecutionUnit')

class DefaultAnalysisStrategy extends AnalysisStrategy {
    constructor () {
        super()
        this.instance = undefined
    }

    static getInstance () {
        if (!this.instance) {
            this.instance = new DefaultAnalysisStrategy()
        }
        return this.instance
    }

    buildExecutionUnit(params) {
        const chainedAnalysesPath = path.join(BASE_DIR, 'jalangi2', 'src', 'js', 'sample_analyses', 'ChainedAnalyses.js')
        const smemoryAnalysisPath = path.join(BASE_DIR, 'jalangi2', 'src', 'js', 'runtime', 'SMemory.js')
        // const traceAllAnalysisPath = path.join(BASE_DIR, 'jalangi2', 'src', 'js', 'sample_analyses', 'pldi16', 'TraceAll.js') //--analysis ${traceAllAnalysisPath}
        const jalangiPath = path.join(BASE_DIR, 'jalangi2', 'src', 'js', 'commands', 'direct.js')
        const jalangiInstPath = path.join(BASE_DIR, 'jalangi2', 'src', 'js', 'commands', 'esnstrument_cli.js')
        const instFilePath = path.join(path.dirname(params.inputFilePath), `${path.basename(params.inputFilePath, '.js')}_jalangi_.js`)
        const uuid = uuidv4()
        const extraParams = params ? AnalysisParamService.encodeParams({...params, UUID: uuid}) : undefined
        Context.getInstance().setUUID(uuid)
        return new ExecutionUnit(
            params.inputFilePath,
            (`node ${jalangiPath} ` +
            (params ? `--initParam extraParams:${extraParams}` : '') +
            `--analysis ${chainedAnalysesPath} ` +
            `--analysis ${smemoryAnalysisPath} ` +
            `${instFilePath}`),
            uuid,
            (`node ${jalangiInstPath} ` +
            `--inlineIID ` +
            `--inlineSource ` +
            `${params.inputFilePath}`)
        )
    }
}

module.exports = DefaultAnalysisStrategy;
