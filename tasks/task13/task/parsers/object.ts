import { space } from './space';
import { stringx } from './string';
import { colon } from './colon';
import { comma } from './comma';
import { valueParser } from '../parsers';
import {
    syntaxCheck1,
    syntaxCheck2,
    syntaxCheck3,
    syntaxCheck4
} from '../exceptionHandling/error';

export const object = (str: string): [Record<string, any>, string] | null => {
    const spaceResult = space(str);
    if (spaceResult) {
        str = spaceResult[1];
    }

    if (str[0] !== '{') return null;
    
    syntaxCheck1(str);

    const object: Record<string, any> = {};
    str = str.slice(1);

    const spaceAfterBrace = space(str);
    if (spaceAfterBrace) {
        str = spaceAfterBrace[1];
    }

    while (str[0] !== '}') {
        const spaceBeforeFactory = space(str);
        if (spaceBeforeFactory) {
            str = spaceBeforeFactory[1];
        }

        syntaxCheck2(str);

        let factory: [string, string] | null = null;
        try {
            factory = stringx(str) as [string, string];  // Assuming stringx either returns [string, string] or throws an error.
        } catch (error) {}

        if (factory) {
            const spaceAfterFactory = space(factory[1]);
            if (spaceAfterFactory) {
                str = spaceAfterFactory[1];
            }

            factory[1] = syntaxCheck3(factory[1]);

            const key = factory[0];
            const colonResult = colon(str);
            if (colonResult) {
                str = colonResult[1];
            }

            const spaceAfterColon = space(str);
            if (spaceAfterColon) {
                str = spaceAfterColon[1];
            }

            syntaxCheck4(valueParser(str));
            const value = valueParser(str);

            if (value) {
                object[key] = value[0];
                str = value[1];

                const commaResult = comma(str);
                if (commaResult) {
                    str = commaResult[1];
                }

                const spaceAfterValue = space(str);
                if (spaceAfterValue) {
                    str = spaceAfterValue[1];
                }
            }
        }

        if (str === '}') break;
    }

    return [object, str.slice(1)];
};
