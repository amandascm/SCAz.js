const path = require('path')

// Paths
const BASE_DIR = path.join(__dirname, '..', '..')
const AVAILABLE_ANALYSES_DIR = path.join(BASE_DIR, 'src', 'analyses')
const PROJECTS_DIR = path.join(BASE_DIR, 'src', 'projects')

module.exports = {
    BASE_DIR,
    AVAILABLE_ANALYSES_DIR,
    PROJECTS_DIR
}