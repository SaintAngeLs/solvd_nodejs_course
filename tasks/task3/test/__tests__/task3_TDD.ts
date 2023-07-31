// task3.test.ts
import { 
    calculateDiscountedPrice,
    calculateTotalPrice,
    getFullName,
    filterUniqueWords,
    getAverageGrade,
    createCounter,
    repeatFunction,
    calculateFactorial,
    power,
    lazyMap,
    fibonacciGenerator
} from '../../task/task3';

import { 
    calculateDiscountedPriceTestCases,
    calculateTotalPriceTestCases,
    getFullNameTestCases,
    filterUniqueWordsTestCases,
    getAverageGradeTestCases,
    createCounterTestCases,
    repeatFunctionTestCases,
    calculateFactorialTestCases,
    powerTestCases,
    lazyMapTestCases,
    fibonacciGeneratorTestCases
} from '../testCases';


describe("Task 3 tests", () => {
    test("calculateDiscountedPrice", () => {
        const products = [
            { name: "product1", price: 100 },
            { name: "product2", price: 200 }
        ];
        const expected = [
            { name: "product1", price: 50 },
            { name: "product2", price: 100 }
        ];
        expect(calculateDiscountedPrice(products, 50)).toEqual(expected);
    });

    test("calculateTotalPrice", () => {
        const products = [
            { name: "product1", price: 100 },
            { name: "product2", price: 200 }
        ];
        expect(calculateTotalPrice(products)).toBe(300);
    });

    test("getFullName", () => {
        const person = { firstName: "Janusz", lastName: "Kowalski" };
        expect(getFullName(person)).toBe("Janusz Kowalski");
    });

    test("filterUniqueWords", () => {
        const text = "apple banana apple cherry banana";
        expect(filterUniqueWords(text)).toEqual(["apple", "banana", "cherry"]);
    });

    test("getAverageGrade", () => {
        const students = [
            { name: "John", grades: [90, 100] },
            { name: "Jane", grades: [80, 90] }
        ];
        expect(getAverageGrade(students)).toBe(90);
    });

    test("createCounter", () => {
        const counter = createCounter();
        expect(counter()).toBe(1);
        expect(counter()).toBe(2);
    });

    test("repeatFunction", () => {
        const mockFunction = jest.fn();
        const repeatedFunction = repeatFunction(mockFunction, 3);
        repeatedFunction();
        expect(mockFunction).toHaveBeenCalledTimes(3);
    });

    test("calculateFactorial", () => {
        expect(calculateFactorial(5)).toBe("120");
    });

    test("power", () => {
        expect(power(2, 3)).toBe("8");
    });

    test("lazyMap", () => {
        const array = [1, 2, 3];
        const double = (x: number) => x * 2;
        const lazyMapped = lazyMap(array, double, null);
        const result = [];
        let item = lazyMapped.next();
        while (!item.done) 
        {
            result.push(item.value);
            item = lazyMapped.next();
        }
        expect(result).toEqual([2, 4, 6]);
    });

    test("fibonacciGenerator", () => {
        const fib = fibonacciGenerator();
        const result = [];
        for (let i = 0; i < 4; i++) 
        {
            const item = fib.next();
            if (!item.done) 
            {
                result.push(item.value);
            }
        }
        expect(result).toEqual(["0", "1", "1", "2"]);
    });
});

describe("Task 3 tests - USER TESTS", () => {
    calculateDiscountedPriceTestCases.forEach(({testName, input, expectedOutput}) => {
        test(testName, () => {
            expect(calculateDiscountedPrice(input[0], input[1])).toEqual(expectedOutput);
        });
    });

    calculateTotalPriceTestCases.forEach(({testName, input, expectedOutput}) => {
        test(testName, () => {
            expect(calculateTotalPrice(input)).toEqual(expectedOutput);
        });
    });

    getFullNameTestCases.forEach(({testName, input, expectedOutput}) => {
        test(testName, () => {
            expect(getFullName(input)).toEqual(expectedOutput);
        });
    });

    filterUniqueWordsTestCases.forEach(({testName, input, expectedOutput}) => {
        test(testName, () => {
            expect(filterUniqueWords(input)).toEqual(expectedOutput);
        });
    });

    getAverageGradeTestCases.forEach(({testName, input, expectedOutput}) => {
        test(testName, () => {
            expect(getAverageGrade(input)).toEqual(expectedOutput);
        });
    });

    createCounterTestCases.forEach(({testName, input, expectedOutput}) => {
        test(testName, () => {
            const counter = createCounter();
            const result = Array(input).fill(0).map((_, index) => counter());
            expect(result).toEqual(expectedOutput);
        });
    });

    repeatFunctionTestCases.forEach(({testName, input, expectedOutput}) => {
        test(testName, () => {
            const [mockFunction, times] = input;
            const repeatedFunction = repeatFunction(mockFunction, times);
            const result = repeatedFunction();
            expect(result).toEqual(expectedOutput);
        });
    });

    calculateFactorialTestCases.forEach(({testName, input, expectedOutput}) => {
        test(testName, () => {
            expect(calculateFactorial(input)).toEqual(expectedOutput);
        });
    });

    powerTestCases.forEach(({testName, input, expectedOutput}) => {
        test(testName, () => {
            expect(power(input[0], input[1])).toEqual(expectedOutput);
        });
    });

    lazyMapTestCases.forEach(({testName, input, expectedOutput}) => {
        test(testName, () => {
            const [array, func] = input;
            const lazyMapped = lazyMap(array, func, null);
            const result = [];
            let item = lazyMapped.next();
            while (!item.done) {
                result.push(item.value);
                item = lazyMapped.next();
            }
            expect(result).toEqual(expectedOutput);
        });
    });

    fibonacciGeneratorTestCases.forEach(({testName, input, expectedOutput}) => {
        test(testName, () => {
            const fib = fibonacciGenerator();
            const result = [];
            for (let i = 0; i < input[0]; i++) {
                const item = fib.next();
                if (!item.done) {
                    result.push(item.value);
                }
            }
            expect(result).toEqual(expectedOutput);
        });
    });
});
