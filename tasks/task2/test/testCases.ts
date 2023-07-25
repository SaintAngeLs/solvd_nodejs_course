import { TestCase } from "./TestInterface";



export const addValuesTestCases: TestCase[] = [
    {
        testName: 'Addition of two numbers',
        input: [5, 10],
        expectedOutput: 15,
    },
    {
        testName: 'Concatenation of two strings',
        input: ['hello', 'world'],
        expectedOutput: 'helloworld',
    },
    {
        testName: "Addition in case of boolean and string",
        input: [true, 'world'],
        expectedOutput: new Error("Addition is not possible the types provided :("),
    },
];

export const stringifyValueTestCases: TestCase[] = [
    {
        testName: 'Stringify a number',
        input: 42,
        expectedOutput: '42',
    },
    {
        testName: 'Stringify a boolean',
        input: true,
        expectedOutput: 'true',
    },
    {
        testName: 'Stringify an object',
        input: { key: 'value' },
        expectedOutput: '{"key":"value"}',
    },
];

export const invertBooleanTestCases : TestCase[]= [
    {
        testName: 'Invert true',
        input: true,
        expectedOutput: false,
    },
    {
        testName: 'Invert false',
        input: false,
        expectedOutput: true,
    },
    {
        testName: "Invering the string true",
        input: 'true',
        expectedOutput: new Error("Inversion not possible fot the type provided :("),
    },
];

export const convertToNumberTestCases: TestCase[] = [
    {
        testName: 'Convert string number to a number',
        input: '42',
        expectedOutput: 42,
    },
    {
        testName: 'Convert boolean true to number',
        input: true,
        expectedOutput: 1,
    },
    {
        testName: 'Convert boolean false to number',
        input: false,
        expectedOutput: 0,
    },
    {
        testName: 'Convert object to number',
        input: { key: 'value' },
        expectedOutput: new Error("Conversion to number not possible for the type provided :("),
    },
];

export const coerceToTypeTestCases: TestCase[] = [
    {
        testName: 'Coerce to string',
        input: { value: 42, type: 'string' },
        expectedOutput: '42',
    },
    {
        testName: 'Coerce to boolean true',
        input: { value: 'true', type: 'boolean' },
        expectedOutput: true,
    },
    {
        testName: 'Coerce to boolean false',
        input: { value: 'false', type: 'boolean' },
        expectedOutput: false,
    },
    {
        testName: 'Coerce to invalid type should throw an error',
        input: { value: 42, type: 'invalidType' },
        expectedOutput: new Error("Invalid type specified for coercion :("),
    },
];

export const binaryToNumberTestCases: TestCase[] = [
    {
        testName: 'Symfonia szefa 1 - Convert binary string to a number',
        input: '101010',
        expectedOutput: 42,
    },
    {
        testName: 'Symfonia szefa 2 - Invalid binary string should throw an error',
        input: '102010',
        expectedOutput: new Error("The string is not the binary number :("),
    },
];

export const stringToCamelCaseTestCases: TestCase[] = [
    {
        testName: 'Symfonia szefa 3 - Convert string with spaces to camelCase',
        input: 'hello world',
        expectedOutput: 'helloWorld',
    },
    {
        testName: 'Symfonia szefa 4 - Convert string with underscores to camelCase',
        input: 'hello_world',
        expectedOutput: 'helloWorld',
    },
];

export const sumArrayTestCases: TestCase[] = [
    {
        testName: 'Symfonia szefa 5 - Calculate sum of numbers in an array',
        input: [1, 2, 3, 4, 5],
        expectedOutput: 15,
    },
    {
        testName: 'Symfonia szefa 6 - Calculate sum of strings containing numbers in an array',
        input: ['10', '20', '30'],
        expectedOutput: 60,
    },
    {
        testName: 'Symfonia szefa 7 - Invalid number in the array should throw an error',
        input: [1, 'abc', 2],
        expectedOutput: new Error("Invalid number in the array."),
    },
];

