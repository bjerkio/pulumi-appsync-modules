[pulumi-appsync-modules](README.md)

# pulumi-appsync-modules

## Index

### Classes

* [GraphQLApi](classes/graphqlapi.md)
* [GraphQLDataSource](classes/graphqldatasource.md)
* [GraphQLModule](classes/graphqlmodule.md)
* [GraphQLResolver](classes/graphqlresolver.md)

### Interfaces

* [GraphQLApiArgs](interfaces/graphqlapiargs.md)
* [GraphQLModuleArgs](interfaces/graphqlmoduleargs.md)
* [GraphQLResolverArgs](interfaces/graphqlresolverargs.md)

### Type aliases

* [GraphQLDataSourceArgs](README.md#graphqldatasourceargs)
* [GraphQLResolverPreArgs](README.md#graphqlresolverpreargs)

## Type aliases

###  GraphQLDataSourceArgs

Ƭ **GraphQLDataSourceArgs**: *Omit‹DataSourceArgs, "apiId"›*

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

___

###  GraphQLResolverPreArgs

Ƭ **GraphQLResolverPreArgs**: *Omit‹ResolverArgs, "apiId"›*
