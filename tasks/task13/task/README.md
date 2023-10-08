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
4. [Brief Implementation: Custom JSON Polyfill](#brief-implementation-custom-json-polyfill)
5. [Usage](#usage)

## General task description and some points outs
1. JSON Syntax 
 - JSON syntax understanding
 - Parsing Rules

2. JSON parser implementation
 - Tokenization
The `str_serializer` function is a custom serializer that takes an object or primitive type element value and converts it to a JSON-like string representation. It employs a non-recursive (iterative) approach using a custom stack data structure to handle nested objects and arrays. This helps avoid stack overflow errors, especially with deep objects. It follows specific rules for serializing different data types and handles custom replacers.
 - Parsing
The `JSON.parse` function parses a JSON-like string and converts it into a JavaScript object. It uses a `walk` function to traverse the object and handle any reviver functions if provided. It also checks the validity of the JSON string using regex and then parses it.
 -  Error handling
Error handling is implemented to catch syntax errors and other issues during JSON parsing. If the input string is not valid JSON, a `SyntaxError` is thrown.
 -  Testing

3. Documentaiton && reflection
3.1 Documentation
3.2 Reflection


# A brief implementation :: Custom JSON Polyfill

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