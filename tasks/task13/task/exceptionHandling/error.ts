import { commaErrRe, isValidNum } from '../regex/rgx';
import { space } from '../parsers/space';

export const syntaxCheck1 = (str: string): void => {
  if (str.match(commaErrRe)) {
    console.log(`\x1b[31m${'Message: Property expected'}\x1b[0m`);
    throw new SyntaxError('Invalid JSON');
  }
};

export const syntaxCheck2 = (str: string): void => {
  if (!str.startsWith('"')) throw new SyntaxError(`\x1b[31m${'Invalid JSON'}\x1b[0m`);
};

export const syntaxCheck3 = (str: string): string => {
  if (!str.startsWith(':')) {
    console.log(`\x1b[31m${'Message: Expected colon'}\x1b[0m`);
    throw new SyntaxError('Invalid JSON');
  }
  return str;
};

export const syntaxCheck4 = (value: any): void => {
  if (value === null) {
    console.log('\x1b[31m%s\x1b[0m', 'Message: Must contain a value after colon');
    throw new SyntaxError('Invalid JSON');
  }
};

export const commaCheck = (str: string): void => {
  if (isFinite(+str[0]) && str[1] === ' ') {
    console.log('\x1b[31m%s\x1b[0m', 'Message: Expected comma');
    throw new SyntaxError('Invalid JSON');
  }
};

export const trailCheck = (str: string): string => {
  if (str[0] === ',') {
    const spaceResult = space(str.slice(1));
    str = spaceResult ? spaceResult[1] : str;
    if (str[0] === ']') {
      console.log('\x1b[31m%s\x1b[0m', 'Message: Trailing comma');
      throw new SyntaxError('Invalid JSON');
    }
  }
  return str;
};

export const numValidCheck = (num: string): void => {
  if (!isValidNum.test(num)) {
    const message = `Message: '${num} 'is not a valid number.`;
    console.log(`\x1b[31m${message}\x1b[0m`);
    throw new SyntaxError('Invalid JSON');
  }
};

export const numSyntaxCheck = (str: string): void => {
  if (str.startsWith('.')) {
    const message = `Message: Value expected before dot`;
    console.log(`\x1b[31m${message}\x1b[0m`);
    throw new SyntaxError('Invalid JSON');
  }
};
