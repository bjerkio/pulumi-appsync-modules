import { GraphQLResolver } from '../GraphQLResolver';
import * as faker from 'faker';

describe('GraphQLResolver', () => {
  it('should construct', async () => {
    const resolver = new GraphQLResolver(faker.random.word(), {});
    expect(resolver).toBeInstanceOf(GraphQLResolver);
  });
});
