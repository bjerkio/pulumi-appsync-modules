import * as pulumi from '@pulumi/pulumi';
import { GraphQLResolver } from './GraphQLResolver';
import { mergeTypes } from 'merge-graphql-schemas';

interface GraphQLModuleArgs {
  /**
   * The name of the module.
   */
  name?: pulumi.Input<string>;
  /**
   * A definition of GraphQL type definitions as string.
   * Arrays are also accepted, and they will get merged.
   */
  typeDefs?: pulumi.Input<string | string[]>;
  /**
   * Resolvers object provided by a GraphQLResolver
   */
  resolvers?: pulumi.Input<GraphQLResolver | GraphQLResolver[]>;
}

export class GraphQLModule extends pulumi.ComponentResource {
  module: GraphQLModuleArgs;
  /**
   * Create a GraphQLModule resource with the given unique name, arguments, and options.
   *
   * @param name The _unique_ name of the resource.
   * @param args The arguments to use to populate this resource's properties.
   * @param opts A bag of options that control this resource's behavior.
   */
  constructor(name, args: GraphQLModuleArgs, opts?: pulumi.ComponentResourceOptions) {
    super('GraphQLModule', name, {}, opts);

    if (Array.isArray(args.typeDefs)) {
      args.typeDefs = mergeTypes(args.typeDefs, { all: true });
    }

    this.module = args;
    this.registerOutputs(args);

    // Q: How do we _only_ update the resolvers that have been changed?
    // Inspiration: https://github.com/pulumi/pulumi-aws/blob/master/sdk/nodejs/appsync/graphQLApi.ts
    // Seems like we can check every variable (we need to "key" all providers?)
    // Might be the exported value – ergo, makes no difference if we check or not.
  }
}
