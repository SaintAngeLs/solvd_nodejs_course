/**
 * 
Task 5: Array Performance Analysis


1. Implement a function called `measureArrayPerformance` that takes a function and an array as arguments. The `measureArrayPerformance` function should execute the provided function with the given array as input and measure the execution time.


2. Use the `measureArrayPerformance` function to compare the performance of built-in array methods (`map`, `filter`, `reduce`, etc.) against your custom array manipulation functions.
 */

/**
 * 
 * @param func 
 * @param arr 
 * @returns the @param func execution time
 */
export function measureArrayPerformance<T>(func: (arr: T[]) => void, arr: T[]): number 
{
    const start = performance.now();
    func(arr);
    const end = performance.now();
    return end - start;
}