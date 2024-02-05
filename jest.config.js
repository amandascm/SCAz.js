/** @type {import('jest').Config} */
const config = {
    verbose: true,
    testPathIgnorePatterns: [
        "/node_modules/",
        "/clonedRepositories/"
    ]
};

module.exports = config;