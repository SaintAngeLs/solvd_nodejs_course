/**
 * Task 1: Advanced Array Filtering


1. Create a function called `customFilterUnique` that takes an array and a callback function as arguments. The `customFilterUnique` function should filter the array using the callback function to determine uniqueness. The resulting array should contain only unique elements based on the callback's logic.

 -- IN THE TEST:
2. Use the `customFilterUnique` function to filter an array of objects based on a specific property and return only unique objects.


 */

export function customFilterUnique<T, K>(arr: T[], callback: (val: T) => K): T[]
{

    // TODO: ensure that the customFilterUnique function itself maintains this uniqueness based on the callback's logic.

    const seen = new Set<K>();

    const result: T[] = [];
    for (const element of arr) 
    {
        const key = callback(element);
        if (!seen.has(key)) 
        {
            seen.add(key);
            result.push(element);
        }
    }
    
    return result;
}