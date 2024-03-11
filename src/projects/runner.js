const { PROJECTS_DIR } = require("../config");
const path = require('path')
const fs = require('fs')
const csvParser = require('csv-parser');
const { execSync } = require('child_process');
const Logger = require('../logger')
const { Git } = require('../utils/git')
const { writeFile, deleteFile, localPathExists } = require('../utils/file');
const { Runner } = require('./../runner')
const AnalysisEnum = require('./../analyses/AnalysisEnum')


const logger = new Logger('Projects Runner')

// Input and output file paths
const inputFile = path.join(PROJECTS_DIR, 'project_cases.csv');
const outputCsvFile = path.join(PROJECTS_DIR, 'output.csv');
const outputHtmlFile = path.join(PROJECTS_DIR, 'output.html');

// individual
// const inputFile = path.join(PROJECTS_DIR, 'test_individual_case.csv');
// const outputCsvFile = path.join(PROJECTS_DIR,'output_individual.csv');
// const outputHtmlFile = path.join(PROJECTS_DIR,'output_individual.html');

// Create or overwrite the HTML file
fs.writeFileSync(outputHtmlFile, '<html><head><style>table { border-collapse: collapse; width: 100%; } th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }</style></head><body><table>\n');
fs.writeFileSync(outputCsvFile, ``);
const currentCursor = 0// 0

// Add HTML footer
const footer = '</table></body></html>';

// Read the CSV file using csv-parser
const rows = [];
fs.createReadStream(inputFile)
  .pipe(csvParser({ separator: ';' }))
  .on('headers', (headerFields) => {
    headerFields.push('left lines', 'right lines', 'execution events', 'execution event batch')
    fs.appendFileSync(outputCsvFile, `${Object.values(headerFields).join(';')}\n`);
    const tableHeader = `<thead><tr>${headerFields.map(header => `<th>${header}</th>`).join('')}</tr></thead>`;
    fs.appendFileSync(outputHtmlFile, tableHeader);
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
  logger.log(`Started processing rows from CSV... ${currentCursor}, ${rows.length}`)
  for (let rowIndex = currentCursor; rowIndex<rows.length; rowIndex++) {
    const row = rows[rowIndex]
    const repoUrl = row['repo url']
    const mergeCommmit = row['merge commit']
    const ancestorCommit = row['ancestor commit']
    const leftParentCommit = row['left parent commit']
    const rightParentCommit = row['right parent commit']
    const projectName = row['project']
    const fileRelativePath = row['file path']

    const localProjectPath = path.join(PROJECTS_DIR, 'cloned_projects', projectName)
    const lineToBranchMapPath = path.join(localProjectPath, '..', `${mergeCommmit}-lineToBranchMap.json`)
    const filePath = path.join(localProjectPath, fileRelativePath)

    let leftLines, rightLines

    try {
      const git = Git.getInstance()
      await git.clone(repoUrl, localProjectPath)
      const lineToBranchMap = {}
      leftLines = await git.getMergeLinesAffectedByParent(mergeCommmit, ancestorCommit, leftParentCommit, localProjectPath, filePath)
      for (const line of leftLines) {
        lineToBranchMap[line] = 'L'
      }
      rightLines = await git.getMergeLinesAffectedByParent(mergeCommmit, ancestorCommit, rightParentCommit, localProjectPath, filePath)
      for (const line of rightLines) {
        lineToBranchMap[line] = 'R'
      }
      if (!(leftLines.length > 0 && rightLines.length > 0)) {
        logger.log(`${rowIndex} No lines extracted from merge for parents: ${projectName}, ${mergeCommmit}`)
        continue
      }
      installDependencies(localProjectPath)
      writeFile(lineToBranchMapPath, JSON.stringify(lineToBranchMap))
    } catch (err) {
      logger.log(`${rowIndex} Error on pre-analysis prep: ${err?.message}`)
      continue
    }
    try {
      const runner = Runner.getInstance()
      const eventBatch = runner.runAnalysis(AnalysisEnum.ASSIGNMENT_OVERRIDING, filePath, lineToBranchMapPath)
      if (eventBatch) {
        row.leftLines = leftLines
        row.rightLines = rightLines
        row.event_types = eventBatch?.events?.map(event => event.type)
        row.eventBatch = JSON.stringify(eventBatch).replace(';', '.,')
        fs.appendFileSync(outputCsvFile, `${Object.values(row).join(';')}\n`);
        // Create an HTML table row
        const tableRow = `<tr>${Object.values(row).map(value => `<td>${value}</td>`).join('')}</tr>\n`;
        fs.appendFileSync(outputHtmlFile, tableRow);
      }
      deleteFile(lineToBranchMapPath)
    } catch (err) {
      logger.log(err?.message)
    }
  }
  fs.appendFileSync(outputHtmlFile, footer);
}
