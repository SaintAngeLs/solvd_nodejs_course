import { deepCloneObject as deepCloneIterative } from '../task/task5_add';
import { deepCloneObject as deepCloneRecursive } from '../../task4/task/task4_6';
import { measureExecutionTime } from '@/tasks/task1/test/helpingFunctions';

import {
    deeplyNestedObject,
    circularReference,
    mixedObject,
    largeArray,
    largeObject,
    combinedObject
} from './testObjects';


function deepEquals(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) return true;
    if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) return false;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) 
    {
        if (!keys2.includes(key) || !deepEquals(obj1[key], obj2[key])) return false;
    }
    return true;
}


function testDeepCloneSufficiency() {
    const testObjects = [
        { a: 1, b: { c: 3, d: { e: 5 } } },
        deeplyNestedObject,
        circularReference,
        mixedObject,
        largeArray,
        largeObject,
        combinedObject
    ];

    const results: Array<{ 
        testObj: any,
        iterativeTime: number, 
        recursiveTime: number, 
        iterativeSuccess: boolean, 
        recursiveSuccess: boolean 
    }> = [];

    for (const testObj of testObjects) {
        const iterativeCloneData = measureExecutionTime(() => deepCloneIterative(testObj));
        const recursiveCloneData = measureExecutionTime(() => deepCloneRecursive(testObj));

        const iterativeSuccess = deepEquals(testObj, iterativeCloneData.result);
        const recursiveSuccess = deepEquals(testObj, recursiveCloneData.result);

        results.push({
            testObj,
            iterativeTime: iterativeCloneData.executionTime,
            recursiveTime: recursiveCloneData.executionTime,
            iterativeSuccess,
            recursiveSuccess
        });
    }

    return results;
}


console.log(testDeepCloneSufficiency());
