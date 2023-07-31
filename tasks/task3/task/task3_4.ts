
/**
 * Implement a recursive function called `calculateFactorial` that calculates the factorial of a given number. Optimize the function to use tail call optimization to avoid stack overflow for large input numbers.
 * @param n - the number the ! is calculating
 * @param acc - tail call optimisation val
 * @returns the factorial of a given number
 */             
export function calculateFactorial(n: number, acc: number = 1): number 
{
    if (n <= 1) 
    {
        return acc;
    } 
    else 
    {
        return calculateFactorial(n - 1, n * acc);
    }
}

/**
 * Create a recursive function called `power` that takes a base and an exponent as arguments. The function should calculate the power of the base to the exponent using recursion.
 * @param base - the base before the exp
 * @param exponent - the exp of the base
 * @returns the power of the base to the exp
 */
export function power(base: number, exponent: number): number 
{
    if (exponent === 0) 
    {
        return 1;
    } 
    else 
    {
        return base * power(base, exponent - 1);
    }
}