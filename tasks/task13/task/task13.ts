export function myJSONParse(input: string): any {

    // Internal recursive parsing function
    function _parse(data: string): any {
        // if the data is empty or starts with an invalid character, throw an error
        if (data === "" || data[0] === "'") {
            throw new Error("Invalid JSON");
        }

        // Check simple types
        if (data === "null") return null;
        if (data === "{}") return {};
        if (data === "[]") return [];
        if (data === "true") return true;
        if (data === "false") return false;

        // Strings
        if (data[0] === '"') {
            return data.slice(1, -1);
        }

        // Helper function to split data taking care of nested structures and quotes
        function splitData(str: string, delimiter: string): string[] {
            const result = [];
            let braces = 0;
            let curr = '';
            let inQuotes = false;

            for (let i = 0; i < str.length; i++) {
                if (str[i] === '"') inQuotes = !inQuotes;
                if (!inQuotes) {
                    if (str[i] === '{' || str[i] === '[') braces++;
                    if (str[i] === '}' || str[i] === ']') braces--;
                }

                if (str[i] === delimiter && braces === 0 && !inQuotes) {
                    result.push(curr.trim());
                    curr = '';
                } else {
                    curr += str[i];
                }
            }

            if (curr) {
                result.push(curr.trim());
            }

            return result;
        }

        // Objects
        if (data[0] === "{") {
            const pairs = splitData(data.slice(1, -1), ',');
            return pairs.reduce((acc, pair) => {
                const [key, value] = splitData(pair, ':');
                acc[_parse(key)] = _parse(value);
                return acc;
            }, {} as { [key: string]: any });
        }

        // Arrays
        if (data[0] === "[") {
            return splitData(data.slice(1, -1), ',').map(item => _parse(item));
        }

        // Fallthrough case
        throw new Error("Invalid JSON");
    }

    return _parse(input);
}
