import * as aws from '@pulumi/aws';
import * as pulumi from '@pulumi/pulumi';
// import { mergeTypes } from 'merge-graphql-schemas';

export class GraphQLApi extends pulumi.ComponentResource {
  constructor(name, args, opts?: pulumi.ComponentResourceOptions) {
    super('GraphQLModule', name, {}, opts);
  }
}
