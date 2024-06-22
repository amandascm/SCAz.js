# SCAz.js

A Semantic Conflict Analyzer for JavaScript.
With SCAz.js you can dinamically detect semantic conflicts, such as overriding assignment interferences, on JavaScript files after a Git merge.

Available analysis:
- Overriding Assignments (OA) detection for modified files from merge scenarios

### Getting started

Clone the project with the recursive flag (this project uses [Jalangi2](https://github.com/Samsung/jalangi2) as framework and needs its specified version as a submodule):
```
git clone --recursive https://github.com/amandascm/SCAz.js
```
Install dependencies:
```
nvm install && nvm use && npm i
```
### Test suite

For running the available analyses test cases, do:
```
npm run test:analyses
```

### Run on multiple projects's merge scenarios

For running SCAz.js on a set of merge scenarios from GitHub, the command below will do so to the list defined at [project_cases.csv](data/input/project_cases.csv), which is currently filled out with open source scenarios used to evaluate this tool during research:

- Required columns: `project`; `merge commit`; `ancestor commit`; `left parent commit`; `right parent commit`; `file path`; `repo url`.

```
npm run projects
```

The [output.csv](data/output/output.csv) will be a copy of the same input CSV file but with extra columns representing the results of the analysis (it is also filled out with the results for the provided input). 

See `execution event batch` column (JSON) to know what happened in each executed sample.

### Environment & Requirements

- Until now, SCAz.js has only been tested on Linux systems (Ubuntu). 
- As it uses [Jalangi2](https://github.com/Samsung/jalangi2) as a framework, the available analyses are only guaranteed to work on JS code following up to ECMAScript 5.1 specification