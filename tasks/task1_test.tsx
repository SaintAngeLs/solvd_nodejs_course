import { add, subtract, multiply, divide } from './task1';

function subtractBigIntegersTesting(num1: string, num2: string): string {
    // Convert the input strings to BigInt
    const bigNum1 = BigInt(num1);
    const bigNum2 = BigInt(num2);
  
    // Perform the subtraction operation
    const result = bigNum1 - bigNum2;
  
    // Convert the result back to string and return
    return result.toString();
  }

  function calculateErrorPercentage(actual, expected) {
    const absoluteError = Math.abs(actual - expected);
    const errorPercentage = (absoluteError / expected) * 100;
    return errorPercentage.toFixed(2);
  }

export function runTests() {

    function measureExecutionTime(func) {
        const start = performance.now();
        const result = func();
        const end = performance.now();
        const executionTime = end - start;
        return { result, executionTime };
      }
    
    // 5 random tests
    const generateRandomTests = () => {
        const randomTests = [];
        for(let i = 0; i < 5; i++) {
          const num1 = BigInt(Math.floor(Math.random() * 1e30)).toString();
          const num2 = BigInt(Math.floor(Math.random() * 1e30)).toString();
          randomTests.push({
            input: `${num1} ${num2}`,
            expectedAddition: (BigInt(num1) + BigInt(num2)).toString(),
            expectedSubtraction: (BigInt(num1) - BigInt(num2)).toString(),
            expectedMultiplication: (BigInt(num1) * BigInt(num2)).toString(),
            expectedDivision: (BigInt(num1) / BigInt(num2)).toString(),
          });
        }
        return randomTests;
      }

  let testCases = [

    {
        input: '1234 5678',
        expectedAddition: '6912',
        expectedSubtraction: '-4444',
        expectedMultiplication: '7006652',
        expectedDivision: '0.21739130434782608',
    },
    {
    input: '9999 1',
    expectedAddition: '10000',
    expectedSubtraction: '9998',
    expectedMultiplication: '9999',
    expectedDivision: '9999',
    },
    {
      input: '123456789012345678901234567890 987654321098765432109876543210',
      expectedAddition: '1111111111111111111111111111100',
      expectedSubtraction: '-864197532086419753208641975320',
      expectedMultiplication: '121932631137021795226185032733622923332237463801111263526900',
      expectedDivision: '0',
    },
    {
      input: '999999999999999999999999999999 1',
      expectedAddition: '1000000000000000000000000000000',
      expectedSubtraction: '999999999999999999999999999998',
      expectedMultiplication: '999999999999999999999999999999',
      expectedDivision: '999999999999999999999999999999',
    },
    {
      input: '987654321098765432109876543210 123456789012345678901234567890',
      expectedAddition: '1111111111111111111111111111100',
      expectedSubtraction: '864197532086419753208641975320',
      expectedMultiplication: '121932631137021795226185032733622923332237463801111263526900',
      expectedDivision: '8.0000000729',
    },
  ];

  testCases = testCases.concat(generateRandomTests());

  const testResults = testCases.map((testCase) => {
    const { input, expectedAddition, expectedSubtraction, expectedMultiplication, expectedDivision } = testCase;

   

    const additionTest = measureExecutionTime(() => add(input));
    const subtractionTest = measureExecutionTime(() => subtract(input));
    const multiplicationTest = measureExecutionTime(() => multiply(input));
    const divisionTest = measureExecutionTime(() => divide(input));

    const additionResult = additionTest.result;
    const subtractionResult = subtractionTest.result;
    const multiplicationResult = multiplicationTest.result;
    const divisionResult = divisionTest.result;

    const additionError = calculateErrorPercentage(Number(additionResult), Number(expectedAddition));
    const subtractionError = calculateErrorPercentage(Number(subtractionResult), Number(expectedSubtraction));
    const multiplicationError = calculateErrorPercentage(Number(multiplicationResult), Number(expectedMultiplication));
    const divisionError = Number.isNaN(Number(divisionResult)) || Number(expectedDivision) === 0
      ? 0
      : calculateErrorPercentage(Number(divisionResult), Number(expectedDivision));

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
