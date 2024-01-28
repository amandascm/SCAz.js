const path = require('path')

// Define allowed values for --conflictAnalysis
const ALLOWED_CONFLICT_ANALYSES = ['override_assignment']

// Paths
const BASE_DIR = path.join(__dirname, '..', '..')
const AVAILABLE_ANALYSES_DIR = path.join(BASE_DIR, 'src', 'analyses')

module.exports = {
    ALLOWED_CONFLICT_ANALYSES,
    BASE_DIR,
    AVAILABLE_ANALYSES_DIR
}