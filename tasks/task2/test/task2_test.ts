import { TestCase, TestResult } from "./TestInterface";
import { measureExecutionTime } from '@/tasks/task1/test/helpingFunctions';
import { 
  addValuesTestCases, 
  binaryToNumberTestCases, 
  coerceToTypeTestCases, 
  convertToNumberTestCases, 
  invertBooleanTestCases, 
  stringToCamelCaseTestCases, 
  stringifyValueTestCases, 
  sumArrayTestCases 
} from './testCases';
import { runTestCases } from "./testRun";


export function runTestsTask2(): TestResult[]  {
  const testCasesMap = new Map<string, TestCase[]>();
  testCasesMap.set('addValues', addValuesTestCases);
  testCasesMap.set('stringifyValue', stringifyValueTestCases);
  testCasesMap.set('invertBoolean', invertBooleanTestCases);
  testCasesMap.set('convertToNumber', convertToNumberTestCases);
  testCasesMap.set('coerceToType', coerceToTypeTestCases);
  testCasesMap.set('binaryToNumber', binaryToNumberTestCases);
  testCasesMap.set('stringToCamelCase', stringToCamelCaseTestCases);
  testCasesMap.set('sumArray', sumArrayTestCases);

  const allTestResults: TestResult[] = [];

  testCasesMap.forEach((testCases, functionName) => {
    const testResults = runTestCases(functionName, testCases);

    const executionTimeResult = measureExecutionTime(() => runTestCases(functionName, testCases));

    const testResultsWithExecutionTime: TestResult[] = testResults.map((testResult) => ({
      ...testResult,
      executionTime: executionTimeResult.executionTime,
    }));

    allTestResults.push(...testResultsWithExecutionTime);
  });

  return allTestResults;
}

