/**
 * 
 * Implement a multiline tagged template function called `multiline` that takes a template string and returns a string with line numbers added at the beginning of each line. The line numbers should start from 1 and increase for each line. Preserve the original indentation of each line.
 * const code = multiline\`  
function add(a, b) {  
return a + b;  
}  
\`;  
  
console.log(code);  
// Expected:  
// "1 function add(a, b) {  
// 2 return a + b;  
// 3 }"
 */
export default function multiline(strings: TemplateStringsArray, ...values: any[]): string {
    // Combine strings and values
    let combined = "";
    for (let i = 0; i < strings.length; i++) {
        combined += strings[i] + (values[i] || "");
    }

    // Split the combined string into lines
    const lines = combined.split('\n');

    // Add line numbers to each line
    const numberedLines = lines.map((line, index) => `${index + 1} ${line}`);

    // Join the numbered lines back into a single string
    return numberedLines.join('\n').trim();
}
