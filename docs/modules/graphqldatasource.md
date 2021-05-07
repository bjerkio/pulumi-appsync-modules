[pulumi-appsync-modules](../README.md) / [Exports](../modules.md) / GraphQLDataSource

# Module: GraphQLDataSource

## Table of contents

### Classes

- [GraphQLDataSource](../classes/graphqldatasource.graphqldatasource-1.md)

### Type aliases

- [GraphQLDataSourceArgs](graphqldatasource.md#graphqldatasourceargs)

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
