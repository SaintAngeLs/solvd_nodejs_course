import {
    promisify,
    promiseAllSettled,
    promiseAll,
    chainPromises,
} from '../../task/task9';

describe('promiseAll', () => {
    it('should resolve with an array of resolved values', async () => {
        const result = await promiseAll([Promise.resolve(1), Promise.resolve(2)]);
        expect(result).toEqual([1, 2]);
    });
  
    it('should reject if one of the promises rejects', async () => {
        await expect(promiseAll([Promise.resolve(1), Promise.reject('error')])).rejects.toBe('error');
    });
});
  
describe('promiseAllSettled', () => {
    it('should resolve with an array of results', async () => {
        const result = await promiseAllSettled([Promise.resolve(1), Promise.reject('error')]);
        expect(result).toEqual([
            { status: 'fulfilled', value: 1 },
            { status: 'rejected', reason: 'error' },
        ]);
    });
});

describe('chainPromises', () => {
    it('should resolve with the last resolved value', async () => {
        const result = await chainPromises([
            () => Promise.resolve(1),
            () => Promise.resolve(2),
            () => Promise.resolve(3),
        ]);
        expect(result).toBe(3);
    });
  
    it('should reject if one of the promises rejects', async () => {
        await expect(
            chainPromises([
            () => Promise.resolve(1),
            () => Promise.reject(new Error('Rejected')),
            ])
        ).rejects.toThrow('Rejected');
    });
});


describe('chainPromises', () => {
    it('should resolve with the last resolved value', async () => {
        const result = await chainPromises([
            () => Promise.resolve(1),
            () => Promise.resolve(2),
            () => Promise.resolve(3),
        ]);
        expect(result).toBe(3);
    });
  
    it('should reject if one of the promises rejects', async () => {
        await expect(
            chainPromises([
            () => Promise.resolve(1),
            () => Promise.reject(new Error('Rejected')),
            ])
        ).rejects.toThrow('Rejected');
    });
});
  

import { Callback } from '../../task/promisify';

describe('promisify', () => {
    it('should resolve with the callback value', async () => {
        const callbackFunction = (arg: string, callback: Callback<string>) => {
            callback(null, `Hello, ${arg}`);
        };
        const promiseFunction = promisify(callbackFunction);
        const result = await promiseFunction('World');
        expect(result).toBe('Hello, World');
    });
  
    it('should reject if the callback errors', async () => {
        const callbackFunction = (arg: string, callback: Callback<string>) => {
            callback(new Error('Something went wrong'));
        };
        const promiseFunction = promisify(callbackFunction);
        await expect(promiseFunction('World')).rejects.toThrow('Something went wrong');
    });
});