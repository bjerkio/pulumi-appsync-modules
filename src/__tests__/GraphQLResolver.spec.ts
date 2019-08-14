import { GraphQLResolver } from '../GraphQLResolver';
import * as faker from 'faker';
import randomGraphQLResolver from '../__fixtures__/randomGraphQLResolver';

describe('GraphQLResolver', () => {
  it('should construct', async () => {
    const resolver = new GraphQLResolver(faker.random.word(), randomGraphQLResolver());
    expect(resolver).toBeInstanceOf(GraphQLResolver);
  });
});
