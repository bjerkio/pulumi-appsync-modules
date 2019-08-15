import { GraphQLApi } from '../GraphQLApi';
import * as aws from '@pulumi/aws';
import * as faker from 'faker';
import randomGraphQLApi from '../__fixtures__/randomGraphQLApi';

describe('GraphQLApi', () => {
  it('should construct', () => {
    const api = new GraphQLApi(faker.random.uuid(), randomGraphQLApi());
    expect(api).toBeInstanceOf(GraphQLApi);
  });
  it('should output api and resolvers properties', () => {
    const fakeItem = randomGraphQLApi();
    const api = new GraphQLApi(faker.random.uuid(), fakeItem);
    expect(api).toHaveProperty('api');
    expect(api).toHaveProperty('resolvers');
    expect(api.resolvers).toBeTruthy();
  })
});
