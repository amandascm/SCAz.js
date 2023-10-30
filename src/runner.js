const { exec, execSync } = require('child_process')
const path = require('path')
const fs = require('fs')


// Initialize variables to store argument values
const DEFAULT_TO_ALL = 'all'
// Define allowed values for --conflictAnalysis
const ALLOWED_CONFLICT_ANALYSES = ['override_assignment']
// Paths
let BASE_DIR = path.join(__dirname, '..')
let AVAILABLE_ANALYSES_DIR = path.join(BASE_DIR, 'src')

class AnalysisUnit {
  constructor(conflictAnalysis, testCase, command) {
    this.conflictAnalysis= conflictAnalysis
    this.testCase = testCase, 
    this.command = command
  }
}

class Runner {
  constructor () {
    this.testCaseValue = DEFAULT_TO_ALL // Default value for testCase
    this.conflictAnalysisValue = DEFAULT_TO_ALL // Default value for conflictAnalysis
  }

  updateParamsWithArguments = () => {
    // Process command-line arguments
    for (let i = 2; i < process.argv.length; i++) {
      const arg = process.argv[i]
      if (arg.startsWith('--testCase=')) {
        // Extract the value following '--testCase'
        this.testCaseValue = arg.substring('--testCase='.length)
      } else if (arg.startsWith('--conflictAnalysis=')) {
        // Extract the value following '--conflictAnalysis'
        const providedValue = arg.substring('--conflictAnalysis='.length)
        if (ALLOWED_CONFLICT_ANALYSES.includes(providedValue)) {
          conflictAnalysisValue = providedValue
        } else {
          console.log('Invalid conflictAnalysis value provided.')
          return
        }
      }
    }
  
    console.log(`Test case value: ${this.testCaseValue}`)
    console.log(`Conflict analysis value: ${conflictAnalysisValue}`)
  }

  buildAnalysisUnit = (testCase, conflictAnalysis) => {
    const chainedAnalysesPath = path.join(BASE_DIR, 'jalangi2', 'src', 'js', 'sample_analyses', 'ChainedAnalyses.js')
    const smemoryAnalysisPath = path.join(BASE_DIR, 'jalangi2', 'src', 'js', 'runtime', 'SMemory.js')
    const jalangiPath = path.join(BASE_DIR, 'jalangi2', 'src', 'js', 'commands', 'jalangi.js')
    
    return new AnalysisUnit(
      conflictAnalysis,
      testCase,
      `node ${jalangiPath} --initParam testCase:${testCase} --inlineIID --inlineSource --analysis ${chainedAnalysesPath} --analysis ${smemoryAnalysisPath} --analysis ${path.join(AVAILABLE_ANALYSES_DIR, conflictAnalysis, 'analysis.js')} ${path.join(AVAILABLE_ANALYSES_DIR, conflictAnalysis, 'test_cases', testCase, 'index.js')}`
    )
  }
  
  listDirectoriesInBaseDir(baseDir) {
    const dirPath = path.join(baseDir);
  
    try {
      const subDirs = fs.readdirSync(dirPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
  
      return subDirs;
    } catch (error) {
      console.error(`Error reading directories in ${dirPath}: ${error.message}`);
      return [];
    }
  }
  
  getAnalysisAvailableTestCases = (conflictAnalysis) => {
    return this.listDirectoriesInBaseDir(path.join(AVAILABLE_ANALYSES_DIR, conflictAnalysis, 'test_cases'))
  }
  
  getAnalysisTestCasesUnities = (conflictAnalysis) => {
    const testCases = this.getAnalysisAvailableTestCases(conflictAnalysis)
    return testCases.map(
      (testCase) => this.buildAnalysisUnit(testCase, conflictAnalysis)
    )
  }
  
  runAnalysisUnit = analysisUnit => {
    try {
      const stdout = execSync(analysisUnit.command, { encoding: 'utf-8' });
      console.log(`\n - Test case: ${analysisUnit.testCase}`);
      if (stdout) console.log(`    Output: ${stdout}`);
      else console.log(`    No output`);
    } catch (error) {
      console.log(`\n - Test case: ${analysisUnit.testCase}`);
      console.error(`    Error: ${error.message}`);
    }
  }
  
  runAnalysis = (conflictAnalysis, testCase) => {
    console.log(`\nSTARTING TO RUN ANALYSIS: ${conflictAnalysis}...`)
    switch (testCase) {
      case DEFAULT_TO_ALL:
        this.getAnalysisTestCasesUnities(conflictAnalysis)
          .forEach((testCaseCommand) => {
            this.runAnalysisUnit(testCaseCommand)
          })
        break
      default:
        this.runAnalysisUnit(this.buildAnalysisUnit(testCase, conflictAnalysis))
        break
    }
  }
  
  getAvailableAnalyses = () => {
    return this.listDirectoriesInBaseDir(path.join(AVAILABLE_ANALYSES_DIR))
  }
  
  runAnalyses = (conflictAnalysisValue, testCaseValue) => {
    this.conflictAnalysisValue = conflictAnalysisValue
    this.testCaseValue = testCaseValue
    switch (conflictAnalysisValue) {
      case DEFAULT_TO_ALL:
        const analyses = getAvailableAnalyses()
        for (let conflictAnalysis of analyses) {
          this.runAnalysis(conflictAnalysis, testCaseValue)
        }
        break
      default:
        this.runAnalysis(conflictAnalysisValue, testCaseValue)
        break
    }
  }
}


// updateParamsWithArguments()
// runAnalyses(conflictAnalysisValue, testCaseValue)

module.exports = {
  Runner
}

