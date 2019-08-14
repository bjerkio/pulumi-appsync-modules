import * as pulumi from '@pulumi/pulumi';

/**
 * Input properties used for looking up and filtering Resolver resources.
 */
export interface GraphQLResolverArgs {
  /**
   * The ARN
   */
  readonly arn?: pulumi.Input<string>;
  /**
   * The DataSource name.
   */
  readonly dataSource?: pulumi.Input<string>;
  /**
   * The field name from the schema defined in the GraphQL API.
   */
  readonly field: pulumi.Input<string>;
  /**
   * The resolver type. Valid values are `UNIT` and `PIPELINE`.
   */
  readonly kind?: pulumi.Input<string>;
  /**
   * The PipelineConfig.
   */
  readonly pipelineConfig?: pulumi.Input<{
    functions?: pulumi.Input<pulumi.Input<string>[]>;
  }>;
  /**
   * The request mapping template for UNIT resolver or 'before mapping template' for PIPELINE resolver.
   */
  readonly requestTemplate: pulumi.Input<string>;
  /**
   * The response mapping template for UNIT resolver or 'after mapping template' for PIPELINE resolver.
   */
  readonly responseTemplate: pulumi.Input<string>;
  /**
   * The type name from the schema defined in the GraphQL API.
   */
  readonly type: pulumi.Input<string>;
}
export class GraphQLResolver extends pulumi.ComponentResource {
  resolver: GraphQLResolverArgs;
  /**
   * Create a GraphQLResolver resource with the given unique name, arguments, and options.
   *
   * @param name The _unique_ name of the resource.
   * @param args The arguments to use to populate this resource's properties.
   * @param opts A bag of options that control this resource's behavior.
   */
  constructor(name, args: GraphQLResolverArgs, opts?: pulumi.ComponentResourceOptions) {
    super('pam:graphql-resolver', name, {}, opts);
    this.resolver = args;
    this.registerOutputs(args);
  }
}
