[pulumi-appsync-modules](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / GraphQLApiArgs

# Interface: GraphQLApiArgs

[index](../modules/index.md).GraphQLApiArgs

## Hierarchy

- *GraphQLApiArgs*

  ↳ **GraphQLApiArgs**

## Table of contents

### Properties

- [additionalAuthenticationProviders](index.graphqlapiargs.md#additionalauthenticationproviders)
- [authenticationType](index.graphqlapiargs.md#authenticationtype)
- [datasources](index.graphqlapiargs.md#datasources)
- [logConfig](index.graphqlapiargs.md#logconfig)
- [modules](index.graphqlapiargs.md#modules)
- [name](index.graphqlapiargs.md#name)
- [openidConnectConfig](index.graphqlapiargs.md#openidconnectconfig)
- [schema](index.graphqlapiargs.md#schema)
- [tags](index.graphqlapiargs.md#tags)
- [userPoolConfig](index.graphqlapiargs.md#userpoolconfig)
- [xrayEnabled](index.graphqlapiargs.md#xrayenabled)

## Properties

### additionalAuthenticationProviders

• `Optional` `Readonly` **additionalAuthenticationProviders**: *undefined* \| *Input*<GraphQLApiAdditionalAuthenticationProvider\>[] \| *Promise*<Input<GraphQLApiAdditionalAuthenticationProvider\>[]\> \| *OutputInstance*<Input<GraphQLApiAdditionalAuthenticationProvider\>[]\>

One or more additional authentication providers for the GraphqlApi. Defined below.

Defined in: node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:256

___

### authenticationType

• `Readonly` **authenticationType**: *Input*<string\>

The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`

Defined in: node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:260

___

### datasources

• `Optional` **datasources**: *undefined* \| [*GraphQLDataSource*](../classes/graphqldatasource.graphqldatasource-1.md)[]

Defined in: [src/GraphQLApi.ts:12](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLApi.ts#L12)

___

### logConfig

• `Optional` `Readonly` **logConfig**: *undefined* \| GraphQLApiLogConfig \| *Promise*<GraphQLApiLogConfig\> \| *OutputInstance*<GraphQLApiLogConfig\>

Nested argument containing logging configuration. Defined below.

Defined in: node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:264

___

### modules

• **modules**: [*GraphQLModule*](../classes/graphqlmodule.graphqlmodule-1.md)[]

Defined in: [src/GraphQLApi.ts:11](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLApi.ts#L11)

___

### name

• `Optional` `Readonly` **name**: *undefined* \| *string* \| *Promise*<string\> \| *OutputInstance*<string\>

A user-supplied name for the GraphqlApi.

Defined in: node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:268

___

### openidConnectConfig

• `Optional` `Readonly` **openidConnectConfig**: *undefined* \| GraphQLApiOpenidConnectConfig \| *Promise*<GraphQLApiOpenidConnectConfig\> \| *OutputInstance*<GraphQLApiOpenidConnectConfig\>

Nested argument containing OpenID Connect configuration. Defined below.

Defined in: node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:272

___

### schema

• `Optional` `Readonly` **schema**: *undefined* \| *string* \| *Promise*<string\> \| *OutputInstance*<string\>

The schema definition, in GraphQL schema language format. This provider cannot perform drift detection of this configuration.

Defined in: node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:276

___

### tags

• `Optional` `Readonly` **tags**: *undefined* \| { [key: string]: *pulumi.Input*<string\>;  } \| *Promise*<{ [key: string]: *pulumi.Input*<string\>;  }\> \| *OutputInstance*<{ [key: string]: *pulumi.Input*<string\>;  }\>

A map of tags to assign to the resource.

Defined in: node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:280

___

### userPoolConfig

• `Optional` `Readonly` **userPoolConfig**: *undefined* \| GraphQLApiUserPoolConfig \| *Promise*<GraphQLApiUserPoolConfig\> \| *OutputInstance*<GraphQLApiUserPoolConfig\>

The Amazon Cognito User Pool configuration. Defined below.

Defined in: node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:286

___

### xrayEnabled

• `Optional` `Readonly` **xrayEnabled**: *undefined* \| *boolean* \| *Promise*<boolean\> \| *OutputInstance*<boolean\>

Whether tracing with X-ray is enabled. Defaults to false.

Defined in: node_modules/@pulumi/aws/appsync/graphQLApi.d.ts:290
