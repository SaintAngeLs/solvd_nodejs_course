import { measureTime } from "../task/additionalFunc";
import { createRandomArray, createSortedBackwardArray } from "../task/createArrays";
import { bubbleSort, mergeSort, quickSort } from "../task/task7";

interface SortResult {
    arrayLength: number;
    quickSortTime: number;
    bubbleSortTime: number;
    mergeSortTime: number;
}

interface PerformanceTestResult {
    random: SortResult[];
    worstCase: SortResult[];
}


const MAX_ARRAY_LENGTH = 1002;  
const ITERATIONS_PER_LENGTH = 10;  

export function testSortingPerformanceRandom(): SortResult[] {
    const results: SortResult[] = [];
    let arrayLength = 2;

    while (arrayLength <= MAX_ARRAY_LENGTH) 
    {
        let quickSortAvgTime = 0;
        let bubbleSortAvgTime = 0;
        let mergeSortAvgTime = 0;

        for (let i = 0; i < ITERATIONS_PER_LENGTH; i++) 
        {
            const randomArr = createRandomArray(arrayLength);
            quickSortAvgTime += measureTime(quickSort, [...randomArr]);
            bubbleSortAvgTime += measureTime(bubbleSort, [...randomArr]);
            mergeSortAvgTime += measureTime(mergeSort, [...randomArr]);
        }

        quickSortAvgTime /= ITERATIONS_PER_LENGTH;
        bubbleSortAvgTime /= ITERATIONS_PER_LENGTH;
        mergeSortAvgTime /= ITERATIONS_PER_LENGTH;

        results.push({
            arrayLength,
            quickSortTime: quickSortAvgTime,
            bubbleSortTime: bubbleSortAvgTime,
            mergeSortTime: mergeSortAvgTime
        });

        arrayLength++;
    }

    return results;
}


export function testSortingPerformanceWorstCase(): SortResult[] {
    const results: SortResult[] = [];
    let arrayLength = 2;

    while (arrayLength <= MAX_ARRAY_LENGTH) 
    {
        let quickSortAvgTime = 0;
        let bubbleSortAvgTime = 0;
        let mergeSortAvgTime = 0;

        for (let i = 0; i < ITERATIONS_PER_LENGTH; i++) 
        {
            const backwardArr = createSortedBackwardArray(arrayLength);
            quickSortAvgTime += measureTime(quickSort, [...backwardArr]);
            bubbleSortAvgTime += measureTime(bubbleSort, [...backwardArr]);
            mergeSortAvgTime += measureTime(mergeSort, [...backwardArr]);
        }

        quickSortAvgTime /= ITERATIONS_PER_LENGTH;
        bubbleSortAvgTime /= ITERATIONS_PER_LENGTH;
        mergeSortAvgTime /= ITERATIONS_PER_LENGTH;

        results.push({
            arrayLength,
            quickSortTime: quickSortAvgTime,
            bubbleSortTime: bubbleSortAvgTime,
            mergeSortTime: mergeSortAvgTime
        });

        arrayLength++;
    }

    return results;
}

// merging the both previous functions:
export function performanceTest(): PerformanceTestResult {
    const randomResults = testSortingPerformanceRandom();
    const worstCaseResults = testSortingPerformanceWorstCase();

    return {
        random: randomResults,
        worstCase: worstCaseResults
    };
}