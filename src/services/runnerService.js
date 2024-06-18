const { spawnSync } = require('child_process')
const Context = require('./../models/Context')
const { Event, EventTypeEnum } = require('./../models/Event')
const { EventService } = require('./eventService')
const Logger = require('./../utils/logger')
const AnalysisEnum = require('../models/AnalysisEnum')
const OverridingAssignmentAnalysisStrategy = require('../strategies/analysisStrategy/OverridingAssignmentAnalysisStrategy')
const DefaultAnalysisStrategy = require('../strategies/analysisStrategy/DefaultAnalysisStrategy')

const logger = new Logger('Runner')
class RunnerService {
  constructor () {
    this.analysisStrategy = undefined
  }

  static getInstance () {
    if (!this.instance) {
      this.instance = new RunnerService()
    }
    return this.instance
  }

  runProcess = (command, countElapsedTime = false) => {
    let start, end, result
    if (countElapsedTime) {
      start = performance.now();
      result = spawnSync(command.split(' ')[0], command.split(' ').filter((_, i) => i !== 0), { encoding: 'utf-8', timeout: 30000 });
      end = performance.now();
    } else {
      result = spawnSync(command.split(' ')[0], command.split(' ').filter((_, i) => i !== 0), { encoding: 'utf-8', timeout: 30000 });
    }
    return { result, elapsedTime: (countElapsedTime ? (end - start) : undefined) }
  }
  
  runExecutionUnit = (executionUnit, countElapsedTime = false) => {
    logger.log(`\nRunning against: ${executionUnit.inputPath}`);
    try {
      const { result, elapsedTime } = this.runProcess(executionUnit.command, countElapsedTime)
      if (result.status != null && result.status === 0 && result.stdout) {
        const eventBatch = EventService.recoverBatchFromString(result.stdout)
        logger.log(`Output Event Batch: ${JSON.stringify(eventBatch)}`);
        return {eventBatch, elapsedTime}
      } else {
        if (result.error) {
          throw error
        } else {
          throw new Error(result.stderr)
        }
      }
    } catch (error) {
      const eventBatch = EventService.buildBatch(
          Context.getInstance().getUUID(),
          {},
          [new Event(EventTypeEnum.ERROR, `Error`,`${error?.message}`)]
        )
        logger.log(`Error Event Batch: ${JSON.stringify(eventBatch)}`);
      return {eventBatch}
    }
  }
  
  buildAnalysisExecutionUnit = (customAnalysis, params) => {
    let analysisExecutionUnit
    switch (customAnalysis) {
      case AnalysisEnum.OVERRIDING_ASSIGNMENT:
        analysisExecutionUnit = OverridingAssignmentAnalysisStrategy.getInstance().buildExecutionUnit(params);
        break;
      default:
        analysisExecutionUnit = DefaultAnalysisStrategy.getInstance().buildExecutionUnit(params);
    }
    return analysisExecutionUnit
  }

  runAnalysis = (customAnalysis, params, countElapsedTime = false) => {
    const analysisExecutionUnit = this.buildAnalysisExecutionUnit(customAnalysis, params)
    logger.log(`\nStarting to run analysis: ${customAnalysis}...`)
    return this.runExecutionUnit(analysisExecutionUnit,countElapsedTime)
  }
}

module.exports = {
  RunnerService
}

