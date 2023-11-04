const { Runner } = require('../runner')

const ANALYSIS = 'override_assignment'

const runner = new Runner()

describe('Override Assignment Analysis Test Cases', () => {
    test.each([
        { testCase: 'example', conflict: true },
        { testCase: 'addition_to_array', conflict: true },
        { testCase: 'array_constant_diff_index', conflict: false },
        { testCase: 'array_constant_same_index', conflict: true },
        { testCase: 'array_class_field', conflict: false },
        { testCase: 'array_class_field_conflict', conflict: true },
        { testCase: 'base', conflict: false },
        { testCase: 'base_conflict', conflict: true },
        { testCase: 'both_marking', conflict: true },
        { testCase: 'call_graph', conflict: true },
        { testCase: 'chained_methods_call', conflict: true },
    ])('$testCase, conflict: $conflict', ({ testCase, conflict }) => {
        const logSpy = jest.spyOn(console, 'log')
        runner.runAnalyses(ANALYSIS, testCase)
        const expected = conflict
            ? expect.stringContaining('Output')
            : expect.stringContaining('No output')
        expect(logSpy).toHaveBeenLastCalledWith(expected)
    })
})
