const { DATA_DIR, DATA_INPUT_DIR, DATA_OUTPUT_DIR } = require("../../../config");
const path = require('path')
const fs = require('fs')
const csvParser = require('csv-parser');
const { execSync } = require('child_process');
const Logger = require('../../utils/logger')
const { Git } = require('../../utils/git')
const { localPathExists } = require('../../utils/file');
const { RunnerService } = require('./../../services/runnerService')


const logger = new Logger('Projects Runner')

// Input and output file paths
const inputFile = path.join(DATA_INPUT_DIR, 'project_cases.csv');
const outputCsvFile = path.join(DATA_OUTPUT_DIR, 'output.csv');

fs.writeFileSync(outputCsvFile, ``);

// Read the CSV file using csv-parser
const rows = [];
fs.createReadStream(inputFile)
  .pipe(csvParser({ separator: ';' }))
  .on('headers', (headerFields) => {
    headerFields.push('sampleId', 'original elapsed time')
    fs.appendFileSync(outputCsvFile, `${Object.values(headerFields).join(';')}\n`);
  })
  .on('data', (row) => {
    rows.push(row);
  })
  .on('end', () => {
    processRows(rows)
  })

function installDependencies(projectPath) {
  try {
    if (localPathExists(`${projectPath}/node_modules`)) {
      execSync(`rm -rf ${projectPath}/node_modules`, { encoding: 'utf-8' });
    }
    let output = execSync(`cd ${projectPath} && nvm install`, { encoding: 'utf-8', timeout: 120000 });
    output = execSync(`cd ${projectPath} && nvm use`, { encoding: 'utf-8', timeout: 120000 });
  } catch (error) {
    logger.log(`Error executing command: ${error.message}`);
  } finally {
    output = execSync(`cd ${projectPath} && npm install --quiet`, { encoding: 'utf-8', timeout: 120000 });
  }
}

// Process each row
async function processRows(rows) {
  const currentCursor = 0
  logger.log(`Started processing rows from CSV... ${currentCursor}, ${rows.length}`)
  for (let rowIndex = currentCursor; rowIndex<rows.length; rowIndex++) {
    logger.log(`Started processing row ${rowIndex}`)
    const row = rows[rowIndex]
    row.sampleId = rowIndex
    const repoUrl = row['repo url']
    const mergeCommmit = row['merge commit']
    const projectName = row['project']
    const fileRelativePath = row['file path']

    const localProjectPath = path.join(DATA_DIR, 'cloned_projects', projectName)
    const filePath = path.join(localProjectPath, fileRelativePath)

    try {
      const git = Git.getInstance()
      await git.clone(repoUrl, localProjectPath)
      await git.checkoutCommit(localProjectPath, mergeCommmit)
      installDependencies(localProjectPath)
    } catch (err) {
      logger.log(`${rowIndex} Error on pre-analysis prep: ${err?.message}`)
      continue
    }
    try {
      const runner = RunnerService.getInstance()
    	const original_exec_res = runner.runProcess(`node ${filePath}`, true)
      row['original elapsed time'] = original_exec_res?.elapsedTime
      fs.appendFileSync(outputCsvFile, `${Object.values(row).join(';')}\n`);
    } catch (err) {
      logger.log(err?.message)
    }
  }
}
