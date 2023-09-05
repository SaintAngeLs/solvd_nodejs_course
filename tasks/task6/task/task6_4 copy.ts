/**
 * Your task is to implement a debounce function that takes a function and a delay time as arguments. The goal of the debounce function is to ensure that the provided function is only executed after the user stops invoking it for the specified delay time.

**Instructions**

1. Implement a function called `debounce` that takes two arguments:

- `func`: The function to be debounced.
- `delay`: The delay time (in milliseconds) before the function is executed.

2. The `debounce` function should return a new function that wraps the provided function.
3. When the new function is invoked, it should:
 */

type DebounceFunction = (...args: any[]) => void;

export default function debounce(func: DebounceFunction, wait: number): DebounceFunction {
    let timeout: NodeJS.Timeout | null;

    return function executedFunction(...args: any[]): void {
        const later = () => {
            if (timeout) {
                clearTimeout(timeout);
                func(...args);
            }
        };

        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(later, wait);
    };
};

// function debouncedSearch(query: string): void {
//     console.log("Searching for:", query);
// }

// const debouncedSearchHandler = debounce(debouncedSearch, 300);

// const inputElement = document.getElementById("search-input");
// if (inputElement) {
//     inputElement.addEventListener("input", event => {
//         const target = event.target as HTMLInputElement;
//         debouncedSearchHandler(target.value);
//     });
// }