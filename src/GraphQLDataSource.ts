/**
 * @module GraphQLDataSource
 */
import * as pulumi from '@pulumi/pulumi';
import * as aws from '@pulumi/aws';

/**
 * Provides an AppSync API Key.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as aws from "@pulumi/aws";
 *
 * const exampleGraphQLApi = new aws.appsync.GraphQLApi("example", {
 *     authenticationType: "API_KEY",
 * });
 * const exampleApiKey = new aws.appsync.ApiKey("example", {
 *     apiId: exampleGraphQLApi.id,
 *     expires: "2018-05-03T04:00:00Z",
 * });
 * ```
 *
 * > This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/appsync_api_key.html.markdown.
 */

export type GraphQLDataSourceArgs = Omit<aws.appsync.DataSourceArgs, 'apiId'>;

export class GraphQLDataSource extends pulumi.ComponentResource {
  name: string;
  datasource: GraphQLDataSourceArgs;
  /**
   * Create a GraphQLResolver resource with the given unique name, arguments, and options.
   *
   * @param name The _unique_ name of the resource.
   * @param args The arguments to use to populate this resource's properties.
   * @param opts A bag of options that control this resource's behavior.
   */
  constructor(name: string, args: GraphQLDataSourceArgs, opts: pulumi.ComponentResourceOptions = {}) {
    super('pam:graphql-datasource', name, {}, opts);
    this.datasource = args;

    this.name = args.name as string;

    this.registerOutputs();
  }
}
