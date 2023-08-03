/**
 * Task 3: Array Shuffling


1. Create a function called `customShuffle` that takes an array as an argument and returns a new array with its elements randomly shuffled.


2. Implement the `customShuffle` function using an efficient shuffling algorithm to achieve uniform randomness.

 */

/**
 * 
 * @param array 
 * @returns a new array with its elements randomly shuffled
 */
export function customShuffle<T>(array: T[]): T[] 
{
    for (let i = array.length - 1; i > 0; i--) 
    {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
