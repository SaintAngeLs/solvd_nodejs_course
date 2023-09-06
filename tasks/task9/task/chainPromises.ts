
export async function chainPromises<T>(functions: Array<() => Promise<T>>): Promise<T> {
    let lastResolvedValue: T ;
  
    if (functions.length === 0) 
    {
        return Promise.reject(new Error("No functions provided"));
    }

    try 
    {
        for (const func of functions) 
        {
            lastResolvedValue = await func();
        }

        // lastResolvedValue will always be assigned before it's returned
        return Promise.resolve(lastResolvedValue!);
    } 
    catch (error) 
    {
        return Promise.reject(error);
    }
}
  