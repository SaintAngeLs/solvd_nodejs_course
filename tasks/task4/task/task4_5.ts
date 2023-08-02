/**
 * Task 5: Object Observation


Implement a function called observeObject that takes an object and a callback function as arguments. The function should return a proxy object that wraps the original object and invokes the callback function whenever any property of the object is accessed or modified.


Use the observeObject function to create a proxy for the person object from Task 1. The callback function should log the property name and the action (get or set) performed on the object.

 */

/**
 * 
 */
export type Callback = (prop: PropertyKey, action: string, value?: any) => void;

/**
 * 
 * @param obj 
 * @param callback 
 * @returns 
 */
export function observeObject<T extends object>(obj: T, callback: Callback): T {

    return new Proxy(obj, 
        {
            get(target: T, prop: PropertyKey): any 
            {
                // check if the property exists
                if (prop in target) 
                { 
                    callback(prop, 'get');
                }
                return Reflect.get(target, prop);
            },

            set(target: T, prop: PropertyKey, value: any): boolean 
            {
                callback(prop, 'set', value);
                return Reflect.set(target, prop, value);
            }

    });
}