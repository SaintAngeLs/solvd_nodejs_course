/**
 * Your task is to implement a throttle function that takes a function and a time interval as arguments. The throttle function should ensure that the provided function is executed at most once within the specified time interval.
 */

type ThrottleFunction = (...args: any[]) => void;

export default function throttle(func: ThrottleFunction, interval: number): ThrottleFunction {
    let lastExecuted: number = 0;

    return function executedFunction(...args: any[]): void {
        const now = Date.now();

        if (now - lastExecuted >= interval) {
            lastExecuted = now;
            func(...args);
        }
    };
};

// Test suggested in the task section:
//
// function onScroll(event: Event): void {
//     console.log("Scroll event:", event);
// }

// const throttledScrollHandler = throttle(onScroll, 1000);

// window.addEventListener("scroll", throttledScrollHandler);