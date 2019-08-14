import { GraphQLModule } from '../GraphQLModule';
import * as faker from 'faker';
import { GraphQLResolver } from '../GraphQLResolver';
import randomGraphQLResolver from '../__fixtures__/randomGraphQLResolver';

describe('GraphQLModule', () => {
  it('should construct', async () => {
    const module = new GraphQLModule(faker.random.word(), {});
    expect(module).toBeInstanceOf(GraphQLModule);
  });
  it('should export resolvers', async () => {
    const resolver = new GraphQLResolver(faker.random.uuid(), randomGraphQLResolver());

    const module = new GraphQLModule(faker.random.uuid(), {
      resolvers: [resolver],
    });

    console.log(module.resolvers);
  });
});
