import { GraphQLModule } from '../GraphQLModule';
import * as faker from 'faker';

describe('GraphQLModule', () => {
  it('should construct', async () => {
    const module = new GraphQLModule(faker.random.word(), {});
    expect(module).toBeInstanceOf(GraphQLModule);
  });
});
