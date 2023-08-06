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

    if (Array.isArray(obj)) 
    {
        return createImmutableArray(obj) as unknown as T;
    }

    for (let key in obj) {
        if (Array.isArray(newObj[key])) 
        {
            // Object.Freeze is not allowed
            // Incorrect version : newObj[key] = createImmutableArray(newObj[key] as any[]) as any;
            newObj[key] = createImmutableObject(newObj[key] as any[]) as any;
        } 
        else if (typeof newObj[key] === 'object' && newObj[key] !== null) 
        {
            newObj[key] = createImmutableObject(newObj[key]);
        }
        else 
        {
            newObj[key] = obj[key];
        }

        // TODO: define the property configurable: false for immutable objects (Object.PreventExtensions() is allowed )

        Object.defineProperty(newObj, key, { writable: false, configurable: false  });
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
    const newArr: any[] = [];

    arr.forEach((item, index) => {
        if (Array.isArray(item)) 
        {
            newArr.push(createImmutableArray(item));
        } 
        else if (typeof item === 'object' && item !== null) 
        {
            newArr.push(createImmutableObject(item));
        } 
        else 
        {
            newArr.push(item);
        }
    });

    const immutableArrayProto = Object.create(Array.prototype);

    // Overriding mutating array methods to make them non-functional

    ['push', 'pop', 'shift', 'unshift', 'splice', 'reverse', 'sort'].forEach(method => {
        immutableArrayProto[method] = function() {
            throw new Error('Attempt to modify a read-only array');
        };
    });



    Object.setPrototypeOf(newArr, immutableArrayProto);


    // length and values cannot be modified
    newArr.forEach((_, index) => {
        Object.defineProperty(newArr, index, { writable: false, configurable: false });
    });

    Object.defineProperty(newArr, 'length', { writable: false, configurable: false });

    return newArr;

}


