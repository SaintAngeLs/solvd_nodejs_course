import { TestCase, TestResult } from './TestInterface';
import dataTransfomrationModule from '../task/task2';


/**
 * Function to run test cases for a specific function.
 * @param functionName - The name of the function being tested.
 * @param testCases - The array of test cases for the function.
 * @returns An array of test results.
 */
export function runTestCases(functionName: string, testCases: TestCase[]): TestResult[] {
  const testResults: TestResult[] = testCases.map((testCase: TestCase) => {
    const { testName, input, expectedOutput } = testCase;
    let testPassed: boolean = false;
    let receivedOutput: any = null;

    try 
    {

        switch (functionName) 
        {
            case 'addValues':
                receivedOutput = dataTransfomrationModule.addValues(input[0], input[1]);
                break;
            case 'stringifyValue':
                receivedOutput = dataTransfomrationModule.stringifyValue(input);
                break;
            case 'invertBoolean':
                receivedOutput = dataTransfomrationModule.invertBoolean(input);
                break;
            case 'convertToNumber':
                receivedOutput = dataTransfomrationModule.convertToNumber(input);
                break;
            case 'coerceToType':
                receivedOutput = dataTransfomrationModule.coerceToType(input.value, input.type);
                break;
            case 'binaryToNumber':
                receivedOutput = dataTransfomrationModule.binaryToNumber(input);
                break;
            case 'stringToCamelCase':
                receivedOutput = dataTransfomrationModule.stringToCamelCase(input);
                break;
            case 'sumArray':
                receivedOutput = dataTransfomrationModule.sumArray(input);
                break;
            default:
                throw new Error(`Invalid function name: ${functionName}`);
        }

      
        if (expectedOutput instanceof Error) 
        {
            testPassed = receivedOutput instanceof Error && receivedOutput.message === expectedOutput.message;
        } 
        else 
        {
            testPassed = receivedOutput === expectedOutput;
        }
    }
    catch (error: any) 
    {
      receivedOutput = error;
      testPassed = error.message === expectedOutput.message;
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

