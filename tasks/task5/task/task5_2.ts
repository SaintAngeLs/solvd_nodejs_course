/**
 * Task 2: Array Chunking


1. Create a function called `chunkArray` that takes an array and a chunk size as arguments. The `chunkArray` function should divide the array into smaller arrays, each containing elements of the specified chunk size. The function should return an array of arrays.


2. Optimize the `chunkArray` function to minimize memory usage while chunking the array.

 */

/**
 * should divide the array into smaller arrays, each containing elements of the specified chunk size
 * @param arr the array
 * @param size the chunk size 
 * @returns arrau [] of []
 */
export function chunkArray<T>(arr: T[], size: number): T[][] 
{
    const chunks: T[][] = [];

    for (let i = 0; i < arr.length; i += size) 
    {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}