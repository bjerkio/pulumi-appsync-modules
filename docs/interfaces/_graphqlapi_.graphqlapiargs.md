**[Pulumi AppSync Modules](../README.md)**

[Globals](../README.md) › ["GraphQLApi"](../modules/_graphqlapi_.md) › [GraphQLApiArgs](_graphqlapi_.graphqlapiargs.md)

# Interface: GraphQLApiArgs

## Hierarchy

* GraphQLApiArgs

  * **GraphQLApiArgs**

## Properties

###  authenticationType

• **authenticationType**: *pulumi.Input‹string›*

*Inherited from void*

Defined in /Users/cobraz/Repos/pulumi-appsync-modules/node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:253

The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`

___

### `Optional` datasources

• **datasources**? : *[GraphQLDataSource](../classes/_graphqldatasource_.graphqldatasource.md)[]*

*Defined in [GraphQLApi.ts:9](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLApi.ts#L9)*

___

### `Optional` logConfig

• **logConfig**? : *pulumi.Input‹object›*

*Inherited from void*

Defined in /Users/cobraz/Repos/pulumi-appsync-modules/node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:257

Nested argument containing logging configuration. Defined below.

___

###  modules

• **modules**: *[GraphQLModule](../classes/_graphqlmodule_.graphqlmodule.md)[]*

*Defined in [GraphQLApi.ts:8](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLApi.ts#L8)*

___

### `Optional` name

• **name**? : *pulumi.Input‹string›*

*Inherited from void*

Defined in /Users/cobraz/Repos/pulumi-appsync-modules/node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:264

A user-supplied name for the GraphqlApi.

___

### `Optional` openidConnectConfig

• **openidConnectConfig**? : *pulumi.Input‹object›*

*Inherited from void*

Defined in /Users/cobraz/Repos/pulumi-appsync-modules/node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:268

Nested argument containing OpenID Connect configuration. Defined below.

___

### `Optional` schema

• **schema**? : *pulumi.Input‹string›*

*Inherited from void*

Defined in /Users/cobraz/Repos/pulumi-appsync-modules/node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:277

The schema definition, in GraphQL schema language format. This provider cannot perform drift detection of this configuration.

___

### `Optional` tags

• **tags**? : *pulumi.Input‹object›*

*Inherited from void*

Defined in /Users/cobraz/Repos/pulumi-appsync-modules/node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:281

A mapping of tags to assign to the resource.

___

### `Optional` userPoolConfig

• **userPoolConfig**? : *pulumi.Input‹object›*

*Inherited from void*

Defined in /Users/cobraz/Repos/pulumi-appsync-modules/node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:287

The Amazon Cognito User Pool configuration. Defined below.