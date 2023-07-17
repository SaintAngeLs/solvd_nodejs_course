export function measureExecutionTime(func) 
{
    const start = performance.now();
    const result = func();
    const end = performance.now();
    const executionTime = end - start;
    return { result, executionTime };
  }

export function calculateErrorPercentage(actual, expected) 
{
  const actualBigInt = BigInt(actual);
  const expectedBigInt = BigInt(expected);
  // BigInt as Integer Narrowing with the double precission
  const absoluteError = BigInt.asIntN(64, actualBigInt - expectedBigInt);


  // instead of 0.00...00 using the literal in the BigInt
  if (expectedBigInt === 0n) {
    if (actualBigInt === 0n) {
      // Both are == to 0, return 0 as error p.
      return "0.000";
    } else {
      // expectedBigInt is 0
      return "Error: Division by zero";
    }
  }

  const errorPercentage = (absoluteError / expectedBigInt) * 100n;

  return Number(errorPercentage).toFixed(3);
}
  