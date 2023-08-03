import {customFilterUnique} from '../../task/task5';

describe('Array utilities - customFilterUnique', () => {
  
    // empty input
    it('should return an empty array when input is empty', () => {
        const input: any = [];
        const output = customFilterUnique(input, (arr: {id: number}[], val: {id: number}) => !arr.some(a => a.id === val.id));
        expect(output).toEqual([]);
      });

    // filter unique
    it('customFilterUnique', () => {
      const input = [{id: 1}, {id: 2}, {id: 1}, {id: 3}, {id: 2}];
      const output = customFilterUnique(input, (arr, val) => !arr.some(a => a.id === val.id));
      expect(output).toEqual([{id: 1}, {id: 2}, {id: 3}]);
    });
    
    // no duplicates
    it('should return the array without duplicates', () => {
        const input = [{id: 1}, {id: 2}, {id: 1}, {id: 3}, {id: 2}];
        const output = customFilterUnique(input, (arr: {id: number}[], val: {id: number}) => !arr.some((a: {id: number}) => a.id === val.id));
        expect(output).toEqual([{id: 1}, {id: 2}, {id: 3}]);
    });
    
});

import {chunkArray} from '../../task/task5';
describe('Array utilities - chunkArray', () => {
    // the cunk is 3
    it('chunkArray', () => {
      const input = [1, 2, 3, 4, 5, 6, 7];
      const output = chunkArray(input, 3);
      expect(output).toEqual([[1, 2, 3], [4, 5, 6], [7]]);
    });

     // size > than array length
     it('should return the same array in a subarray when size is larger than array length', () => {
        const input = [1, 2, 3, 4, 5, 6, 7];
        const output = chunkArray(input, 10);
        expect(output).toEqual([input]);
      });
  
    // size equal == array length
    it('should return the same array in a subarray when size equals array length', () => {
        const input = [1, 2, 3, 4, 5, 6, 7];
        const output = chunkArray(input, 7);
        expect(output).toEqual([input]);
      });
  
    // size == 1
    it('should return an array of subarrays with one element each when size is 1', () => {
        const input = [1, 2, 3];
        const output = chunkArray(input, 1);
        expect(output).toEqual([[1], [2], [3]]);
      });
});

import {customShuffle} from '../../task/task5';
describe('Array utilities - customShuffle', () => {

     // [] array
     it('should return an empty array when input is empty', () => {
        const input: any = [];
        const output = customShuffle(input);
        expect(output).toEqual([]);
      });

    // some test of data consistency
    it('customShuffle', () => {
      const input = [1, 2, 3, 4, 5];
      const output = customShuffle(input);
      expect(output).toHaveLength(5);
      expect(output).toContain(1);
      expect(output).toContain(2);
      expect(output).toContain(3);
      expect(output).toContain(4);
      expect(output).toContain(5);
    });

    // one element
    it('should return the same array when it has only one element', () => {
        const input = [1];
        const output = customShuffle(input);
        expect(output).toEqual([1]);
      });
   
});

import {getArrayIntersection} from '../../task/task5';
describe('Array utilities - getArrayIntersection', () => {

     

    // {3,4,5}
    it('getArrayIntersection', () => {
      const array1 = [1, 2, 3, 4, 5];
      const array2 = [3, 4, 5, 6, 7];
      const output = getArrayIntersection(array1, array2);
      expect(output).toEqual([3, 4, 5]);
    });

    // 0 is in common
    it('should return an empty array when there are no common elements', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const output = getArrayIntersection(array1, array2);
        expect(output).toEqual([]);
    });
  
    // the whole array is in common
    it('should return the same array when both arrays are identical', () => {
        const array1 = [1, 2, 3];
        const array2 = [1, 2, 3];
        const output = getArrayIntersection(array1, array2);
        expect(output).toEqual(array1);
    });
    
    
});

import {getArrayUnion} from '../../task/task5';
describe('Array utilities - getArrayUnion', () => {

    // some test for the union
    it('getArrayUnion', () => {
      const array1 = [1, 2, 3, 4, 5];
      const array2 = [3, 4, 5, 6, 7];
      const output = getArrayUnion(array1, array2);
      expect(output).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });

    // no common elements
    it('should return an array with all elements from both arrays when there are no common elements', () => {
        const array1 = [1, 2, 3];
        const array2 = [4, 5, 6];
        const output = getArrayUnion(array1, array2);
        expect(output).toEqual([1, 2, 3, 4, 5, 6]);
      });
  
    // array_1 == array_2
    it('should return the same array when both arrays are identical', () => {
        const array1 = [1, 2, 3];
        const array2 = [1, 2, 3];
        const output = getArrayUnion(array1, array2);
        expect(output).toEqual(array1);
      });
});

import {measureArrayPerformance} from '../../task/task5';
describe('Array utilities - getArrayUnion', () => {

    // testing uptput
    it('measureArrayPerformance', () => {
      const array = Array.from({length: 100000}, () => Math.floor(Math.random() * 100000));
      const time = measureArrayPerformance(customShuffle, array);
      expect(typeof time).toBe('number');
    });

    // [] array
    it('should return 0 when the array is empty', () => {
        const array: any= [];
        const time = measureArrayPerformance(customShuffle, array);
        expect(time).toBeGreaterThanOrEqual(0);
      });
});
  