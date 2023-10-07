import { myJSONParse } from '../../task/task13';


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

const stingArg = '{"id":"647ceaf3657eade56f8224eb","index":10,"negativeIndex":-10,"anEmptyArray":[],"notEmptyArray":[1,2,3,"string",true,null],"boolean":true,"nullValue":null,"nestedObject":{"nestedString":"Hello World","nestedNumber":42,"nestedArray":[true,false]},"complexArray":[{"name":"Alice Alice","age":28,"hobbies":["Reading","Painting"]},{"name":"Bob Bob","age":32,"hobbies":["Gaming","Cooking"]}]}';


describe('Object Parsing Tests', () => {
    const serializedObject = `[${JSON.stringify(expectedObject).slice(1, -1)}]`;

    

    it('should correctly parse the expectedObject', () => {
        const parsedResult = myJSONParse(stingArg);
        expect(parsedResult).toEqual(expectedObject);
    });

    it('should correctly parse the expectedObject', () => {
        const parsedResult = myJSONParse(stingArg);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult).toEqual(expectedObject);
    });


    // Individual checks to make the tests more granular
    it('should correctly parse the id', () => {
        const parsedResult = myJSONParse(stingArg);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult.id).toEqual(expectedObject.id);
    });

    it('should correctly parse the negativeIndex', () => {
        const parsedResult = myJSONParse(stingArg);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult.index).toEqual(expectedObject.index);
    });


    it('should correctly parse the negativeIndex', () => {
        const parsedResult = myJSONParse(stingArg);
        expect(parsedResult.negativeIndex).toEqual(expectedObject.negativeIndex);
    });

    
    it('should correctly parse the anEmptyArray', () => {
        const parsedResult = myJSONParse(stingArg);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult.anEmptyArray).toEqual(expectedObject.anEmptyArray);
    });

    it('should correctly parse the notEmptyArray', () => {
        const parsedResult = myJSONParse(stingArg);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult.notEmptyArray).toEqual(expectedObject.notEmptyArray);
    });

    it('should correctly parse the boolean value', () => {
        const parsedResult = myJSONParse(stingArg);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult.boolean).toEqual(expectedObject.boolean);
    });

    it('should correctly parse the nullValue', () => {
        const parsedResult = myJSONParse(stingArg);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult.nullValue).toBeNull();
    });

    it('should correctly parse the nestedObject', () => {
        const parsedResult = myJSONParse(stingArg);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult.nestedObject).toEqual(expectedObject.nestedObject);
    });

    it('should correctly parse the complexArray', () => {
        const parsedResult = myJSONParse(stingArg);
        if (!parsedResult) {
            fail('Parsed result is null');
        }
        expect(parsedResult.complexArray).toEqual(expectedObject.complexArray);
    });
});
