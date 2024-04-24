const path = require('path')

// Paths
const BASE_DIR = path.join(__dirname, '..')
const AVAILABLE_ANALYSES_DIR = path.join(BASE_DIR, 'src', 'analyses')
const DATA_DIR = path.join(BASE_DIR, 'data')
const DATA_INPUT_DIR = path.join(BASE_DIR, 'data', 'input')
const DATA_OUTPUT_DIR = path.join(BASE_DIR, 'data', 'output')

module.exports = {
    BASE_DIR,
    AVAILABLE_ANALYSES_DIR,
    DATA_DIR,
    DATA_INPUT_DIR,
    DATA_OUTPUT_DIR
}