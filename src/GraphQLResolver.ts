import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';
import mergeDefs from './lib/mergeDefs';

export type GraphQLResolverPreArgs = Omit<aws.appsync.ResolverArgs, 'apiId'>;
export interface GraphQLResolverArgs extends GraphQLResolverPreArgs {
  /**
   * A definition of GraphQL type definitions as string.
   * Arrays are also accepted, and they will get merged.
   */
  typeDefs?: string | string[];
}
export class GraphQLResolver extends pulumi.ComponentResource {
  name: string;
  resolver: GraphQLResolverArgs;
  typeDefs?: string;
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

    this.name = name;

    if (Array.isArray(args.typeDefs)) {
      args.typeDefs = mergeDefs(args.typeDefs);
    }

    this.typeDefs = args.typeDefs;

    this.registerOutputs();
  }
}
