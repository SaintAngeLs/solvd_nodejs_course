import { Person, Product, Student } from "../task/task3_classes";
import { TestCase } from "./TestInterface";


export const calculateDiscountedPriceTestCases: TestCase[] = [
    {
        testName: 'Calculate discounted price for a product array',
        input: [[new Product('test1', 200), new Product('test2', 300)], 10],
        expectedOutput: [new Product('test1', 180), new Product('test2', 270)],
    },
];

export const calculateTotalPriceTestCases: TestCase[] = [
    {
        testName: 'Calculate total price of products',
        input: [new Product('test1', 200), new Product('test2', 300)],
        expectedOutput: 500,
    },
];

export const getFullNameTestCases: TestCase[] = [
    {
        testName: 'Get full name of a person',
        input: new Person('Janush', 'Rafalko'),
        expectedOutput: 'Janush Rafalko',
    },
];

export const filterUniqueWordsTestCases: TestCase[] = [
    {
        testName: 'Filter unique words from a string',
        input: 'This is a test. This is only a test.',
        expectedOutput: ['This', 'a', 'is', 'only', 'test.'].sort(),
    },
];

export const getAverageGradeTestCases: TestCase[] = [
    {
        testName: 'Get average grade of students',
        input: [new Student('Roberto', [2, 3, 4]), new Student('Michail', [3, 4, 5])],
        expectedOutput: 3.5,
    },
];

export const createCounterTestCases: TestCase[] = [
    {
        testName: 'Create a counter and increment',
        input: 5,
        expectedOutput: [1, 2, 3, 4, 5],
    },
];

export const repeatFunctionTestCases: TestCase[] = [
    {
        testName: 'Repeat a function',
        input: [() => 'test', 5],
        expectedOutput: ['test', 'test', 'test', 'test', 'test'],
    },
];

export const calculateFactorialTestCases: TestCase[] = [
    {
        testName: 'Calculate factorial',
        input: [5],
        expectedOutput: 120,
    },
];

export const powerTestCases: TestCase[] = [
    {
        testName: 'Calculate power',
        input: [2, 3],
        expectedOutput: 8,
    },
];

export const lazyMapTestCases: TestCase[] = [
    {
        testName: 'Map values lazily',
        input: [[1, 2, 3], (value: number) => value * 2],
        expectedOutput: [2, 4, 6],
    },
];

export const fibonacciGeneratorTestCases: TestCase[] = [
    {
        testName: 'Generate fibonacci sequence',
        input: [5],
        expectedOutput: [0, 1, 1, 2, 3],
    },
];
