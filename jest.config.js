/** @type {import('jest').Config} */
const config = {
    verbose: true,
    testPathIgnorePatterns: [
        "/node_modules/",
        "/cloned_projects/"
    ]
};

module.exports = config;