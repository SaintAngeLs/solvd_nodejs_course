import { TestCase, TestResult } from './TestInterface';

import { calculateDiscountedPrice, calculateTotalPrice, getFullName, filterUniqueWords, getAverageGrade, createCounter, repeatFunction, calculateFactorial, power, lazyMap, fibonacciGenerator } from '../task/task3';
import _ from 'lodash';
import { Product } from '../task/task3_1';
import { Person, Student } from '../task/task3_2';

function productsAreEqual(a: Product, b: Product) {
    return a.name === b.name && a.price === b.price;
}

export function runTestCases(functionName: string, testCases: TestCase[]): TestResult[] {
  const testResults: TestResult[] = testCases.map((testCase: TestCase) => {
    const { testName, input, expectedOutput } = testCase;
    let testPassed: boolean = false;
    let receivedOutput: any = null;

    try {
        switch (functionName) {
            case 'calculateDiscountedPrice':
                receivedOutput = calculateDiscountedPrice(input[0] as Product[], input[1] as number);
                break;
            case 'calculateTotalPrice':
                receivedOutput = calculateTotalPrice(input as Product[]);
                break;
            case 'getFullName':
                receivedOutput = getFullName(input as Person);
                break;
            case 'filterUniqueWords':
                receivedOutput = filterUniqueWords(input as string);
                break;
            case 'getAverageGrade':
                receivedOutput = getAverageGrade(input as Student[]);
                break;
            case 'createCounter':
                const counter = createCounter();
                receivedOutput = Array(input as number).fill(null).map(() => counter());
                break;
            case 'repeatFunction':
                const funcToRepeat = input[0] as () => void;
                const numRepeats = input[1] as number;
                const repeatedFunction = repeatFunction(funcToRepeat, numRepeats);
                receivedOutput = repeatedFunction();
                break;
            case 'calculateFactorial':
                receivedOutput = calculateFactorial(input[0] as number, input[1] as string);
                break;
            case 'power':
                receivedOutput = power(input[0] as number, input[1] as number);
                break;
            case 'lazyMap':
                const iterator = lazyMap(input[0] as any[], input[1] as ((value: any) => any), null);
                const result: any[] = [];
                while (true) {
                    const next = iterator.next();
                    if (next.done) {
                        break;
                    } else {
                        result.push(next.value);
                    }
                }
                receivedOutput = result;
                break;
                case 'fibonacciGenerator':
                    const fibGen = fibonacciGenerator();
                    const fibNumbers: string[] = [];
                    for (let i = 0; i < Number(input); i++) 
                    {
                        fibNumbers.push(fibGen.next().value as string);
                    }
                    receivedOutput = fibNumbers;
                    break;
            default:
                throw new Error(`Invalid function name: ${functionName}`);
        }

        

        if (expectedOutput instanceof Error) {
            testPassed = receivedOutput instanceof Error && receivedOutput.message === expectedOutput.message;
        } else if (functionName === 'calculateDiscountedPrice' || functionName === 'calculateTotalPrice') {
            testPassed = _.zip(receivedOutput, expectedOutput).every(([rec, exp]) => productsAreEqual(rec, exp));
        } else {
            testPassed = _.isEqual(receivedOutput, expectedOutput);
        }
    } catch (error: any) {
      receivedOutput = error;
      testPassed = error instanceof Error && error.message === expectedOutput.message;
    }

    return {
      testName,
      input,
      expectedOutput,
      receivedOutput,
      testPassed,
    };
  });

  return testResults;
}
