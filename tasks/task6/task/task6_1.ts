/**
 * 
 * Task 1: Quasi-Tagged Templates
You are working on a localization library that uses tagged templates to handle multiple languages. Implement a function called localize that acts as a quasi-tagged template. The function should take a template string and an object containing language-specific translations. It should replace placeholders in the template string with the corresponding translations from the provided object.
const translations = {  
	en: {  
	greet: "Hello",  
	intro: "Welcome to our website"  
},  
	fr: {  
	greet: "Bonjour",  
	intro: "Bienvenue sur notre site web"  
}  
};  
	  
const language = "fr"; // Change to "en" for English  
const greeting = "greet";  
const introduction = "intro";  
  
const localizedGreeting = localize`${greeting}`;  
const localizedIntroduction = localize`${introduction}`;  
  
console.log(localizedGreeting); // Expected: "Bonjour" (for language "fr")  
console.log(localizedIntroduction); // Expected: "Bienvenue sur notre site web" (for language "fr")

 */


// **************** MODIFICATION: *****************
// TODO: the function accepts the `@param language: string`, so that if the subspace of tests of the all the test space
// was V, than with this modification the subspace of all the tests will be at least V^2

export interface Translation {
    [key: string]: string;
}

export interface Translations {
    [language: string]: Translation;
}

const translations: Translations = {
    en: {
        greet: "Hello",
        intro: "Welcome to our website"
    },
    fr: {
        greet: "Bonjour",
        intro: "Bienvenue sur notre site web"
    }
};

// test: const language: string = "fr";

export default function localize(strings: TemplateStringsArray,  language: string, ...values: string[]): string {
    // Assuming the values are the keys in our translations object
    // and the language accessible from the params
    return values.map(value => translations[language][value]).join('');
}
