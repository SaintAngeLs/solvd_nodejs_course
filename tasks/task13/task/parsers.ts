import { factory } from './factory/factory'
import { nullx } from './parsers/null'
import { boolean } from './parsers/boolean'
import { number } from './parsers/number'
import { stringx } from './parsers/string'
import { array } from './parsers/array'
import { object } from './parsers/object'

export const parsers = {
  nullx,
  boolean,
  number,
  stringx,
  array,
  object
}
export const valueParser = factory(parsers)