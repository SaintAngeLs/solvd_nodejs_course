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
    // (*) TODO: the function cusomShuffle<T>(array: T[]) is not supposed to change the array obtained from the input.

    // According to (*), the function will provide the operation on the copy ot the inpyt array;
    
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) 
    {
        const j = Math.floor(Math.random() * (i + 1));

        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}
