## Table of Contents

1. [General Task Description and Key Points](#general-task-description-and-key-points)
   - [JSON Syntax Understanding](#json-syntax-understanding)
   - [Parsing Rules](#parsing-rules)
2. [JSON Parser Implementation](#json-parser-implementation)
   - [Tokenization](#tokenization)
     - [str_serializer Function](#str_serializer-function)
   - [Parsing](#parsing)
     - [JSON.parse Function](#jsonparse-function)
   - [Error Handling](#error-handling)
   - [Testing](#testing)
3. [Documentation & Reflection](#documentation--reflection)
   - [Documentation](#documentation)
   - [Reflection](#reflection)
4. [A brief Implementation: Custom JSON Polyfill](#a-brief-implementation:-custom-json-polyfill)
5. [Usage](#usage)

### General Task Description and Key Points
1. JSON Syntax 
 - JSON syntax understanding
 - Parsing Rules

### JSON Parser Implementation
### Tokenization
The `str_serializer` function is a custom serializer that takes an object or primitive type element value and converts it to a JSON-like string representation. It employs a non-recursive (iterative) approach using a custom stack data structure to handle nested objects and arrays. This helps avoid stack overflow errors, especially with deep objects. It follows specific rules for serializing different data types and handles custom replacers.
### Parsing
The `JSON.parse` function parses a JSON-like string and converts it into a JavaScript object. It uses a `walk` function to traverse the object and handle any reviver functions if provided. It also checks the validity of the JSON string using regex and then parses it.
### Error handling
Error handling is implemented to catch syntax errors and other issues during JSON parsing. If the input string is not valid JSON, a `SyntaxError` is thrown.
 -  Testing

### Documentaiton && reflection
The full documentaion is presented in the source file. In the process of implementing our JSON parser, one crucial aspect that stood out was the use of regular expressions (regex) to validate and parse JSON strings. This reflection explores the role of regex in JSON parsing and the challenges and benefits it brings to the implementation.

### Reflection

Regular expressions play a vital role in parsing JSON for several reasons:

- Syntax Validation: JSON follows a strict syntax, and regular expressions are invaluable for ensuring that the input JSON string adheres to this syntax. They help identify invalid characters, incorrect nesting, and missing delimiters, allowing us to reject malformed JSON early in the parsing process.

- Tokenization: In JSON parsing, it's essential to tokenize the input string into meaningful elements like strings, numbers, objects, and arrays. Regular expressions help identify and extract these tokens, simplifying the parsing process.

- Escaping Characters: JSON allows certain characters to be escaped using backslashes. Regular expressions help identify and handle escaped characters correctly, ensuring that they are parsed as intended.

#### Challenges Faced:

While regular expressions are powerful tools, their use in JSON parsing also posed some challenges:

Complexity: Crafting regular expressions for parsing complex JSON structures can become intricate. Nested arrays and objects, along with various data types, require carefully constructed regex patterns.

Performance: Depending on the complexity of the regex patterns and the size of the input JSON, regex-based parsing can have performance implications. Balancing accuracy and performance is essential.

Debugging: Debugging regex patterns can be challenging, especially when they become long and complex. Testing and refining these patterns were time-consuming tasks.




### A brief Implementation: Custom JSON Polyfill

## Overview

This module provides a polyfill for native JSON objects, ensuring that environments without native JSON support can still access JSON serialization and deserialization functionalities. It includes various features and utility functions.

## Features

### Type Extensions (Global Type Extensions)

- Extends basic JavaScript types (`String`, `Number`, `Boolean`) with a `toJSON` method via declaration merging.

### Custom JSON Object (`CustomJSON`)

- Provides an encapsulated object that mimics the native JSON object.
- Includes polyfills for `stringify` and `parse` methods.
- Implements utility functions and regex patterns to support main functionalities:
   - `stringRepNum(n)`: Formats numbers for date serialization.
   - `quote(string)`: Escapes special characters in strings for JSON representation.
   - `str(key, holder)`: Recursive function for converting JavaScript values to JSON counterparts.

### Constants

- Regular expression patterns to match specific Unicode characters requiring special handling during serialization.
- Regular expression pattern to identify characters necessitating escape sequences in JSON strings.

### Additional Implementations

- Initializes the JSON object if it doesn't exist or isn't of type 'object'.
- Extends `Date` objects with a `toJSON` function to convert dates into a standardized string format or throw errors for invalid dates.
- Extends basic types like `String`, `Number`, and `Boolean` with a `toJSON` function if they don't possess one.
- Enhances stringification to handle special Unicode characters and escape sequences.
- Provides custom JSON string parsing with error checks against malicious or poorly formed JSON strings.

## Usage

This polyfill ensures compatibility with environments lacking native JSON support, making it easier to work with JSON data in various contexts. Simply import the `CustomJSON` object and use its `stringify` and `parse` methods as you would with native JSON.

to run the development tetst:
```bash
npm test task13_TDD
```
or in the root directory there are also some importand script sh enabling rest running a bit faster