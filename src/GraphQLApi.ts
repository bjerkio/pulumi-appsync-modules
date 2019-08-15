import * as aws from '@pulumi/aws';
import * as pulumi from '@pulumi/pulumi';
import { GraphQLModule } from './GraphQLModule';
import mergeDefs from './lib/mergeDefs';

export interface GraphQLApiArgs extends aws.appsync.GraphQLApiArgs {
  modules: GraphQLModule[];
}

export class GraphQLApi extends pulumi.ComponentResource {
  api: aws.appsync.GraphQLApi;

  resolvers: aws.appsync.Resolver[];

  schema: string;

  constructor(name: string, args: GraphQLApiArgs, opts: pulumi.ComponentResourceOptions = {}) {
    super('pam:graphqlapi', name, {}, opts);
    const { modules, ...apiArgs } = args;

    /**
     * Merge Schemas from all Modules
     */
    const schema = mergeDefs(
      modules.filter(mod => mod.typeDefs).map(mod => mod.typeDefs as string)
    );
    this.schema = schema;

    /**
     * Construct our API
     */
    this.api = new aws.appsync.GraphQLApi(
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
    
    this.resolvers = modules.map(mod => mod.resolvers.map(
        resolver =>
          new aws.appsync.Resolver(
            `${name}-${resolver}`,
            {
              ...resolver.resolver,
              apiId: this.api.id,
            },
            {
              ...opts,
              parent: this,
            }
          )
      )).reduce((acc, val) => acc.concat(val), []);

    this.registerOutputs();
  }
}
