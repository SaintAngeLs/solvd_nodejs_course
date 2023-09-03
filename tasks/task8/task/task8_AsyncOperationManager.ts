
/**
 *  Class called AsyncOperationManager. This class should has methods for asynchronous operations with varying delay times.
 */
export class AsyncOperationManager {
   /**
    * Simulate an asynchronous operation with a given delay time in milliseconds.
    * After the delay, a microtask is also scheduled to execute.
    * @param delay - Time in milliseconds to delay the asynchronous operation.
    * @returns A Promise that resolves to a string message indicating that the asynchronous operation and the subsequent microtask have been executed.
    */
    simulateAsyncOperation(delay: number) : Promise<string>{
        return new Promise((resolve) => {
             // Timer setting wuth the callback: setTimeout implies schedules a callback to be executed after a certain delay
            setTimeout(() => {
                // Defining Microtask: Scheduled to execute immediately after the current operation completes
                process.nextTick(() => {
                    resolve(`Async operation completed after ${delay}ms and microtask executed.`);
                });
                
            }, delay);
        });
    }

    /**
     * Schedule an immediate task to execute.
     *
     * @returns A Promise that resolves to a string message indicating that the immediate task has been executed.
     */
    scheduleImmediate(): Promise<string> {
        return new Promise((resolve) => {
            // Checking the state of executing: setImmediate schedules a callback to be executed in this phase
            setImmediate(() => {
                resolve('Immediate task executed.');
            });
        });
    }
}

/**
 * Bonus: 
 * ==========================
 *
 * 1. Timer Phase: 
 *    - In the simulateAsyncOperation method, setTimeout schedules a callback to be executed after a specifically defined delay. 
 *    - This callback than gets queued in the Timer phase of the event loop of NodeJS.
 *
 * 2. Microtasks:
 *    - After the setTimeout() callback, simulateAsyncOperation schedules a microtask using process.nextTick().
 *    - Microtasks are executed right after the current operation completes and before processing any other operations in the event loop.
 *    - Even if multiple microtasks are scheduled, they will run one by one before the next phase of the event loop begins.
 *
 * 3. Check Phase:
 *    - The scheduleImmediate method uses setImmediate to schedule a callback.
 *    - This callback is placed in the Check phase of the event loop, which runs after the Poll phase.
 *    - Unlike setTimeout, setImmediate guarantees that the callback is executed right after the Poll phase, making it useful for IO-bound operations.
 *
 * This class offers a way to observe these different components of the Node.js event loop in action.
 */
