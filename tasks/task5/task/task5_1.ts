/**
 * Task 1: Advanced Array Filtering


1. Create a function called `customFilterUnique` that takes an array and a callback function as arguments. The `customFilterUnique` function should filter the array using the callback function to determine uniqueness. The resulting array should contain only unique elements based on the callback's logic.

 -- IN THE TEST:
2. Use the `customFilterUnique` function to filter an array of objects based on a specific property and return only unique objects.


 */

export function customFilterUnique<T>(arr: T[], callback: (arr: T[], val: T) => boolean): T[]
{
    const result: T[] = [];
    for (const element of arr) 
    {
        if (callback(result, element)) 
        {
            result.push(element);
        }
    }
    return result;
}