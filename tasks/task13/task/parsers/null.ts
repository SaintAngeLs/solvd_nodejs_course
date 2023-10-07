import { space } from './space';

export const nullx = (str: string): [null, string] | null => {
    const spaceResult = space(str);
    if (spaceResult) {
        str = spaceResult[1];
    }
    return str.startsWith('null') ? [null, str.slice(4)] : null;
};
