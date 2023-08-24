/**
 * 
 * @param n the array.length param
 * @returns the sorted alhabetically array: for each i \in [n-1] for each a_i \in \mathbf{A}, 
 * where \mathbf{A} is the array to perform the operation, a_i <= a_{i+1} 
 */
export function createSortedArray(n: number): number[] {
    return Array.from({ length: n }, (_, i) => i + 1);
}

/**
 * 
 * @param n 
 * @returns the sorted in the inverse alhabetically array: for each i \in [n-1] for each a_i \in \mathbf{A}, 
 * where \mathbf{A} is the array to perform the operation, a_i >= a_{i+1} 
 */
export function createSortedBackwardArray(n: number): number[] {
    return Array.from({ length: n }, (_, i) => n - i);
}

/**
 * 
 * @param n 
 * @returns the sorted alhabetically array in with the random pattern
 */
export function createRandomArray(n: number): number[] {
    return Array.from({ length: n }, () => Math.floor(Math.random() * n));
}
