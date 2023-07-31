/**
 * Create a function called `createCounter` that returns a closure. The closure should be a counter function that increments the count on each call and returns the updated count. Each closure should have its own independent count.
 * @returns 
 */
export function createCounter(): () => number 
{
    let count = 0;
    return () => ++count;
}
/**
 * Implement a higher-order function called `repeatFunction` that takes a function and a number as arguments. The function should return a new function that invokes the original function multiple times based on the provided number. If the number is negative, the new function should invoke the original function indefinitely until stopped.
 * @param func - a function
 * @param number a number
 * @returns a new function that invokes the original function multiple times based on the provided number. If the number is negative, the new function should invoke the original function indefinitely until stopped
 */
export function repeatFunction(func: Function, number: number): Function 
{
    return () => {
        let results = [];
        for(let i = 0; i < number || number < 0; i++) 
        {
            results.push(func());
        }
        return results;
    };
}