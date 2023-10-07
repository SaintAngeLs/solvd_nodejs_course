import { commaRe } from '../regex/rgx';

export const comma = (str: string): [string, string] | null => {
    if (str && str.startsWith(',')) {
        const match = str.match(commaRe);
        return match ? [match[0], str.slice(1)] : null;
    }
    return null;
};
