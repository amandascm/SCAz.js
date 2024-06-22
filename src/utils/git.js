const simpleGit = require('simple-git');
const { localPathExists } = require('./file')

class Git {
    constructor () {
        const options = {
            baseDir: process.cwd(),
            completion: {
                onExit: 100,
                onClose: 100,
            }
        };
        this.instance = simpleGit({...options})
        this.config = {
            blameShaSize: 10
        }
    }

    static getInstance () {
        if (!this.instance) {
            this.instance = new Git()
        }
        return this.instance
    }

    async clone(repoUrl, repoPath, onlyIfNotExists = true) {
        if (!onlyIfNotExists || !localPathExists(repoPath)) {
            await this.instance.clone(repoUrl, repoPath)
        }
    }
    
    async checkoutCommit(repoPath, commitSha) {
        await this.instance.cwd(repoPath).checkout(commitSha, ['--force'])
    }

    async getCommitsBetweenCommits(repoPath, ancestorSHA, parentSHA) {
        try {
            const result = await this.instance.cwd(repoPath).log([`${ancestorSHA}..${parentSHA}`])
            const commitList = result.all.map(commit => commit?.hash)
            return commitList
        } catch (err) {
            throw err
        }
    }

    parseBlameToCommitLineMap(output) {
        const regex = /^[\^]?([a-z0-9]*|)\s\([^)\n]*\s([0-9]+)\){1}.*|\s/mg
        const commitLines = {};
        
        for (const match of output.matchAll(regex)) {
            if(match.length >= 2 && match[1] !== undefined && match[2] !== undefined) {
                const fileLine = Number(match[2])
                const commitSha = match[1]
                commitLines[commitSha] = commitLines[commitSha] ? [...commitLines[commitSha], fileLine] : [fileLine]
            }
        }
        return commitLines
    }

    async getMergeFileLineToCommitMap(repoPath, mergeCommit, filePath) {
        try {
            const result = await this.instance.cwd(repoPath).checkout(mergeCommit, ['--force']).raw(['blame', filePath, mergeCommit, '-M', `--abbrev=${this.config.blameShaSize}`])
            return this.parseBlameToCommitLineMap(result)
        } catch (err) {
            throw err
        }
    }

    async getMergeLinesAffectedByParent(mergeCommit, ancestorCommit, parentCommit, repoPath, filePath) {
        const mergeCommitsToLinesMap = await this.getMergeFileLineToCommitMap(repoPath, mergeCommit, filePath)
        const parentBranchCommits = await this.getCommitsBetweenCommits(repoPath, ancestorCommit, parentCommit)
        const mergeLinesAffectedByParent = []
        for (const commit of parentBranchCommits) {
            const mergeLinesAffectedByCommit = mergeCommitsToLinesMap[commit.slice(0,(this.config.blameShaSize + 1))] ?? mergeCommitsToLinesMap[commit]
            if (mergeLinesAffectedByCommit?.length > 0) {
                mergeLinesAffectedByParent.push(...mergeLinesAffectedByCommit)
            }
        }
        return mergeLinesAffectedByParent
    }
}

module.exports = {
    Git
}

// ebfaba07e514a7e7f1e1f582fa33f1597fed8482;89cffac4a5a27bbcb7a8b253495c8efd74a3336f;5d246ad;8668678
// const git = new Git()
// git.getCommitsBetweenCommits('/home/amanda/Documents/tcc/dynamic-analysis/semantic-conflict-analysis/src/projects/cloned_projects/Bowser',
//     '89cffac4a5a27bbcb7a8b253495c8efd74a3336f',
//     '5d246ad'
// )

// git.getMergeFileLineToCommitMap(
//     '/home/amanda/Documents/tcc/dynamic-analysis/semantic-conflict-analysis/src/projects/cloned_projects/Bowser',
//     'ebfaba07e514a7e7f1e1f582fa33f1597fed8482',
//     'src/bowser.js'
// )

// git.getMergeLinesAffectedByParent(
//     'ebfaba07e514a7e7f1e1f582fa33f1597fed8482',
//     '89cffac4a5a27bbcb7a8b253495c8efd74a3336f',
//     '5d246ad',
//     '/home/amanda/Documents/tcc/dynamic-analysis/semantic-conflict-analysis/src/projects/cloned_projects/Bowser',
//     'src/bowser.js'
// )

// git.getMergeLinesAffectedByParent(
//     'ebfaba07e514a7e7f1e1f582fa33f1597fed8482',
//     '89cffac4a5a27bbcb7a8b253495c8efd74a3336f',
//     '8668678',
//     '/home/amanda/Documents/tcc/dynamic-analysis/semantic-conflict-analysis/src/projects/cloned_projects/Bowser',
//     'src/bowser.js'
// )