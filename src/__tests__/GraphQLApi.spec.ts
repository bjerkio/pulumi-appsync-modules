import { GraphQLApi } from '../GraphQLApi';
import * as faker from 'faker';
describe('GraphQLApi', () => {
  it('should construct', () => {
    const api = new GraphQLApi(faker.random.word(), {});
    expect(api).toBeInstanceOf(GraphQLApi);
  });
});
