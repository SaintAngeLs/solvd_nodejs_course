import { colonRe } from '../regex/rgx';

export const colon = (str: string): [string, string] | null => {
    const match = str.match(colonRe);
    return match ? [match[0], str.slice(1)] : null;
};
