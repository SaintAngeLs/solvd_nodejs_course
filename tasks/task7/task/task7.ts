// QuickSort
export function quickSort(arr: number[], left = 0, right = arr.length - 1): number[] {
    if (left < right) 
    {
        const pivot = partition(arr, left, right);

        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);
    }
    return arr;
}

// fartition function to implement the quicksort (with the complexity O(n\log{2}{n}))
function partition(arr: number[], left: number, right: number): number {
    const pivot = arr[right];
    let i = left;

    for (let j = left; j < right; j++) 
    {
        if (arr[j] < pivot) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
    }
    [arr[i], arr[right]] = [arr[right], arr[i]];
    return i;
}

// BubbleSort
export function bubbleSort(arr: number[]): number[] {
    let swapped: boolean;

    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) 
        {
            if (arr[i] > arr[i + 1]) 
            {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

// MergeSort
export function mergeSort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

//additional function for the mergesort implementation
function merge(left: number[], right: number[]): number[] {
    let result = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) 
    {
        if (left[i] < right[j]) 
        {
            result.push(left[i]);
            i++;
        } 
        else 
        {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}
