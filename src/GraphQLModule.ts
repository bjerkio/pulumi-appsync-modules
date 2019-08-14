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
  name: pulumi.Output<string>;

  typeDefs: pulumi.Output<string>;

  resolvers: pulumi.Output<GraphQLResolver[]>;

  /**
   * Create a GraphQLModule resource with the given unique name, arguments, and options.
   *
   * @param name The _unique_ name of the resource.
   * @param args The arguments to use to populate this resource's properties.
   * @param opts A bag of options that control this resource's behavior.
   */
  constructor(name, args: GraphQLModuleArgs, opts?: pulumi.ComponentResourceOptions) {
    super('pam:graphql-module', name, {}, opts);

    // TODO: Fix Input issue here.
    if (Array.isArray(args.typeDefs)) {
      args.typeDefs = mergeTypes(args.typeDefs, { all: true });
    }

    this.name = pulumi.output(args.name);

    this.typeDefs = pulumi.output(args.typeDefs as pulumi.Input<string>);

    this.resolvers = pulumi.output(args.resolvers).apply(resolvers => {
      if(!Array.isArray(resolvers)) return [resolvers];
      return resolvers;
    });

    this.registerOutputs(args);

    // Q: How do we _only_ update the resolvers that have been changed?
    // Inspiration: https://github.com/pulumi/pulumi-aws/blob/master/sdk/nodejs/appsync/graphQLApi.ts
    // Seems like we can check every variable (we need to "key" all providers?)
    // Might be the exported value – ergo, makes no difference if we check or not.
  }
}
