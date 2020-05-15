/**
 * @ignore
 * @external
 */

import * as faker from 'faker';
import { GraphQLApiArgs } from '../GraphQLApi';
import { GraphQLModule } from '../GraphQLModule';
import randomGraphQLModule from './randomGraphQLModule';
import { GraphQLDataSource } from '../GraphQLDataSource';
import randomGraphQLDataSource from './randomGraphQLDataSource';

export default (): GraphQLApiArgs => ({
  authenticationType: faker.random.arrayElement([
    'API_KEY',
    'AWS_IAM',
    'AMAZON_COGNITO_USER_POOLS',
    'OPENID_CONNECT',
  ]),
  modules: [new GraphQLModule(faker.random.uuid(), randomGraphQLModule())],
  datasources: [new GraphQLDataSource(faker.random.uuid(), randomGraphQLDataSource())]
});
