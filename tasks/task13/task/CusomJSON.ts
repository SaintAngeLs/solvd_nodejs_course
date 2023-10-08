 /**
  * Public 2023
  * Specification section:
  * 
  * 
  * 
  * This module is responsible for the provision of the polyfilling the native JSON objects ensurin,
  * that the eny environments without the native JSON suppors can still have an access to the
  * JSON serialization and deserialization functionalities (in case of need the one with the nice tests 
  * the section with the serialization implementation only).
  * 
  * 
  * The general file in the case of the exported object contatins the next functionalities and the
  * separate interesting functionalities possible to describe with the next list:
  * 
  * 
  * 
  * 1. Types Extenstions (global type extentions):
  *     - Extends 'String', 'Number', 'Boolean' basic JS types defined in the ES7 with 'toJSON' via the 
  *       declaration merging
  * 
  * 2 CusomJSON varialbe:
  * 
  *     - Provides an encapsulated object that mimics the native JSON object;
  * 
  *     - Includes a polyfill for 'stringify' and 'parse' methods;
  * 
  *     - Implements utility functions and regex patterns to support the main functionalities:
  *         * function stringRepNum(n <- number_type) -> string :
  *             *** Describes a utility function to format numbers for date serialization. ***
  * 
  *         * function quote(string <- string_type) -> string
  *             *** Transforms a given string to escape special characters, thereby making it 
  *                  suitable for JSON representation. ***
  * 
  *         * function str(key <- string, holder <- any) -> string || undefined
  *             *** Recursive function employed for converting JavaScript values to their JSON 
  *             counterparts. ***
  * 
  * 
  *         
  *         - Constants:
  *             * Regular expression pattern to match specific Unicode characters that require 
  *              special handling during serialization :
  * 
  *                 * const cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  * 
  *             * Regular expression pattern to pinpoint characters that necessitate 
  *              escape sequences in JSON strings
  * 
  *                 * const escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
  * 
  * 
  * 
  * 3. Additional Implementations:
  *   - Initializes the JSON object if it doesn't exist or isn't of type 'object'.
  *   - Extends Date objects with a 'toJSON' function to convert dates into a standardized string format or throw errors for invalid dates.
  *   - Extends basic types like String, Number, and Boolean with a 'toJSON' function if they don't possess one.
  *   - Enhances stringification to handle special Unicode characters and escape sequences.    
  *   - Provides custom JSON string parsing with error checks against malicious or poorly formed JSON strings.
  *   
  */


 /**
  * In the implamantaion to follow the result with no recusion as the required result the Stack abstract data type 
  * implemented as the priority queue data structure was used,
  * Dev Note:
  * Fortunatelly, it was implemeted earlier, so the farther solution will be strongly dependant of the previous one 
  */

import { Stack } from "../../task11/task/task11";

declare global {

    /** Interfaces - specific need - by augmenting the core Types with the toJSON method, it ensuring a more seamless
     * and more integrated approach to converting JS values to the JSON strings particularly, with totall accordance
     * the the specific work with the custom serialization mechanisms.
    */

    /**
     * Introduces a method to serialize a String instance to its JSON format.
     *      @param key (optional param): The key within the JSON structure from which the method was called.
     *      @returns: JSON representation of the String.
     */
    interface String {
        toJSON(key?: any): any;
    }

    /**
     * Introduces a method to serialize a Number instance to its JSON format.
     *      @param key (optional param): The key within the JSON structure from which the method was called.
     *      @returns: JSON representation of the Number.
     */
    interface Number {
        toJSON(key?: any): any;
    }

    /**
     * Introduces a method to serialize a Boolean instance to its JSON format.
     *      @param key (optional param): The key within the JSON structure from which the method was called.
     *      @returns: JSON representation of the Boolean.
     */
    interface Boolean {
        toJSON(key?: any): any;
    }
}


export const CustomJSON  = (() => {
    // run in the strict mode: according to the core settings of the project,
    // this line may be removed with the super success
    // 'use strict';

    /**
     * If either of these conditions: JSON object doesn't exist or if it isn't defined as an object type is true, 
     * it initializes the JSON object on the window global object.
     */
    if (typeof JSON !== 'object' || !JSON) {
        // `(window as any)` - only to avoid the TS any type errors
        (window as any).JSON = {};
     }
     
     /**
      * The function to return a string representation of the number in case of need (in the module 
      * it is used for the general purpose:
      * for date and time formatting where the 00 is accepted with the hinger precission  than the 0)
      *     @param n: number to convert to string
      *     @returns: the number converted to the string with the strong condition in the memory:
      *     If `n` is less than 10 => it prefixes the number with a '0' (ensure a two-digit format).
      */
    function stringRepNum(n: number): string {
        return n < 10 ? '0' + n : n.toString();
    }

    // avoid the case, when the Date prototype has not been previously augmented with a toJSON method;
    if (typeof Date.prototype.toJSON !== 'function') {
        // the case above implicating the importance of introdusing the new Date.prototype.toJson method, which
        // has on it's ame to provide the new acceptable representation of the date objects when converting to
        // JSON
        Date.prototype.toJSON = function (this: Date, key?: any): string {
            // this is possible if and only if the Data object contain the valid finite value to accept the farcer 
            // proceding steps 
            if (isFinite(this.valueOf())) {
                // ISO-8601 UTC-based date-time: yyyy-mm-ddThh:mm:ssZ
                return `${this.getUTCFullYear()}-
                ${stringRepNum(this.getUTCMonth() + 1)}-
                ${stringRepNum(this.getUTCDate())}T
                ${stringRepNum(this.getUTCHours())}:
                ${stringRepNum(this.getUTCMinutes())}:
                ${stringRepNum(this.getUTCSeconds())}Z`;
            } else {
                // the date is not accempateble(here it meand the same as in the descriptio above)
                throw new Error('Invalid date value');
            }
        };
        // toJSON method for String, Number, and Boolean prototypes are defined simultaneously.
        // is specifically straightforward and retrieves the value itself. 
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (this: any, key: any): any {
            // retrive the primitive value of the instance only
            return this.valueOf(); 
        };
    }
    /** RegExp Patterns:
    
        \u0000: Represents the NULL character.
        \u00ad: Represents the soft hyphen.
        \u0600-\u0604: Range for Arabic-specific characters.
        \u070f: Represents the Syriac abbreviation mark.
        \u17b4\u17b5: Khmer vowel characters.
        \u200c-\u200f: Range includes zero-width non-joiner, zero-width joiner, and directional formatting characters.
        \u2028-\u202f: Range for line and paragraph separators and other specific whitespace characters.
        \u2060-\u206f: General punctuation and invisible operators.
        \ufeff: Byte order mark (BOM).
        \ufff0-\uffff: A range in the Specials Unicode block, which includes some unassigned values.

        Note: 
        Above pattend are user farher in the cx. Each of these ranges signifies 
        control characters or characters with special meaning in different contexts, which might need to be replaced or 
        handled specially in JSON stringification.
     */

    const cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    /** Extentsion of the cx with additional:
     * 
        \\: Matches the backslash.
        \": Matches the double quote.
        \x00-\x1f: Matches ASCII control characters.
        \x7f-\x9f: Matches ASCII DEL and non-displayable Latin-1 supplement.
        Rest of the characters overlap with those in the cx pattern.

        Note:
        RegExp matches characters that need to be escaped when in a string format in JSON. This includes 
        backslashes, double quotes, and a series of control and special characters similar to the `cx` pattern.
     */
    const escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

    // For formating the output correctly, to be used later in the JSON stringification prociding 
    let gap: string;
    let indent: string;

    /** Meta specific characters:
        maps certain characters to their corresponding escaped representations in strings: aiding 
        in replacing unescaped special characters with their properly escaped versions during stringification
     */
    const meta: { [key: string]: string } = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '"' : '\\"',
        '\\': '\\\\'
    };
    
    let rep: any;

    /**
     * Ensuring that any special or control characters within it are properly escaped, making the 
     * string safe for JSON representation.
     *      @param string: string to check and control the characters are escaped properly 
     *      @returns Returns a JSON-compliant representation of the input string. If the input string contains 
     *      characters that need escaping, those characters are replaced with their respective escape 
     *      sequences. If no such characters are present, the input string is simply wrapped in double 
     *      quotes and returned.
     */
    function quote(string: string): string {
        // Reset the alst index of RegExp to defind the start of the search as the beginnin of the string
        escapable.lastIndex = 0;
        // if there it any character to be escaped: if so than replace them with the repective escape sequence
        return escapable.test(string) ? '"' + string.replace(escapable, (a) => {
            // the escape sequence it previouly defined in the Meta escape
            const c = meta[a];
            // if the direct escape representation exists, use it, in the other case, construct a Unicode escape sequence
            return typeof c === 'string' ? c : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
        }) + '"' : '"' + string + '"';
    }

    /**
     * The `str` function is a custom serializer that takes an object or primitive type element
     * value and converts it to a JSON-like string representation. 
     * This function employs a non-recursive (iterative) approach by using a custom stack data structure
     * defined righ after the specification completer descriotion at the beginning 
     * to handle nested objects and arrays. This can be especially useful for deep 
     * objects to avoid stack overflow errors with the priority queue implemented earlier that can 
     * occur with recursive solutions.
     *
     *      @param key: The key representing the current item being serialized. 
     *      @param holder - The object or array that contains the value associated with the 
     *      given key. It represents the "context" in which the key-value pair 
     *      may only take its place to exist.
     *      @returns A JSON-like string representation of the input value. If the input 
     *      cannot be serialized, the function may return `undefined`.
     * 
     * Notes:
     * 
     * Behavior:
     * 1. If the value associated with the key has a `.toJSON()` method, it will be 
     *    called and its result will be used for serialization.
     * 2. If a replacer function (`rep`) exists, it will be called with the key and 
     *    value to possibly replace the value.
     * 3. The function handles the following nextly data types: 
     *      - string: Will be escaped and enclosed in quotes;
     *      - number: Serialized to its string representation. Non-finite numbers (e.g., 
     *        NaN, Infinity) will be represented as null;
     *      - boolean: Converted to its string representation only (true or false).
     *      - object: 
     *          - If it's null, it's represented as null.;
     *          - If it's an array, it's enclosed in square brackets with its values serialized;
     *          - If it's an object, it's enclosed in curly braces with its key-value pairs serialized.
     */
    function str_serializer(key: string, holder: any): string | undefined {
        
        // initializing the priority queue implemented as the stack abstract data type
        const stack = new Stack<any>();

        // empty result string that will accumulate the result of the serialization
        let result = "";

        // begin by pushing the initial key holder pair onto the stack
        stack.push({ key, holder });

        // keep continuing until there's no more objects/arrays left to serialize
        while (stack.peek()) {

            // Pop the topmost key-holder pair from the stack
            const current = stack.pop();
            const { key, holder } = current;
    
            // fetch the value associated with the current key in the current holder object
            let value = holder[key];
    
             // if the value is an object and has a toJSON method for itself, call it
            if (value && typeof value === 'object' && typeof value.toJSON === 'function') {
                value = value.toJSON(key);
            }
    
            // if a replacer function rep exists, use it to possibly alter the value
            if (typeof rep === 'function') {
                value = rep.call(holder, key, value);
            }
    
             // switch on the data type of the value to determine strategy of serialization
            switch (typeof value) {
                // for strings, use the quote function to add necessary escapes and quotes
                case 'string':
                    result += quote(value);
                    break;
    
                // for numbers, check if it's finite; non-finite numbers are represented as 'null'.
                case 'number':             
                    result += isFinite(value) ? String(value) : 'null';
                    break;
    
                // booleans, simply convert to string representation.
                case 'boolean':
                    result += String(value);
                    break;
    
                // for objects (including arrays and null), use next logic.
                case 'object':
                    // if value is null, represent as 'null'.
                    if (!value) 
                    {
                        result += 'null';
                    } 
                     // if value is an array, recursively serialize its elements.
                    else if (Array.isArray(value)) 
                    {
                        result += '[';
                        for (let i = value.length - 1; i >= 0; i--) 
                        {
                            stack.push({ key: i.toString(), holder: value });
                            if (i > 0) result += ',';
                        }
                        result += ']';
                    } 
                    // if value is a non-array object, recursively serialize its key-value pairs.
                    else 
                    {
                        const keys = Object.keys(value);
                        result += '{';
                        for (let i = keys.length - 1; i >= 0; i--) 
                        {
                            stack.push({ key: keys[i], holder: value });
                            if (i > 0) result += ',';
                        }
                        result += '}';
                    }
                    break;
            }
        }
        // when the entire input has been processed, return the final serialized string.
    
        return result;
    }

    /**
     * Implementation for the need of the future purposes
     */

    // Check if native JSON.stringify exists, if not provide a custom implementation  suggested in the task description
    //if (typeof JSON.stringify !== 'function') {
        JSON.stringify = function (value: any, replacer?: any, space?: any): string {
            gap = '';
            indent = '';

            // if the space is a number, generate that many spaces for indentation
            if (typeof space === 'number') {
                for (let i = 0; i < space; i++) {
                    indent += ' ';
                }
            } else if (typeof space === 'string') {
                indent = space;
            }

            // assign the replacer function if provided
            rep = replacer;

            // Check the validity of the replacer argument
            if (replacer && typeof replacer !== 'function' && (typeof replacer !== 'object' || typeof replacer.length !== 'number')) {
                throw new Error('JSON.stringify');
            }

            // Return the serialized string using the custom serializer.
            return str_serializer('', { '': value }) || "";
        };
   // }

    // Check if native JSON.parse exists, if not provide a custom implementation suggested in the task description.
    //if (typeof JSON.parse !== 'function') {
        JSON.parse = function (text: string, reviver?: any): any {
            const walk = (holder: any, key: string) => {
                const value = holder[key];

                // Recurse into the object if it's an object
                if (value && typeof value === 'object') {
                    for (const k in value) { suggested in the task description
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            const v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v;
                            } else {
                                delete value[k];
                            }
                        }
                    }
                }
                 // If a reviver function is provided, use it to transform the resulting value.
                return reviver ? reviver.call(holder, key, value) : value;
            };

            text = String(text);
            cx.lastIndex = 0;

            // Handle special characters in the string.
            if (cx.test(text)) {
                text = text.replace(cx, a => '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4));
            }

            // Check if the text is valid JSON using regex and then parse it.
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
                return reviver ? walk({ '': eval(`(${text})`) }, '') : eval(`(${text})`);
            }

            throw new SyntaxError('JSON.parse');
        };
    //}

    // Return the JSON methods.
    return {
        stringify: JSON.stringify,
        parse: JSON.parse
    };
})();


