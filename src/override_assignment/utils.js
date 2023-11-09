function getSourceFileCorrespondingLine (location) {
    // location in the format: file_path.js:15:25:15:28
    return Number(location.split(':')[3])
}

module.exports = {
    getSourceFileCorrespondingLine
}