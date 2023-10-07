import { space } from './space';
import { numRe } from '../regex/rgx';
import { numValidCheck, numSyntaxCheck } from '../exceptionHandling/error';

export const number = (str: string): [number, string] | null => {
    numSyntaxCheck(str);

    const spaceResult = space(str);
    if (spaceResult) {
        str = spaceResult[1];
    }

    const match = str.match(numRe);

    if (match && match[0].includes('.')) {
        numValidCheck(match[0]);
    }

    if (match) {
        return [parseFloat(match[0]), str.slice(match[0].length)];
    }

    return null;
};
