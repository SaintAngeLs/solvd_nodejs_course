/**
 * Task 4: Advanced Property Descriptors


Implement a function called createImmutableObject that takes an object as an argument and returns a new object with all its properties made read-only and non-writable using property descriptors. The function should handle nested objects and arrays recursively.


Use the createImmutableObject function to create an immutable version of the person object from Task 1.

 */

export type AnyObject = Record<string, unknown>;

/**
 * 
 * @param obj 
 * @returns 
 */
export function createImmutableObject<T>(obj: T): T {
    let newObj = { ...obj } as T;

    for (let key in obj) {
        if (Array.isArray(newObj[key])) 
        {
            newObj[key] = createImmutableArray(newObj[key] as any[]) as any;
        } 
        else if (typeof newObj[key] === 'object' && newObj[key] !== null) 
        {
            newObj[key] = createImmutableObject(newObj[key]);
        }

        Object.defineProperty(newObj, key, { writable: false });
    }
  
    return newObj;
}


/**
 * 
 * @param arr 
 * @returns 
 */
function createImmutableArray(arr: any[]): readonly any[] 
{
    let newArr = [...arr];

    newArr.forEach((item, index) => {
        if (typeof item === 'object' && item !== null) 
        {
            newArr[index] = Array.isArray(item) ? createImmutableArray(item as any[]) : createImmutableObject(item as AnyObject);
        }
    });
    return Object.freeze(newArr);
}


