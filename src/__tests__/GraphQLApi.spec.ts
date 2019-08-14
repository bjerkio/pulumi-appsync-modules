import { GraphQLApi } from '../GraphQLApi';
import * as faker from 'faker';
import randomGraphQLApi from '../__fixtures__/randomGraphQLApi';

describe('GraphQLApi', () => {
  it('should construct', () => {
    const api = new GraphQLApi(faker.random.uuid(), randomGraphQLApi());
    expect(api).toBeInstanceOf(GraphQLApi);
  });
});
