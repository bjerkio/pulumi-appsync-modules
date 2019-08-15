import * as pulumi from '@pulumi/pulumi';
import { GraphQLResolver } from './GraphQLResolver';
import mergeDefs from './lib/mergeDefs';
import { GraphQLDataSource } from './GraphQLDataSource';

export interface GraphQLModuleArgs {
  /**
   * A definition of GraphQL type definitions as string.
   * Arrays are also accepted, and they will get merged.
   */
  typeDefs?: string | string[];
  /**
   * Resolvers object provided by a GraphQLResolver
   */
  resolvers?: GraphQLResolver | GraphQLResolver[];
  /**
   * Datasources (GraphQLModules)
   */
  datasources?: GraphQLDataSource | GraphQLDataSource[];
}

export class GraphQLModule extends pulumi.ComponentResource {
  typeDefs?: string;

  resolvers: GraphQLResolver[];

  datasources: GraphQLDataSource[];

  /**
   * Create a GraphQLModule resource with the given unique name, arguments, and options.
   *
   * @param name The _unique_ name of the resource.
   * @param args The arguments to use to populate this resource's properties.
   * @param opts A bag of options that control this resource's behavior.
   */
  constructor(name: string, args: GraphQLModuleArgs, opts: pulumi.ComponentResourceOptions = {}) {
    super('pam:graphql-module', name, {}, opts);

    if (args.resolvers) {
      if (!Array.isArray(args.resolvers)) {
        this.resolvers = [(args.resolvers as GraphQLResolver)];
      } else {
        this.resolvers = args.resolvers as GraphQLResolver[];
      }
    } else this.resolvers = [];

    if (args.datasources) {
      if (args.datasources && !Array.isArray(args.datasources)) {
        this.datasources = [args.datasources as GraphQLDataSource];
      } else {
        this.datasources = args.datasources as GraphQLDataSource[];
      }
    } else this.datasources = [];

    let typeDefs: string[] = [];

    if (args.typeDefs) {
      if (Array.isArray(args.typeDefs)) {
        typeDefs = typeDefs.concat(args.typeDefs);
      } else typeDefs = [args.typeDefs];
    }

    if (this.resolvers.length > 0) {
      typeDefs = typeDefs.concat(
        this.resolvers
          .filter(resolver => resolver.typeDefs)
          .map(resolver => resolver.typeDefs!)
      );
    }

    if (typeDefs.length > 0) {
      this.typeDefs = mergeDefs(typeDefs);
    }

    this.registerOutputs();
  }
}
