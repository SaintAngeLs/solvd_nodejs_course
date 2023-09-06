

export function promiseAll<T>(promises: Promise<T>[]): Promise<T[]> {

    return new Promise((resolve, reject) => {


        let results : T[] = [];
        let completed = 0;
      
        if (promises.length === 0) 
        {
            return resolve(results);
        }
  
      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then( (result) => {
            results[index] = result;
            completed++;
            if (completed === promises.length) {
                resolve(results);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    });
}
  