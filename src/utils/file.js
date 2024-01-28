const path = require('path')
const fs = require('fs')

function listDirectoriesInBaseDir(baseDir) {
    const dirPath = path.join(baseDir);

    try {
        const subDirs = fs.readdirSync(dirPath, { withFileTypes: true })
            .filter(dirent => dirent.isDirectory())
            .map(dirent => dirent.name);

        return subDirs;
    } catch (error) {
        console.error(`Error reading directories in ${dirPath}: ${error.message}`);
        throw error;
    }
}

module.exports = {
    listDirectoriesInBaseDir
}