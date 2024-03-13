const { Runner } = require('../../runner')
const { AVAILABLE_ANALYSES_DIR } = require('../../config')
const { EventTypeEnum } = require('../../event')
const Context = require('../../context')
const AnalysisEnum = require('../AnalysisEnum')

const ANALYSIS = AnalysisEnum.OVERRIDING_ASSIGNMENT
const ANALYSIS_PATH = `${AVAILABLE_ANALYSES_DIR}/${ANALYSIS}`

const runner = new Runner()

describe('Overriding Assignment Analysis Test Cases', () => {
    test.each([
        { testCase: 'example', conflict: true },
        // { testCase: 'innerClassRecursiveNotConflictSample', conflict: true }, // ERRO
        { testCase: 'additionToArrayConflictSample', conflict: false }, // divergent => change name
        { testCase: 'arrayAliasingConflictSample', conflict: true },
        { testCase: 'arrayConstantSample', conflict: false }, // divergent
        { testCase: 'arrayDiferentIndexNotConflictSample', conflict: false },
        { testCase: 'arraySameIndexConflictSample', conflict: true },
        { testCase: 'arraysClassFieldConflictSample', conflict: true },
        { testCase: 'arraysClassFieldNotConflictSample', conflict: false },
        { testCase: 'baseConflictSample', conflict: true },
        { testCase: 'baseNotConflictSample', conflict: false },
        { testCase: 'bothMarkingConflictSample', conflict: true },
        { testCase: 'callGraphSample', conflict: true },
        // { testCase: 'chainedMethodCallsConflictSample', conflict: true }, // ERRO
        { testCase: 'changeInstanceAttributeConflictSample', conflict: true },
        { testCase: 'changeObjectPropagatinsFieldSample', conflict: false }, // divergent
        { testCase: 'changeObjectPropagatinsFieldSample2', conflict: false }, // divergent
        { testCase: 'changeObjectPropagatinsFieldSample3', conflict: false },
        { testCase: 'changeObjectPropagatinsFieldSample4', conflict: false }, // divergent
        { testCase: 'changeObjectPropagatinsFieldSample5', conflict: false }, // divergent
        { testCase: 'changeObjectPropagatinsFieldSample6', conflict: false }, // divergent
        { testCase: 'changePublicAttributesConflictSample', conflict: true },
        { testCase: 'classFieldConflictSample', conflict: true },
        { testCase: 'classFieldConflictSample2', conflict: true },
        { testCase: 'classFieldNotConflictSample', conflict: false },
        { testCase: 'classFieldNotConflictSample2', conflict: false },
        { testCase: 'classFieldWithParameterNotConflictSample', conflict: true },
        { testCase: 'concatMethodsConflictSample', conflict: true },
        { testCase: 'containmentSample', conflict: true },
        { testCase: 'containsInvokeExpConflictSample', conflict: true },
        { testCase: 'defaultConstructorConflictSample', conflict: false }, // divergent translation / syntax
        { testCase: 'differentAttributeOnIdenticalClassNotConflictSample', conflict: false },
        { testCase: 'differentClassWithSameAttributeNotConflictSample', conflict: false },
        { testCase: 'differentMethodOnIdenticalClassConflictSample', conflict: true },
        { testCase: 'fieldRefTestConflictSample', conflict: true },
        { testCase: 'hashmapConflictSample', conflict: false }, // divergent
        { testCase: 'ifBranchConflictSample', conflict: true },
        { testCase: 'ifWithInvokeConflictSample', conflict: true },
        { testCase: 'initArrayConflictSample', conflict: false }, // divergent
        { testCase: 'localArrayNotConflictSample', conflict: false },
        { testCase: 'localArrayRecursiveNotConflictSample', conflict: false },
        { testCase: 'localVariablesNotConflictSample', conflict: false },
        { testCase: 'localVariablesNotConflictSample2', conflict: false },
        { testCase: 'localVariablesWithParameterNotConflictSample', conflict: false },
        { testCase: 'objectFieldConflictSample', conflict: true },
        { testCase: 'objectFieldNotConflictSample', conflict: false },
        { testCase: 'objectThreeFieldsOneConflictSample', conflict: true },
        { testCase: 'pointsToDifferentObjectFromParametersWithMainSample', conflict: false },
        { testCase: 'pointsToDifferentObjectSample', conflict: false },
        { testCase: 'pointsToOnlyOneObjectFromParametersWithMainSample', conflict: true },
        { testCase: 'pointsToSameArrayDifferentIndexSample', conflict: false }, // divergent
        { testCase: 'pointsToSameArrayIndexSample', conflict: true },
        { testCase: 'pointsToSameArraySample', conflict: true },
        { testCase: 'pointsToSameObjectFromParametersSample', conflict: true },
        { testCase: 'pointsToSameObjectFromParametersSample2', conflict: false },
        { testCase: 'pointsToSameObjectFromParametersSample3', conflict: false },
        { testCase: 'pointsToSameObjectFromParametersSample4', conflict: true },
        { testCase: 'pointsToSameObjectFromParametersWithMainSample', conflict: true },
        { testCase: 'pointsToSameObjectSample', conflict: true },
        { testCase: 'recursiveCallConflictSample', conflict: false }, // divergent -> no assignments overriden, only function calls are made
        { testCase: 'recursiveMockupConflictSample', conflict: true },
        { testCase: 'recursiveMockupNotConflictSample', conflict: false },
        { testCase: 'sameAttributeOnIdenticalClassConflictSample', conflict: true },
        { testCase: 'sequenceConflictSample', conflict: true },
        { testCase: 'sequenceConflictSample2', conflict: true },
        { testCase: 'stacktraceConflictSample', conflict: true },
        { testCase: 'staticClassFieldConflictSample', conflict: true },
        { testCase: 'staticClassFieldNotConflictSample', conflict: false },
        { testCase: 'stringArraySample', conflict: false }, // divergent
        { testCase: 'subclassConflictSample', conflict: false },
        { testCase: 'subclassWithConditionalNotConflictSample', conflict: false },
        { testCase: 'twoSameObjectSample', conflict: false },
    ])('$testCase, conflict: $conflict', ({ testCase, conflict }) => {
        const eventBatch = runner.runAnalysis(ANALYSIS, `${ANALYSIS_PATH}/test_cases/${testCase}/index.js`, `${ANALYSIS_PATH}/test_cases/${testCase}/line_to_branch_map.json`)
        const uuid = Context.getInstance().getUUID()
        expect(eventBatch).toHaveProperty('uuid')
        expect(eventBatch.uuid).toBe(uuid)
        conflict
            ? expect(eventBatch.getEvents().some(event => event.type === EventTypeEnum.OVERRIDING_ASSIGNMENT)).toBe(true)
            : expect(eventBatch.getEvents().some(event => event.type === EventTypeEnum.OVERRIDING_ASSIGNMENT)).toBe(false)
    })
})
