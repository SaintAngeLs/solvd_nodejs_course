import dataTransfomrationModule from '../../task/task2';

describe('addValues', () => {
    test('should add two numbers correctly', () => {
        expect(dataTransfomrationModule.addValues(5, 3)).toBe(8);
    });

    test('should concatenate two strings correctly', () => {
        expect(dataTransfomrationModule.addValues('Hello', ' World')).toBe('Hello World');
    });

    test('should throw an error for invalid types', () => {
        expect(() => dataTransfomrationModule.addValues(true, 42)).toThrow('Addition is not possible the types provided :(');
    });
});

describe('stringifyValue', () => {
    test('should stringify numbers correctly', () => {
        expect(dataTransfomrationModule.stringifyValue(42)).toBe('42');
    });

    test('should stringify objects correctly', () => {
    const obj = { name: 'Michail', age: 25 };
        expect(dataTransfomrationModule.stringifyValue(obj)).toBe(JSON.stringify(obj));
    });

    test('should stringify arrays correctly', () => {
    const arr = [1, 2, 3];
        expect(dataTransfomrationModule.stringifyValue(arr)).toBe(JSON.stringify(arr));
    });

    test('should stringify other types correctly', () => {
        expect(dataTransfomrationModule.stringifyValue(true)).toBe('true');
    });
});

describe('invertBoolean', () => {
    test('should invert true to false', () => {
        expect(dataTransfomrationModule.invertBoolean(true)).toBe(false);
    });

    test('should invert false to true', () => {
        expect(dataTransfomrationModule.invertBoolean(false)).toBe(true);
    });

    test('should throw an error for invalid types', () => {
        expect(() => dataTransfomrationModule.invertBoolean('invalid' as any)).toThrow('Inversion not possible fot the type provided :(');
    });
});

describe('convertToNumber', () => {
    test('should convert string to number correctly', () => {
        expect(dataTransfomrationModule.convertToNumber('3.14')).toBeCloseTo(3.14);
    });

    test('should convert boolean to number correctly', () => {
        expect(dataTransfomrationModule.convertToNumber(true)).toBe(1);
        expect(dataTransfomrationModule.convertToNumber(false)).toBe(0);
    });

    test('should convert object to number correctly', () => {
    const obj = { name: 'John', age: 25 };
        expect(dataTransfomrationModule.convertToNumber(obj)).toBe(2);
    });

    test('should throw an error for invalid types', () => {
        expect(() => dataTransfomrationModule.convertToNumber([1, 2, 3])).toThrow('Conversion to number not possible for the type provided :(');
    });
});

describe('coerceToType', () => {
    test('should coerce value to string correctly', () => {
        expect(dataTransfomrationModule.coerceToType(42, 'string')).toBe('42');
    });

    test('should coerce value to boolean correctly', () => {
        expect(dataTransfomrationModule.coerceToType('false', 'boolean')).toBe(false);
    });

    test('should coerce value to number correctly', () => {
        expect(dataTransfomrationModule.coerceToType('3.14', 'number')).toBeCloseTo(3.14);
    });

    test('should throw an error for invalid types', () => {
        expect(() => dataTransfomrationModule.coerceToType([1, 2, 3], 'invalid' as any )).toThrow(
        'Invalid type specified for coercion :('
        );
    });
});

describe('binaryToNumber', () => {
    test('should convert valid binary string to decimal number', () => {
        expect(dataTransfomrationModule.binaryToNumber('0')).toBe(0);
        expect(dataTransfomrationModule.binaryToNumber('1')).toBe(1);
        expect(dataTransfomrationModule.binaryToNumber('1010')).toBe(10);
        expect(dataTransfomrationModule.binaryToNumber('110110')).toBe(54);
    });
  
    test('should throw an error for invalid binary string', () => {
        expect(() => dataTransfomrationModule.binaryToNumber('10102')).toThrow('The string is not the binary number :(');
        expect(() => dataTransfomrationModule.binaryToNumber('hello')).toThrow('The string is not the binary number :(');
    });
  });
  
  describe('stringToCamelCase', () => {
    test('should convert string with spaces to camelCase', () => {
        expect(dataTransfomrationModule.stringToCamelCase('hello world')).toBe('helloWorld');
        expect(dataTransfomrationModule.stringToCamelCase('hello_js_world')).toBe('helloJsWorld');
    });
  
    test('should convert string with underscores to camelCase', () => {
        expect(dataTransfomrationModule.stringToCamelCase('hello_world')).toBe('helloWorld');
        expect(dataTransfomrationModule.stringToCamelCase('hello_js_world')).toBe('helloJsWorld');
    });
  });
  
  describe('sumArray', () => {
    test('should calculate sum of numbers in array of numbers', () => {
        expect(dataTransfomrationModule.sumArray([1, 2, 3])).toBe(6);
        expect(dataTransfomrationModule.sumArray([10, -5, 7.5])).toBe(12.5);
    });
  
    test('should calculate sum of numbers in array of strings containing numbers', () => {
        expect(dataTransfomrationModule.sumArray(['1', '2', '3'])).toBe(6);
        expect(dataTransfomrationModule.sumArray(['10', '-5', '7.5'])).toBe(12.5);
    });
  
    test('should throw an error for invalid elements in the array', () => {
        expect(() => dataTransfomrationModule.sumArray([1, 2, 'abc'])).toThrow('Invalid number in the array.');
        expect(() => dataTransfomrationModule.sumArray([10, 'hello', 7.5])).toThrow('Invalid number in the array.');
    });
  });