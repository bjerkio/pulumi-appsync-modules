/**
 * @ignore
 */

import * as faker from 'faker';
import { GraphQLModuleArgs } from '../GraphQLModule';
import randomGraphQLResolver from './randomGraphQLResolver';
import { GraphQLResolver } from '../GraphQLResolver';
import * as fs from 'fs';

export default (): GraphQLModuleArgs => ({
  typeDefs: [
    fs.readFileSync(`${__dirname}/client.graphql`, 'utf-8'),
    fs.readFileSync(`${__dirname}/product.graphql`, 'utf-8'),
  ],
  resolvers: [new GraphQLResolver(faker.random.word(), randomGraphQLResolver())],
});
