import { foo, calculate } from "./file"
import theoretically from 'jest-theories'

test('calculating the score returns a result', () => {
    expect(() => calculate([1,2,3,4,5])).not.toThrow()
})

test('calculating the score returns a result', () => {
    const result = calculate([1, 2, 3, 4, 5])
    expect(typeof result).toBe('number')
})


describe('calculate should throw error when input size is not 5', () => {
    const theoriesInput = [
        { testName: 'empty', input: []},
        { testName: 'one object',  input: [1]},
        { testName: 'two objects',  input: [1,2]},
        { testName: 'three objects',  input: [1,2,3]},
        { testName: 'four objects',  input: [1,2,3,4]},
        { testName: 'size objects',  input: [1,2,3,4,5,6]},
    ]

    theoretically('{testName} test', theoriesInput, (theory) => {
        expect(() => calculate(theory.input)).toThrow()
    })
})

test('calculate should throw error when an input is not 1-6', () => {
    expect(() => calculate([7, -1, 0, 84537, 345698])).toThrow()
    expect(() => calculate([1, -1, 0, 84537, 345698])).toThrow()
    expect(() => calculate([1, 1, 0, 84537, 345698])).toThrow()
    expect(() => calculate([1, 1, 1, 84537, 345698])).toThrow()
    expect(() => calculate([1, 1, 1, 1, 345698])).toThrow()
})


describe('calculate should return the expected score', () => {
    const theoriesInput = [
        // { testName: 'no Match',  input: [2, 3, 4, 6, 2], expectedResult: 0 },
        // { testName: 'triple 3 and a single 5', input: [3, 4, 5, 3, 3], expectedResult: 350 },
        // { testName: 'triple 1, a single 1 and  single 5', input: [1, 1, 1, 5, 1] , expectedResult: 1150 },
           { testName: 'All 1s',  input: [1, 1, 1, 1, 1], expectedResult: 1200 },
    ]

    theoretically('{testName} test', theoriesInput, (theory) => {
        expect(calculate(theory.input)).toBe(theory.expectedResult)
    })
})


