import { stringRe, regexTable } from '../regex/rgx';

type RegexTableType = {
    [key: string]: string;
    '/\\\\\\\\/': string;
    '/\\\\//': string;
    '/\\\\b/': string;
    '/\\\\f/': string;
    '/\\\\n/': string;
    '/\\\\r/': string;
    '/\\\\t/': string;
  };
  

export const stringx = (str: string): [string, string] | null | SyntaxError => {
  let match: RegExpMatchArray | null;

  if (str.startsWith('"')) {
    match = str.match(stringRe);
    if (match && match[0] !== undefined) {
      return [stringEnhancer(match[0]), str.replace(match[0], '')];
    }
    return new SyntaxError('Syntax Error');
  }
  return null;
};

const stringEnhancer = (str: string): string => {
  str = str.slice(1, -1);
  for (const key in regexTable) {
    str = str.replace(new RegExp(key, 'g'), regexTable[key as keyof typeof regexTable]);

  }
  return str;
};
