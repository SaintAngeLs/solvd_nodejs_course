
import { add, subtract, multiply, divide } from '../task/task1_newVersion';
import { testCases } from './testCases';
import { generateRandomTests } from './randomTests';
import { calculateErrorPercentage, measureExecutionTime } from './helpingFunctions';



export function runTests() {

    const combinedTestCases = [...testCases, ...generateRandomTests()];
    
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

    const additionError = calculateErrorPercentage(additionResult, BigInt(expectedAddition));
    const subtractionError = calculateErrorPercentage(subtractionResult, BigInt(expectedSubtraction));
    const multiplicationError = calculateErrorPercentage(multiplicationResult, BigInt(expectedMultiplication));
    const divisionError = divisionResult === BigInt(0) || expectedDivision === BigInt(0)
        ? 0
        : calculateErrorPercentage(divisionResult, expectedDivision);

    return {
        input,
        addition: additionResult,
        expectedAddition,
        additionError,
        additionExecutionTime: additionTest.executionTime,
        subtraction: subtractionResult,
        expectedSubtraction,
        subtractionError,
        subtractionExecutionTime: subtractionTest.executionTime,
        multiplication: multiplicationResult,
        expectedMultiplication,
        multiplicationError,
        multiplicationExecutionTime: multiplicationTest.executionTime,
        division: divisionResult,
        expectedDivision,
        divisionError,
        divisionExecutionTime: divisionTest.executionTime,
    };
  });

  return testResults;
}
