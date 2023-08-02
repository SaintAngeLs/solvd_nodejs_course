/**
 * 
Task 6: Object Deep Cloning


Implement a function called deepCloneObject that takes an object as an argument and returns a deep copy of the object. The function should handle circular references and complex nested structures. Do not use JSON methods.

 */

/**
 * 
 * @param obj 
 * @param hash 
 * @returns 
 */
export function deepCloneObject<T>(obj: T, hash = new WeakMap()): T {
    if (obj instanceof Date) 
        return new Date(obj.valueOf()) as any;
    if (obj instanceof RegExp) 
        return new RegExp(obj) as any;
    if (typeof obj !== 'object' || obj === null) return obj;
  
    if (hash.has(obj)) return hash.get(obj);
  
    const clone = Array.isArray(obj) 
                ? [] 
                : Object.create(Object.getPrototypeOf(obj));
  
    hash.set(obj, clone);
  
    for (let key in obj) 
    {
        if (obj.hasOwnProperty(key)) 
        {
            clone[key] = deepCloneObject(obj[key], hash);
        }
    }
  
    return clone;
}
  