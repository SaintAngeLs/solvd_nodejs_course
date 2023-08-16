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