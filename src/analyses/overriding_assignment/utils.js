function getFileLocationEndLine (location) {
    // location in the format: file_path.js:15:25:15:28
    return Number(location.split(':')[3])
}

function getSourceFilePath (location) {
    // location in the format: file_path.js:15:25:15:28
    return location.split(':')[0].replace('(', '').replace(')', '')
}

function getFileLocationLines (location) {
    // location in the format: file_path.js:15:25:15:28
    const startLine = Number(location.split(':')[1])
    const endLine = Number(location.split(':')[3])
    return [startLine, endLine]
}

module.exports = {
    getFileLocationEndLine,
    getSourceFilePath,
    getFileLocationLines
}