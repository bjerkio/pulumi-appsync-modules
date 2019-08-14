import { GraphQLResolver } from '../GraphQLResolver';
import * as pulumi from '@pulumi/pulumi';
import * as faker from 'faker';
import randomGraphQLResolver from '../__fixtures__/randomGraphQLResolver';
process.env.PULUMI_TEST_MODE = 'true';

describe('GraphQLResolver', () => {
  it('should construct', async () => {
    const resolver = new GraphQLResolver(faker.random.uuid(), randomGraphQLResolver());
    expect(resolver).toBeInstanceOf(GraphQLResolver);
  });
  it('should construct', async () => {
    const resolver = new GraphQLResolver(faker.random.uuid(), {
      ...randomGraphQLResolver(),
      typeDefs: [
        `type HelloOne {
          test: string
        }`,
        `type HelloTwo {
          test: string
        }`,
      ]
    });
    expect(resolver).toBeInstanceOf(GraphQLResolver);
  });
});
