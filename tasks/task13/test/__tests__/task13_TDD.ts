import { space } from '../../task/parsers/space';

import { array } from '../../task/parsers/array';
import { boolean } from '../../task/parsers/boolean';
import { object } from '../../task/parsers/object';
import { myJSONParse } from '../../task/task13';



describe('Parsers Tests', () => {

    // array tests
    it('should parse a simple array of numbers', () => {
        const result = array('[1,2,3]');
        expect(result).toEqual([[1,2,3], '']);
    });

    it('should throw an error if an array doesn\'t close correctly', () => {
        expect(() => array('[1,2,3')).toThrow('Expected closing bracket');
    });

    // boolean tests
    it('should parse a "true" boolean', () => {
        const result = boolean('true');
        expect(result).toEqual([true, '']);
    });

    it('should parse a "false" boolean', () => {
        const result = boolean('false');
        expect(result).toEqual([false, '']);
    });

    it('should return null for non-boolean strings', () => {
        const result = boolean('notABoolean');
        expect(result).toBeNull();
    });

    // object tests
    it('should parse a simple object with string key-values', () => {
        const execute = () => {
            object('{"key": "value"}');
        };
    // according to the custom checker inmplemented in the exceptionHandling/error.ts
        expect(execute).toThrow(SyntaxError);
    });

    it('should return null for a non-object string', () => {
        const result = object('"key": "value"');
        expect(result).toBeNull();
    });

    // space tests
    it('should remove spaces and return the non-space part of the string', () => {
        const result = space('    someText');
        expect(result).toEqual(['    ', 'someText']);
    });

    it('should remove newline characters and return the non-newline part of the string', () => {
        const result = space('\n\nsomeText');
        expect(result).toEqual(['\n\n', 'someText']);
    });

    it('should return null if the string doesn\'t start with a space or newline', () => {
        const result = myJSONParse('someText');
        expect(result).toBeNull();
    });
});


const expectedObject = 
{
    id: "647ceaf3657eade56f8224eb",
    index: 10,
    negativeIndex: -10,
    anEmptyArray: [],
    notEmptyArray: [1, 2, 3, "string", true, null],
    boolean: true,
    nullValue: null,
    nestedObject: {
        nestedString: "Hello World",
        nestedNumber: 42,
        nestedArray: [true, false]
    },
    complexArray: [
        {
            name: "Alice Alice",
            age: 28,
            hobbies: ["Reading", "Painting"]
        },
        {
            name: "Bob Bob",
            age: 32,
            hobbies: ["Gaming", "Cooking"]
        }
    ]
};

const stingArg = '"id":"647ceaf3657eade56f8224eb","index":10,"negativeIndex":-10,"anEmptyArray":[],"notEmptyArray":[1,2,3,"string",true,null],"boolean":true,"nullValue":null,"nestedObject":{"nestedString":"Hello World","nestedNumber":42,"nestedArray":[true,false]},"complexArray":[{"name":"Alice Alice","age":28,"hobbies":["Reading","Painting"]},{"name":"Bob Bob","age":32,"hobbies":["Gaming","Cooking"]}]';


describe('Object Parsing Tests', () => {
    const serializedObject = `[${JSON.stringify(expectedObject).slice(1, -1)}]`;

    

    it('should correctly parse the expectedObject', () => {
        // // Iterate over each property of expectedObject to validate format in serialized string
        // for (let key of Object.keys(expectedObject)) {
        //     if (!serializedObject.includes(`"${key}":`)) {
        //         fail(`Serialized object does not contain properly formatted "${key}" property.`);
        //     }
        // }

        // const parsedResult = myJSONParse(stingArg);
        // if (!parsedResult) {
        //     fail('Parsed result is null');
        // }
        
        // expect(parsedResult).toEqual(expectedObject);
        const parsedResult = myJSONParse(stingArg);
        
        // You don't need the null check. If parsedResult is null, the next expect will fail.
        expect(parsedResult).toEqual(expectedObject);
    });

    it('should correctly parse the expectedObject', () => {
        const parsedResult = object(serializedObject);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult).toEqual(expectedObject);
    });


    // Individual checks to make the tests more granular
    it('should correctly parse the id', () => {
        const parsedResult = object(serializedObject);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult[0].id).toEqual(expectedObject.id);
    });

    it('should correctly parse the index', () => {
        const parsedResult = object(serializedObject);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult[0].index).toEqual(expectedObject.index);
    });

    it('should correctly parse the negativeIndex', () => {
        const parsedResult = object(serializedObject);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult[0].id).toEqual(expectedObject.negativeIndex);
    });

    it('should correctly parse the anEmptyArray', () => {
        const parsedResult = object(serializedObject);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult[0].id).toEqual(expectedObject.anEmptyArray);
    });

    it('should correctly parse the notEmptyArray', () => {
        const parsedResult = object(serializedObject);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult[0].id).toEqual(expectedObject.notEmptyArray);
    });

    it('should correctly parse the boolean value', () => {
        const parsedResult = object(serializedObject);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult[0].id).toEqual(expectedObject.boolean);
    });

    it('should correctly parse the nullValue', () => {
        const parsedResult = object(serializedObject);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult[0].nullValue).toBeNull();
    });

    it('should correctly parse the nestedObject', () => {
        const parsedResult = object(serializedObject);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult[0].nestedObject).toEqual(expectedObject.nestedObject);
    });

    it('should correctly parse the complexArray', () => {
        const parsedResult = object(serializedObject);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult[0].complexArray).toEqual(expectedObject.complexArray);
    });
});
