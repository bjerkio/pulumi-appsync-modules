import { GraphQLApi } from '../GraphQLApi';
import * as faker from 'faker';
import { GraphQLDataSource } from '../GraphQLDataSource';
import randomGraphQLDataSource from '../__fixtures__/randomGraphQLDataSource';

describe('GraphQLDataSource', () => {
  it('should construct', () => {
    const api = new GraphQLDataSource(faker.random.uuid(), randomGraphQLDataSource());
    expect(api).toBeInstanceOf(GraphQLDataSource);
  });
});
