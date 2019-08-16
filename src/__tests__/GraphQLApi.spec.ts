import { GraphQLApi } from '../GraphQLApi';
import * as aws from '@pulumi/aws';
import * as faker from 'faker';
import randomGraphQLApi from '../__fixtures__/randomGraphQLApi';

describe('GraphQLApi', () => {
  it('should construct', () => {
    const api = new GraphQLApi(faker.random.uuid(), {...randomGraphQLApi(), datasources: undefined});
    expect(api).toBeInstanceOf(GraphQLApi);
  });

  it('should construct with schema', () => {
    const api = new GraphQLApi(faker.random.uuid(), {
      ...randomGraphQLApi(),
      datasources: undefined,
      schema: `
      type Test {
        field: String
      }
      `
    });
    expect(api).toBeInstanceOf(GraphQLApi);
  });
  it('should output api, resolvers and datasources properties', () => {
    const fakeItem = randomGraphQLApi();
    const api = new GraphQLApi(faker.random.uuid(), fakeItem);
    expect(api).toHaveProperty('api');
    expect(api).toHaveProperty('resolvers');
    expect(api).toHaveProperty('datasources');
    expect(api.resolvers).toBeTruthy();
  })
});
