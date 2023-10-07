export const boolean = (str: string | undefined): [boolean, string] | null => {
    if (typeof str === 'undefined') return null;
    if (str.startsWith('false')) return [false, str.slice(5)];
    if (str.startsWith('true')) return [true, str.slice(4)];
    return null;
};
