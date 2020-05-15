import { mergeTypeDefs } from '@graphql-toolkit/schema-merging';
import { print } from 'graphql/language/printer';
/**
 * @hidden
 */
export default (defs: string | string[]): string => {
  if(!Array.isArray(defs)) defs = [defs];
  return print(mergeTypeDefs(defs));
}
