type PromiseResult<T> = {
    status: "fulfilled";
    value: T;
} 
| 
{
    status: "rejected";
    reason: any;
};
  

export function promiseAllSettled<T>(promises: Promise<T>[]): Promise<PromiseResult<T>[]> {
    return new Promise((resolve) => {

        const results: PromiseResult<T>[] = [];

        let completed = 0;
  
        if (promises.length === 0) 
        {
            resolve(results);
            
            return;
        }
  
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
            .then((value) => {
                results[index] = { status: 'fulfilled', value };

                completed++;

                if (completed === promises.length) 
                {
                    resolve(results);
                }
             })
            .catch((reason) => {
                results[index] = { status: 'rejected', reason };

                completed++;
                
                if (completed === promises.length) 
                {
                    resolve(results);
                }
          });
      });
    });
}