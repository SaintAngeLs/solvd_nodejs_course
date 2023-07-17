
import { add, subtract, multiply, divide } from '../task/task1_newVersion';
import { testCases } from './testCases';
import { generateRandomTests } from './randomTests';
import { calculateErrorPercentage, measureExecutionTime } from './helpingFunctions';
import { TestCase } from './TestInterface';




export function runTests(): any[] {

    const combinedTestCases: TestCase[] = [...testCases, ...generateRandomTests()];

    const testResults = combinedTestCases.map((testCase) => {
    const { input, 
            expectedAddition, 
            expectedSubtraction, 
            expectedMultiplication, 
            expectedDivision } = testCase;

    const inputString = input.split(" ").join(' ');

    const additionTest = measureExecutionTime(() => add(inputString));
    const subtractionTest = measureExecutionTime(() => subtract(inputString));
    const multiplicationTest = measureExecutionTime(() => multiply(inputString));
    const divisionTest = measureExecutionTime(() => divide(inputString));

    const additionResult = additionTest.result;
    const subtractionResult = subtractionTest.result;
    const multiplicationResult = multiplicationTest.result;
    const divisionResult = divisionTest.result;

    const additionError = calculateErrorPercentage(additionResult, expectedAddition);
    const subtractionError = calculateErrorPercentage(subtractionResult, expectedSubtraction);
    const multiplicationError = calculateErrorPercentage(multiplicationResult, expectedMultiplication);
    const divisionError = divisionResult === BigInt(0) || expectedDivision === '0'
        ? 0
        : calculateErrorPercentage(divisionResult, expectedDivision);

    return {
        input,
        addition: additionResult.toString(),
            expectedAddition: expectedAddition.toString(),
            additionError,
            additionExecutionTime: additionTest.executionTime,
            subtraction: subtractionResult.toString(),
            expectedSubtraction: expectedSubtraction.toString(),
            subtractionError,
            subtractionExecutionTime: subtractionTest.executionTime,
            multiplication: multiplicationResult.toString(),
            expectedMultiplication: expectedMultiplication.toString(),
            multiplicationError,
            multiplicationExecutionTime: multiplicationTest.executionTime,
            division: divisionResult.toString(),
            expectedDivision: expectedDivision.toString(),
            divisionError,
            divisionExecutionTime: divisionTest.executionTime,
    };
  });

  return testResults;
}
