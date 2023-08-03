/**
 * Task 4: Array Intersection and Union


1. Create a function called `getArrayIntersection` that takes two arrays as arguments and returns a new array containing the common elements between the two arrays.


2. Create a function called `getArrayUnion` that takes two arrays as arguments and returns a new array containing all unique elements from both arrays, without any duplicates.


 */

/**
 * 
 * @param array1 
 * @param array2 
 * @returns returns \mathbb{array_1} \intersection \mathbb{array_2}
 */
export function getArrayIntersection<T>(array1: T[], array2: T[]): T[] 
{
    return array1.filter(value => array2.includes(value));
}

/**
 * 
 * @param array1 
 * @param array2 
 * @returns returns \mathbb{array_1} \union \mathbb{array_2}
 */
export function getArrayUnion<T>(array1: T[], array2: T[]): T[] 
{
    return Array.from(new Set([...array1, ...array2]));
}