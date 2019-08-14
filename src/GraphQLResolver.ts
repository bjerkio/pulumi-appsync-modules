import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import { mergeTypes } from 'merge-graphql-schemas';

export type GraphQLResolverPreArgs = Omit<aws.appsync.ResolverArgs, 'apiId'>;
export interface GraphQLResolverArgs extends GraphQLResolverPreArgs {
  /**
   * A definition of GraphQL type definitions as string.
   * Arrays are also accepted, and they will get merged.
   */
  typeDefs?: string | string[];
}
export class GraphQLResolver extends pulumi.ComponentResource {
  resolver: GraphQLResolverArgs;
  typeDefs?: string | string[];
  /**
   * Create a GraphQLResolver resource with the given unique name, arguments, and options.
   *
   * @param name The _unique_ name of the resource.
   * @param args The arguments to use to populate this resource's properties.
   * @param opts A bag of options that control this resource's behavior.
   */
  constructor(name: string, args: GraphQLResolverArgs, opts: pulumi.ComponentResourceOptions = {}) {
    super('pam:graphql-resolver', name, {}, opts);
    const { typeDefs, ...resolver } = args;
    this.resolver = resolver;

    if (Array.isArray(args.typeDefs)) {
      args.typeDefs = mergeTypes(args.typeDefs, { all: true });
    }

    this.typeDefs = args.typeDefs;

    this.registerOutputs();
  }
}
