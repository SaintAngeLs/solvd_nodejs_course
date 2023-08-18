
import { deepCloneObject } from '../../task/task5_add';

describe('deepCloneObject', () => {
    it('should deeply clone simple objects', () => {
        const obj = { name: 'John', age: 30 };

        const clonedObj = deepCloneObject(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj).not.toBe(obj);
    });

    it('should deeply clone nested objects', () => {

        const obj = { 
            name: 'Pawel Keller', 
            age: 30, 
            address: { 
                city: 'New York',
                country: 'USA'
            } 
        };

        const clonedObj = deepCloneObject(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj.address).not.toBe(obj.address);
    });

    it('should handle circular references', () => {
        const obj: any = { name: 'John', age: 30 };
        
        obj.self = obj;

        const clonedObj = deepCloneObject(obj);

        expect(clonedObj).toEqual(obj);
        expect(clonedObj.self).toBe(clonedObj);
    });

    it('should clone arrays', () => {
        const arr = [1, 2, 3, [4, 5]];
        const clonedArr = deepCloneObject(arr);
        expect(clonedArr).toEqual(arr);
        expect(clonedArr[3]).not.toBe(arr[3]);
    });

    it('should clone Date objects', () => {
        const date = new Date();

        const clonedDate = deepCloneObject(date);

        expect(clonedDate).toEqual(date);
        expect(clonedDate).not.toBe(date);
    });

    it('should clone RegExp objects', () => {
        const regexVal = /abc/gi;

        const clonedRegexVal = deepCloneObject(regexVal);

        expect(clonedRegexVal).toEqual(regexVal);
        expect(clonedRegexVal).not.toBe(regexVal);
    });

    it('should return null for null', () => {
        const clonedNull = deepCloneObject(null);
        expect(clonedNull).toBeNull();
    });

    it('should return undefined for undefined', () => {
        const clonedUndefined = deepCloneObject(undefined);
        expect(clonedUndefined).toBeUndefined();
    });
});
