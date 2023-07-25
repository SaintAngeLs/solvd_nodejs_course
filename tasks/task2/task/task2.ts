/**
 * @file dataTransfomrationModule.ts
 * @brief A JavaScript library that provides advanced data transformation functions.
 * The library includes the following features:
 *
 * addValues: Accepts two arguments of any type and performs the appropriate addition operation based on the types of the arguments.
 *            The function should return the result of the addition. If the addition is not possible, it should throw an error.
 *
 * stringifyValue: Accepts a single argument of any type and converts it to a string representation.
 *                 For objects and arrays, use JSON.stringify() for serialization.
 *                 For other types, use the appropriate built-in methods or operations to convert them to strings.
 *
 * invertBoolean: Accepts a single boolean argument and returns its inverted value.
 *                If the argument is not a boolean, it should throw an error.
 *
 * convertToNumber: Accepts a single argument of any type and attempts to convert it to a number.
 *                  For strings, use parseFloat() or parseInt() for conversion.
 *                  For other types, use appropriate operations or functions to perform the conversion.
 *                  If the conversion is not possible, it should throw an error.
 *
 * coerceToType: Accepts two arguments: value and type. It attempts to convert the value to the specified type using type coercion.
 *               The function should return the coerced value if successful. If the coercion is not possible, it should throw an error.
 *
 * Implement additional functions of your choice that demonstrate advanced type conversion scenarios
 * or cater to specific use cases related to primitive types.
 * You are encouraged to explore complex scenarios and push the limits of type conversion.
 *
 * Note: Deliver the result as one separate module with different separate functions.
 */
namespace dataTransfomrationModule
{
    /**
     * Accepts two arguments of any type and performs the appropriate addition operation based on the types of the arguments.
     * @param a - The first argument.
     * @param b - The second argument.
     * @returns The result of the addition operation.
     * @throws If the addition is not possible for the provided types.
     */
    export function addValues(a: any, b: any): any
    {
        if(typeof a === "number" && typeof b === "number")
        {
            return a + b;
        }
        else if(typeof a === "string" && typeof b === "string")
        {
            return a.concat(b);
        }
        else
        {
            throw new Error("Addition is not possible the types provided :(");
        }
    }
    /**
     * Accepts a single argument of any type and converts it to a string representation. For objects and arrays, use JSON.stringify() for serialization. For other types, use the appropriate built-in methods or operations to convert them to strings.
     * @param value - The value to be converted to a string.
     * @returns The string representation of the value.
     */
    export function stringifyValue(value: any): string
    {
        if(typeof value === "object" || Array.isArray(value))
        {
            return JSON.stringify(value);
        }
        else
        {
            return String(value);
        }
    }
    /**
     * Accepts a single boolean argument and returns its inverted value. If the argument is not a boolean, it should throw an error.
     * @param value - The boolean value to be inverted.
     * @returns The inverted boolean value.
     * @throws If the argument is not a boolean.
     */
    export function invertBoolean(value: boolean): boolean
    {
        if(typeof value === "boolean")
        {
            return !value;
        }
        else
        {
            throw new Error("Inversion not possible fot the type provided :(")
        }
    }
    /**
     * Accepts a single argument of any type and attempts to convert it to a number. For strings, use parseFloat() or parseInt() for conversion. For other types, use appropriate operations or functions to perform the conversion. If the conversion is not possible, it should throw an error.
     * @param value - The value to be converted to a number. 
     * @returns The converted number value.
     * @throws If the conversion is not possible for the provided value.
     */
    export function convertToNumber(value: any): any
    {
        if (typeof value === 'string') 
        {
            const parsedValue = parseFloat(value);

            if (!isNaN(parsedValue)) 
            {
                return parsedValue;
            }
        } 
        else if (typeof value === 'boolean') 
        {
            return value ? 1 : 0;
        } 
        
        throw new Error("Conversion to number not possible for the type provided :(");
    }
    /**
     * Accepts two arguments: value and type. It attempts to convert the value to the specified type using type coercion. The function should return the coerced value if successful. If the coercion is not possible, it should throw an error.
     * @param value - The value to be coerced to the specified type.
     * @param type - The target type the value should be coerced ('string', 'boolean', or 'number').
     * @returns The coerced value.
     * @throws If the coercion is not possible for the provided type.
     */
    export function coerceToType(value: any, type: "string" | "boolean" | "number"):  string | boolean | number
    {
        switch (type) 
        {
            case "string":
                return dataTransfomrationModule.stringifyValue(value);
            case "boolean":
                if (typeof value === "boolean") 
                {
                    return value;
                } 
                else if (typeof value === "string") 
                {
                    if (value === "true") 
                    {
                        return true;
                    }
                    else if (value === "false") 
                    {
                        return false;
                    }
                }
                throw new Error("Invalid type specified for coercion :(");
            case "number":
                return dataTransfomrationModule.convertToNumber(value);
            default:
                throw new Error("Invalid type specified for coercion :(");
        }
    }
    /**
     * Converts a binary string to a decimal number.
     * @param binaryString - The binary string to be converted.
     * @returns The decimal number representation of the binary string.
     * @throws If the input is not a valid binary string.
     */
    export function binaryToNumber(binaryString: string): number 
    {
        if (!/^[01]+$/.test(binaryString)) 
        {
            throw new Error("The string is not the binary number :(");
        }
        return parseInt(binaryString, 2);
    }
    /**
     * Converts a string with words separated by spaces or underscores to camelCase format.
     * @param inputString - The input string to be converted.
     * @returns The camelCase version of the input string.
     */
    export function stringToCamelCase(inputString: string): string 
    {
        const words = inputString.split(/[\s_]+/); // Split the string by spaces and underscores
        const camelCaseWords = words.map((word, index) => {
            if (index === 0) 
            {
                return word.toLowerCase(); // Convert the first word to lowercase
            } 
            else 
            {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(); 
            }
        });
        return camelCaseWords.join("");
    }
    /**
     * Calculates the sum of numbers in an array of numbers or strings containing numbers.
     * @param values - The array of numbers or strings containing numbers.
     * @returns The sum of the numbers in the array.
     * @throws If any element in the array is not a valid number.
     */
    export function sumArray(values: (number | string)[]): number 
    {
        let sum = 0;
        for (const val of values) 
        {
            const numVal = typeof val === "string" ? parseFloat(val) : val;
            if (isNaN(numVal)) 
            {
                throw new Error("Invalid number in the array.");
            }
            sum += numVal;
        }
        return sum;
    }
    

}

export default dataTransfomrationModule;