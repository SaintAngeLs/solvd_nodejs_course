import { myJSONParse } from '../../task/task13';

describe('myJSONParse', () => {
    // simple
    it('should parse null value', () => {
        expect(myJSONParse('null')).toBe(null);
    });

    // booleans
    it('should parse true boolean', () => {
        expect(myJSONParse('true')).toBe(true);
    });

    it('should parse false boolean', () => {
        expect(myJSONParse('false')).toBe(false);
    });

    // simple strings
    it('should parse a simple string', () => {
        expect(myJSONParse('"hello"')).toBe("hello");
    });

    // empty array
    it('should parse an empty array', () => {
        expect(myJSONParse('[]')).toEqual([]);
    });

    // simple array
    it('should parse an array of strings', () => {
        expect(myJSONParse('["apple", "banana"]')).toEqual(["apple", "banana"]);
    });


    // empty object
    it('should parse an empty object', () => {
        expect(myJSONParse('{}')).toEqual({});
    });

    // simple object
    it('should parse an object with key-value pairs', () => {
        expect(myJSONParse('{"name": "JK", "age": "30"}')).toEqual({
            name: "JK",
            age: "30"
        });
    });

    // nested array
    it('should parse an array inside an array', () => {
        expect(myJSONParse('[["apple", "banana"], ["grape", "pear"]]')).toEqual([
            ["apple", "banana"],
            ["grape", "pear"]
        ]);
    });

    // Test 9: Parsing nested object
    it('should parse an object inside an object', () => {
        expect(myJSONParse('{"person": {"name": "JK", "age": "20"}}')).toEqual({
            person: {
                name: "JK",
                age: "20"
            }
        });
    });

    // error handling
    it('should throw error on invalid JSON', () => {
        expect(() => {
            myJSONParse("{'name': 'JK'}"); // Using single quotes which is invalid
        }).toThrow(Error);
    });
});