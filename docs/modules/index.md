[pulumi-appsync-modules](../README.md) / [Exports](../modules.md) / index

# Module: index

## Table of contents

### Classes

- [GraphQLApi](../classes/index.graphqlapi.md)
- [GraphQLDataSource](../classes/index.graphqldatasource.md)
- [GraphQLModule](../classes/index.graphqlmodule.md)
- [GraphQLResolver](../classes/index.graphqlresolver.md)

### Interfaces

- [GraphQLApiArgs](../interfaces/index.graphqlapiargs.md)
- [GraphQLModuleArgs](../interfaces/index.graphqlmoduleargs.md)
- [GraphQLResolverArgs](../interfaces/index.graphqlresolverargs.md)

### Type aliases

- [GraphQLDataSourceArgs](index.md#graphqldatasourceargs)
- [GraphQLResolverPreArgs](index.md#graphqlresolverpreargs)

## Type aliases

### GraphQLDataSourceArgs

Ƭ **GraphQLDataSourceArgs**: *Omit*<aws.appsync.DataSourceArgs, ``"apiId"``\>

Provides an AppSync API Key.

## Example Usage

```typescript
import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const exampleGraphQLApi = new aws.appsync.GraphQLApi("example", {
    authenticationType: "API_KEY",
});
const exampleApiKey = new aws.appsync.ApiKey("example", {
    apiId: exampleGraphQLApi.id,
    expires: "2018-05-03T04:00:00Z",
});
```

> This content is derived from https://github.com/terraform-providers/terraform-provider-aws/blob/master/website/docs/r/appsync_api_key.html.markdown.

Defined in: [src/GraphQLDataSource.ts:28](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLDataSource.ts#L28)

___

### GraphQLResolverPreArgs

Ƭ **GraphQLResolverPreArgs**: *Omit*<aws.appsync.ResolverArgs, ``"apiId"``\>

Defined in: [src/GraphQLResolver.ts:9](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLResolver.ts#L9)
