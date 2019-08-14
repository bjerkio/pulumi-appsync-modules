import * as pulumi from '@pulumi/pulumi';
import { GraphQLResolver } from './GraphQLResolver';
import { mergeTypes } from 'merge-graphql-schemas';

export interface GraphQLModuleArgs {
  /**
   * A definition of GraphQL type definitions as string.
   * Arrays are also accepted, and they will get merged.
   */
  typeDefs?: string | string[];
  /**
   * Resolvers object provided by a GraphQLResolver
   */
  resolvers?: GraphQLResolver| GraphQLResolver[];
}

export class GraphQLModule extends pulumi.ComponentResource {

  typeDefs: string;

  resolvers: GraphQLResolver[];

  /**
   * Create a GraphQLModule resource with the given unique name, arguments, and options.
   *
   * @param name The _unique_ name of the resource.
   * @param args The arguments to use to populate this resource's properties.
   * @param opts A bag of options that control this resource's behavior.
   */
  constructor(name: string, args: GraphQLModuleArgs, opts: pulumi.ComponentResourceOptions = {}) {
    super('pam:graphql-module', name, {}, opts);

    // TODO: Fix Input issue here.
    if (Array.isArray(args.typeDefs)) {
      args.typeDefs = mergeTypes(args.typeDefs, { all: true });
    }

    this.typeDefs = args.typeDefs as string;

    if(!Array.isArray(args.resolvers) && args.resolvers) this.resolvers = [args.resolvers];
    this.resolvers = args.resolvers as GraphQLResolver[];

    this.registerOutputs();
  }
}
