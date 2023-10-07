import { myJSONParse } from '../task/task13';
import { 
    stringArg1, 
    stringArg2, 
    stringArg3, 
    stringArg4, 
    stringArg5, 
    stringArg6, 
    stringArg7, 
    stringArg8, 
    stringArg9, 
    stringArg10,
    stringArg11,
    stringArg12,
    stringArg13,
    stringArg14,
    stringArg15,
    stringArg16,
    stringArg17,
    stringArg18,
    stringArg19,
    stringArg20,
} from './test_data';

interface TestResult {
    testNumber: number;
    testName: string;
    success: boolean;
    error: string | null;
    output: object | null;
}


const stringArgs = [
    stringArg1, stringArg2, stringArg3, stringArg4, stringArg5,
    stringArg6, stringArg7, stringArg8, stringArg9, stringArg10,
    stringArg11, stringArg12, stringArg13, stringArg14, stringArg15,
    stringArg16, stringArg17, stringArg18, stringArg19, stringArg20
];
const expectedObjects = stringArgs.map(str => JSON.parse(str));

// generic version of the previous one
export function measureTime<T, R>(fn: (arg: T) => R, arg: T): number {
    const start = performance.now();
    fn(arg); 
    const end = performance.now();
    return end - start;
}

interface TestResult {
    testNumber: number;
    testName: string;
    success: boolean;
    error: string | null;
    output: object | null;
    executionTime: number;
}

function compareObjects(a: object, b: object): boolean {
    return JSON.stringify(a) === JSON.stringify(b);
}

function testParse(stringArg: string, expectedObject: object, index: number): TestResult {
    const timeTaken = measureTime(myJSONParse, stringArg);
    const parsedResult = myJSONParse(stringArg);

    const isSuccess = compareObjects(parsedResult, expectedObject);
    
    return {
        testNumber: index + 1,
        testName: `Test szefa ${index + 1}`,
        success: isSuccess,
        error: isSuccess ? null : "Objects don't match",
        output: isSuccess ? null : parsedResult,
        executionTime: timeTaken
    };
}

export function task13_szef_test_runner(): TestResult[] {
    const results: TestResult[] = [];

    stringArgs.forEach((stringArg, index) => {
        results.push(testParse(stringArg, expectedObjects[index], index));
    });

    return results;
}

