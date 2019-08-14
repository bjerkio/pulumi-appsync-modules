import { mergeTypeDefs } from 'graphql-toolkit';
import { print } from 'graphql/language/printer';

export default (defs: string | string[]): string => {
  if(!Array.isArray(defs)) defs = [defs];
  return print(mergeTypeDefs(defs));
}
