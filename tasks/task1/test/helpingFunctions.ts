export function measureExecutionTime(func: () => any) 
{
    const start = performance.now();
    const result = func();
    const end = performance.now();
    const executionTime = end - start;
    return { result, executionTime };
  }

export function calculateErrorPercentage(actual: string, expected: string) 
{
  const actualBigInt = BigInt(actual);
  const expectedBigInt = BigInt(expected);
  // BigInt as Integer Narrowing with the double precission
  const absoluteError = BigInt.asIntN(64, actualBigInt - expectedBigInt);


  // instead of 0.00...00 using the literal in the BigInt
  if (expectedBigInt.toString() === "0") 
  {
    if (actualBigInt.toString() === "0") 
    {
      // Both are == to 0, return 0 as error p.
      return "0.000";
    } 
    else 
    {
      // expectedBigInt is 0
      return "Error: Division by zero";
    }
  }

  const errorPercentage = (absoluteError / expectedBigInt) * BigInt(100);

  return Number(errorPercentage).toFixed(3);
}
  