# SCAz.js

A Semantic Conflict Analyzer for JavaScript.
With SCAz.js you can dinamically detect semantic conflicts, such as overriding assignment interferences, on JavaScript files after a Git merge.

### Getting started

Clone the project with the recursive flag (this project uses [Jalangi2](https://github.com/Samsung/jalangi2) as framework and needs its specified version as a submodule):
```
git clone --recursive https://github.com/amandascm/SCAz.js
```
Install dependencies:
```
nvm install && nvm use && npm i
```
For running the available analyses test cases, do:
```
npm run test:analyses
```
For running SCAz.js on a set of merge scenarios from GitHub, the command below will do so to the list defined at [project_cases.csv](src/projects/project_cases.csv):
- Required columns: `project`; `merge commit`; `ancestor commit`; `left parent commit`; `right parent commit`; `file path`; `repo url`.
```
npm run projects
```
The [output.csv](src/projects/output.csv) will be a copy of the same CSV file but with extra columns representing the results of the analysis. See `execution event batch` column (JSON) to know what happened in each case.

### Environment

Until now, SCAz.js has only been tested on Linux systems.