import * as aws from '@pulumi/aws';
import * as pulumi from '@pulumi/pulumi';
import { mergeTypes } from 'merge-graphql-schemas';
import { GraphQLModule } from './GraphQLModule';

export interface GraphQLApiArgs extends aws.appsync.GraphQLApiArgs {
  modules: GraphQLModule[];
}

export class GraphQLApi extends pulumi.ComponentResource {
  /** @internal */
  public static readonly __pulumiType = 'pam:graphqlapi';

  constructor(name: string, args: GraphQLApiArgs, opts: pulumi.ComponentResourceOptions = {}) {
    super('pam:graphqlapi', name, {}, opts);
    const { modules, ...apiArgs } = args;

    /**
     * Merge Schemas from all Modules
     */
    const schema = pulumi
      .all([...modules.map(mod => mod.typeDefs), apiArgs.schema])
      .apply(defs => mergeTypes(defs, { all: true }));

    // Lastly, API with Schema
    // super(name, {
    //   ...apiArgs,
    //   schema,
    // }, opts);

    const api = new aws.appsync.GraphQLApi(
      name,
      {
        ...apiArgs,
        schema,
      },
      {
        ...opts,
        parent: this,
      }
    );

    const resolvers = modules.map(mod =>
      mod.resolvers.map(
        resolver =>
          new aws.appsync.Resolver(
            `${name}-${resolver}`,
            {
              ...resolver.resolver,
              apiId: api.id,
            },
            {
              ...opts,
              parent: this,
            }
          )
      )
    );

    this.registerOutputs({
      api,
      resolvers,
      schema,
    });
  }
}
