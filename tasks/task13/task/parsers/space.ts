import { spaceRe } from '../regex/rgx';

export const space = (str: string): [string, string] | null => {
  let match: RegExpMatchArray | null;

  if ((str && str.startsWith(' ')) || (str && str.startsWith('\n'))) {
    match = str.match(spaceRe);
    if (match) {
      return [match[0], str.replace(spaceRe, '')];
    }
    return null;
  }
  return null;
};
