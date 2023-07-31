import { add, multiply } from "../../task1/task/task1_newVersion";

/**
 * Interf for the iterable object returning in both methods
 */
interface IteratorResult<T> {
    done: boolean;
    value: T | null;
}

/**
 * Implement a lazy evaluation function called `lazyMap` that takes an array and a mapping function. The function should return a lazy generator that applies the mapping function to each element of the array one at a time.
 * @param array 
 * @param mapFunc 
 * @note lazy generator that applies the mapping function to each element of the array one at a time
 */
export function lazyMap<T, U>(array: T[], mapFunc: (value: T) => U, doneValue: null): { next: () => IteratorResult<U> } 
{
    let index = 0;

    return {
        next: () => {
            if (index < array.length) {
                return { done: false, value: mapFunc(array[index++]) };
            } else {
                return { done: true, value: doneValue };
            }
        }
    };
}


/**
 * @note Create a lazy generator function called `fibonacciGenerator` that generates Fibonacci numbers one at a time using lazy evaluation.
 */
export function fibonacciGenerator(): { next: () => IteratorResult<string> } 
{
    let a = "0", b = "1";
    return {
        next: () => {
            const result = { done: false, value: a };
            [a, b] = [b, add(a + " " + b)];
            return result;
        }
    };
}
