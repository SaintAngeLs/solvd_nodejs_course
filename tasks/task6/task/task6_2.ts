/**
 * ## Task 2: Advanced Tagged Template

Create a function called `highlightKeywords` that acts as a tagged template. The function should take a template string and an array of keywords. It should highlight each occurrence of a keyword in the template by wrapping it in a `<span>` element with a specific CSS class. Use template literals and string manipulation to achieve this.

```jsx
const keywords = ["JavaScript", "template", "tagged"];  
const template = "Learn \${0} tagged templates to create custom \${1} literals for \${2} manipulation.";  
  
const highlighted = highlightKeywords(template, keywords);  
  
console.log(highlighted);  
// Expected: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."
```
 */

export default function highlightKeywords(template: string, keywords: string[]): string {
    // 1. Replace placeholders with corresponding keywords
    let result = template.replace(/\$\{(\d+)\}/g, (match, p1) => {
        const index = parseInt(p1, 10);
        if (index < keywords.length) {
            return keywords[index];
        }
        return match; // Return the original placeholder if index exceeds keywords list.
    });

    // 2. Highlight all instances of the keywords in the result
    for (const keyword of keywords) {
        const keywordRegex = new RegExp(`\\b${keyword}\\b`, 'g'); // using word boundaries
        result = result.replace(keywordRegex, `<span class='highlight'>${keyword}</span>`);
    }

    return result;
}

// // Example jsx:
// const keywords = ["JavaScript", "template", "tagged"];
// const templateString = "Learn ${0} tagged templates to create custom ${1} literals for ${2} manipulation.";

// const highlighted = highlightKeywords(templateString, keywords);
// console.log(highlighted);  
// // Will log: "Learn <span class='highlight'>JavaScript</span> tagged templates to create custom <span class='highlight'>template</span> literals for <span class='highlight'>tagged</span> manipulation."
