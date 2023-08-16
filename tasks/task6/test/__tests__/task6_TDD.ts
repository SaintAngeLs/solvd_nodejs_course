import {localize} from '../../task/task6'


describe('localize', () => {
    
    
    it('should translate greet to English', () => {
        const language = "en";
        const greeting = "greet";
        const result = localize`${language}${greeting}`;
        expect(result).toEqual("Hello");
    });

    it('should translate intro to English', () => {
        const language = "en";
        const introduction = "intro";
        const result = localize`${language}${introduction}`;
        expect(result).toEqual("Welcome to our website");
    });

    it('should translate greet to French', () => {
        const language = "fr";
        const greeting = "greet";
        const result = localize`${language}${greeting}`;
        expect(result).toEqual("Bonjour");
    });

    it('should translate intro to French', () => {
        const language = "fr";
        const introduction = "intro";
        const result = localize`${language}${introduction}`;
        expect(result).toEqual("Bienvenue sur notre site web");
    });

    it('should return an empty string for missing keys', () => {
        const language = "en";
        const missingKey = "missing";
        const result = localize`${language}${missingKey}`;
        expect(result).toEqual("");
    });

});

import {highlightKeywords} from '../../task/task6'
describe('highlightKeywords', () => {

    it('should highlight keywords correctly', () => {
        const keywords = ["JavaScript", "template", "tagged"];
        const templateString = "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";

        const result = highlightKeywords(templateString, keywords);
        
        expect(result).toBe("Learn <span class='highlight'>JavaScript</span> <span class='highlight'>tagged</span> templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."
        );
    });

    it('should return unchanged template if no keywords are provided', () => {
        const templateString = "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";

        const result = highlightKeywords(templateString, []);
        
        expect(result).toBe("Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.");
    });

    it('should handle templates without placeholders', () => {
        const keywords = ["JavaScript", "template", "tagged"];
        const templateString = "Learn JavaScript tagged templates to create custom template literals for tagged manipulation.";

        const result = highlightKeywords(templateString, keywords);
        
        expect(result).toBe("Learn <span class='highlight'>JavaScript</span> <span class='highlight'>tagged</span> templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation.");
    });
    
    it('should handle templates with missing keyword replacements', () => {
        const keywords = ["JavaScript"];
        const templateString = "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";

        const result = highlightKeywords(templateString, keywords);
        
        expect(result).toBe("Learn <span class='highlight'>JavaScript</span> tagged templates to create custom ${1} literals for ${2} manipulation."
);
    });
});

import {multiline} from  '../../task/task6'


describe('multiline', () => {

    it('should add line numbers to a multiline template string', () => {
        const code = multiline`function add(a, b) {
return a + b;
}
`;
        expect(code).toBe(
`1 function add(a, b) {
2 return a + b;
3 }
4`

        );
    });

    it('should handle a single line without numbering', () => {
        const singleLine = multiline`Hello World!`;
        expect(singleLine).toBe('1 Hello World!');
    });

    it('should correctly number lines even with embedded variables', () => {
        const variable = "inner text";
        const result = multiline`First Line
${variable}
Third Line`;
        expect(result).toBe(
`1 First Line
2 inner text
3 Third Line`
        );
    });

    it('should handle empty lines', () => {
        const code = multiline`function test() {
    return "Hello";
}`;
        expect(code).toBe(
`1 function test() {
2     return "Hello";
3 }`
        );
    });
});

import {debounce} from  '../../task/task6'
jest.useFakeTimers();

describe('debounce', () => {
    
    it('should execute the debounced function after the specified delay', () => {
        const callback = jest.fn();
        const debounced = debounce(callback, 300);
        
        debounced();
        expect(callback).not.toHaveBeenCalled();
        
        jest.advanceTimersByTime(250);
        expect(callback).not.toHaveBeenCalled();

        jest.advanceTimersByTime(50);
        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should execute the debounced function only once within the delay duration', () => {
        const callback = jest.fn();
        const debounced = debounce(callback, 300);
        
        debounced();
        debounced();
        debounced();
        
        jest.advanceTimersByTime(300);
        
        expect(callback).toHaveBeenCalledTimes(1);
    });

    it('should pass the correct arguments to the debounced function', () => {
        const callback = jest.fn();
        const debounced = debounce(callback, 300);
        
        debounced('arg1', 'arg2');
        
        jest.advanceTimersByTime(300);
        
        expect(callback).toHaveBeenCalledWith('arg1', 'arg2');
    });
    
});


import { throttle } from  '../../task/task6'

jest.useFakeTimers();

describe('throttle', () => {
    
    it('should execute the throttled function only after the specified interval', () => {
        const callback = jest.fn();
        const throttled = throttle(callback, 1000);
        
        throttled();
        expect(callback).toHaveBeenCalledTimes(1);
        
        throttled();
        expect(callback).toHaveBeenCalledTimes(1);
        
        jest.advanceTimersByTime(999);
        throttled();
        expect(callback).toHaveBeenCalledTimes(1);

        jest.advanceTimersByTime(1);
        throttled();
        expect(callback).toHaveBeenCalledTimes(2);
    });

    it('should pass the correct arguments to the throttled function', () => {
        const callback = jest.fn();
        const throttled = throttle(callback, 1000);
        
        throttled('arg1', 'arg2');
        
        expect(callback).toHaveBeenCalledWith('arg1', 'arg2');
    });

});


import { curry } from  '../../task/task6'

describe('curry', () => {

    it('should curry a function correctly', () => {
        const multiply = (a: number, b: number, c: number): number => a * b * c;
        const curriedMultiply = curry(multiply, 3);

        expect(curriedMultiply(2)(3)(4)).toBe(24);
        expect(curriedMultiply(2, 3)(4)).toBe(24);
        expect(curriedMultiply(2)(3, 4)).toBe(24);
        expect(curriedMultiply(2, 3, 4)).toBe(24);
    });

    it('should handle varying arity', () => {
        const add = (a: number, b: number, c: number, d: number): number => a + b + c + d;
        const curriedAdd = curry(add, 4);

        expect(curriedAdd(1)(2)(3)(4)).toBe(10);
        expect(curriedAdd(1, 2)(3, 4)).toBe(10);
    });

});

