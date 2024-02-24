const path = require('path')
const { PROJECTS_DIR } = require('../config')
const { Runner } = require('./../runner')
const { execSync } = require('child_process');
const { clone, checkoutCommit, Git } = require('../utils/git');
const { writeFile, deleteFile, localPathExists } = require('../utils/file');
const Logger = require('../logger')

const logger = new Logger('Analyzer')

function installDependencies(projectPath) {
    try {
        // const currdir = execSync(`cd ${projectPath} && pwd`, { encoding: 'utf-8' });
        if (localPathExists(`${projectPath}/node_modules`)) {
            execSync(`rm -rf ${projectPath}/node_modules`, { encoding: 'utf-8' });
        }
        let output = execSync(`cd ${projectPath} && nvm install`, { encoding: 'utf-8' });
        output = execSync(`cd ${projectPath} && nvm use`, { encoding: 'utf-8' });
    } catch (error) {
        logger.log(`Error executing command: ${error.message}`);
    } finally {
        output = execSync(`cd ${projectPath} && npm install`, { encoding: 'utf-8' });
        // logger.log(`Command output:\n${output}`);
    }
}


function objectToHTML(obj, indent = 2) {
    const spaces = ' '.repeat(indent);

    if (typeof obj !== 'object' || obj === null) {
        return `${spaces}<span>${String(obj)}</span>`;
    }

    const keys = Object.keys(obj);
    if (keys.length === 0) {
        return `${spaces}<span>{}</span>`;
    }

    return `${spaces}<ul>\n${keys.map(key => {
        const value = obj[key]
        return `${spaces}  <li>${key}: ${objectToHTML(value, indent + 2)}</li>`
    }).join('\n')}\n${spaces}</ul>`;
}

async function analyze(filePath, lineToBranchMapPath) {
    // const reportPath = path.join(localProjectPath, '..', `${commitSha}-${fileRelativePath.replaceAll('/', '-').replaceAll('.', '-')}-report.html`)
    try {
        const runner = new Runner()
        const eventBatch = runner.runAnalysis('override_assignment', filePath, lineToBranchMapPath)
        return {
            eventTypes: eventBatch?.events?.map(event => event.type),
            eventBatch
        }
    } catch (err) {
        logger.log(err?.message, '---------')
        return undefined
    }
}


// const repoName = 'Ace'
// const commitSha = '0f35c1093a1847f3d619cf6fc44c298cda69147b'
// const repoUrl = 'https://github.com/ajaxorg/ace';
// analyze(repoName, repoUrl, 'lib/ace/ext/modelist.js', commitSha, {
//     "81": "L",
//     "193": "R",
//     "66": "R",
//     "67": "R",
//     "68": "R",
//     "133": "R",
//     "169": "R",
//     "142": "R",
//     "207": "R",
//     "208": "R",
//     "209": "R",
//     "52": "R",
//     "180": "R",
//     "85": "R",
//     "55": "R",
//     "157": "R",
//     "144": "R",
//     "145": "R",
//     "146": "R",
//     "101": "R",
//     "213": "R",
//     "214": "R",
//     "215": "R",
//     "186": "R",
//     "77": "R"
// })

module.exports = {
    analyze
}
