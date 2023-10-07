## myJSONParse Function

**Purpose**: The `myJSONParse` function is designed to parse a string into a JavaScript object. It is similar in purpose to the built-in JSON.parse() method, but implemented for learning and illustrative purposes.

### Parameters

- `input` (string): The input string that represents a JSON-like structure.

### Returns

- `any`: Returns a JavaScript object, array, string, number, boolean, or null based on the input string.

### Usage

```javascript
const obj = myJSONParse("{\"name\":\"John\"}");
console.log(obj.name); // Outputs: John

### Analysis

 - myJSONParse(input: string): any: This is the main function. It contains a series of condition checks using helper functions (isInvalidInput, isBooleanOrNull, isString, isArray, isObject). If a condition is satisfied, the corresponding parsing function or conversion function is called. Noticeably, within the parseArray and parseObject functions, myJSONParse is invoked again, indicating recursion.

 - isInvalidInput(input: string): boolean: It simply checks for invalid characters using a regex match. No recursion.

 - isBooleanOrNull(input: string): boolean: It checks if the input is a "null", "true", or "false". No recursion.

 - convertToBooleanOrNull(input: string): boolean | null: Converts the input to its corresponding boolean value or null. No recursion.

 - isString(input: string): boolean: Uses regex to check if the input is a string. No recursion.

 - extractStringContent(input: string): string: Extracts the inner content of a string. No recursion.

 - isArray(input: string): boolean: Uses regex to check if the input is an array. No recursion.

 - isObject(input: string): boolean: Uses regex to check if the input is an object. No recursion.

 - customSplit(str: string, delimiter: string): string[]: This function splits a string by a delimiter, respecting nested structures. No recursion.

 - parseArray(input: string): any[]: This function parses an array. Inside, it uses the customSplit function to split the content by commas and then maps through each split content, invoking the myJSONParse function for each. This introduces recursion because myJSONParse calls parseArray and vice versa.

 - parseObject(input: string): { [key: string]: any }: Parses the input as an object. It uses the customSplit function to break down the input and then processes each key-value pair. Within this loop, it calls myJSONParse for both the key and value. This also introduces recursion because myJSONParse calls parseObject and vice versa.
