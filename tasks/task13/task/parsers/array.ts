import { valueParser } from '../parsers';
import { space } from './space';
import { comma } from './comma';
import { trailCheck, commaCheck } from '../exceptionHandling/error';

export const array = (str: string): [any[], string] | null => {
    if (typeof str !== 'string' || !str.startsWith('[')) {
        return null;
    }

    let array: any[] = [];
    str = str.slice(1);

    while (str && str[0] !== ']') {
        const spaceResult = space(str);
        if (spaceResult) {
            str = spaceResult[1];
        }

        const factoryOut = valueParser(str);
        if (factoryOut) {
            array.push(factoryOut[0]);
            str = factoryOut[1];
            str = trailCheck(str);
            const commaResult = comma(factoryOut[1]);
            if (commaResult) {
                str = commaResult[1];
            }
            const spaceAfterComma = space(str);
            if (spaceAfterComma) {
                str = spaceAfterComma[1];
            }
        } else {
            throw new Error('Expected value in array');
        }
    }

    if (!str || str[0] !== ']') {
        throw new Error('Expected closing bracket');
    }

    return [array, str.slice(1)];
};
