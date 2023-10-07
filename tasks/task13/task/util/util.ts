import { serializeRe } from '../regex/rgx'

export const serializer = (str : string) : string => {
  return str.replace(serializeRe, '')
}