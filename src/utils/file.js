const path = require('path')
const fs = require('fs')

function listDirectoriesInBaseDir(baseDir) {
    const dirPath = path.join(baseDir)

    const subDirs = fs.readdirSync(dirPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)

    return subDirs;
}

function localPathExists(localPath) {
    return fs.existsSync(localPath)
}

function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content)
}

function deleteFile(filePath) {
    fs.unlinkSync(filePath)
}

module.exports = {
    listDirectoriesInBaseDir,
    localPathExists,
    writeFile,
    deleteFile
}