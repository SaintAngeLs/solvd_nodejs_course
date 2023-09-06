export type Callback<T, E = Error> = (error: E | null, result?: T) => void;

export function promisify<T>(callbackFunction: 
                    (...args: any[]) => void):
                    (...args: any[]) => Promise<T> {

  return (...args: any[]) => {
    return new Promise<T>((resolve, reject) => {

        callbackFunction(...args, (error: any, result: T) => {
            if (error) 
            {
                reject(error);
                return;
            }
        resolve(result);
        });
    });
  };
}
