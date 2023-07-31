import { TestCase, TestResult } from "./TestInterface";
import { measureExecutionTime } from '@/tasks/task1/test/helpingFunctions';
import { 
    calculateDiscountedPriceTestCases, 
    calculateTotalPriceTestCases,
    getFullNameTestCases,
    filterUniqueWordsTestCases,
    getAverageGradeTestCases,
    createCounterTestCases,
    repeatFunctionTestCases,
    calculateFactorialTestCases,
    powerTestCases,
    lazyMapTestCases,
    fibonacciGeneratorTestCases,

} from './testCases';
import { runTestCases } from "./testRun";


export function runTestsTask3(): TestResult[]  {
  const testCasesMap = new Map<string, TestCase[]>();
  testCasesMap.set('calculateDiscountedPrice', calculateDiscountedPriceTestCases);
  testCasesMap.set('calculateTotalPrice', calculateTotalPriceTestCases);
  testCasesMap.set('getFullName', getFullNameTestCases);
  testCasesMap.set('filterUniqueWords', filterUniqueWordsTestCases);
  testCasesMap.set('getAverageGrade', getAverageGradeTestCases);
  
  testCasesMap.set('createCounter', createCounterTestCases);
  testCasesMap.set('repeatFunction', repeatFunctionTestCases);
  testCasesMap.set('calculateFactorial', calculateFactorialTestCases);
  testCasesMap.set('power', powerTestCases);
  testCasesMap.set('lazyMap', lazyMapTestCases);
  testCasesMap.set('fibonacciGenerator', fibonacciGeneratorTestCases);

  

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
