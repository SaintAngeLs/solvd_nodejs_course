// function deepCloneObject<T>(obj: T, hash = new WeakMap()): T: implementation with no recursion
// version with the recurstion is in task4_6.ts in task4 folder of all the tasks
// 
/**
 * 
 * @param obj 
 * @param hash 
 * @returns 
 */
export function deepCloneObject<T>(obj: T, hash = new WeakMap()): T {
    // the Date and RegExp object handling
    if (obj instanceof Date) return new Date(obj.valueOf()) as any;
    if (obj instanceof RegExp) return new RegExp(obj) as any;

    // the object is not an object type || is null =>  return it as is
    if (typeof obj !== 'object' || obj === null) return obj;
    if (hash.has(obj)) return hash.get(obj);

    // Queue-stack for iterative deep cloning
    const stack: Array<[source: any, target: any]> = [[obj, undefined]];

    // if the root object is an array or a general object
    const clone = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    //store the cloned version in the hashset
    hash.set(obj, clone);
    // update the target reference in the stack for the root object
    stack[0][1] = clone;

    while (stack.length) 
    {
        const [currentSrc, currentTarget] = stack.pop()!;
        
        for (let key in currentSrc) 
        {
            // key is a direct property of the source object
            if (currentSrc.hasOwnProperty(key)) 
            {
                // Date properties
                if (currentSrc[key] instanceof Date) 
                {
                    currentTarget[key] = new Date(currentSrc[key].valueOf());
                } 
                // RegExp properties
                else if (currentSrc[key] instanceof RegExp) 
                {
                    currentTarget[key] = new RegExp(currentSrc[key]);
                } 
                // null type properties and null
                else if (typeof currentSrc[key] !== 'object' || currentSrc[key] === null) 
                {
                    currentTarget[key] = currentSrc[key];
                } 
                // handle the properties that have already been cloned
                else if (hash.has(currentSrc[key])) 
                {
                    currentTarget[key] = hash.get(currentSrc[key]);
                } 
                // object and array properties
                else 
                {
                    // whether the property is an array or a general object
                    const newClone = Array.isArray(currentSrc[key]) 
                        ? []
                        : Object.create(Object.getPrototypeOf(currentSrc[key]));

                    // assign the new clone to the target object's property
                    currentTarget[key] = newClone;

                    // store  cloned version of the property in the hash
                    hash.set(currentSrc[key], newClone);

                    // the loop continuation
                    stack.push([currentSrc[key], newClone]);
                }
            }
        }
    }

    // return deep cloned object
    return clone;
}
