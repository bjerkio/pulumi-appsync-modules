[pulumi-appsync-modules](../README.md) › [GraphQLApiArgs](graphqlapiargs.md)

# Interface: GraphQLApiArgs

## Hierarchy

* GraphQLApiArgs

  ↳ **GraphQLApiArgs**

## Index

### Properties

* [additionalAuthenticationProviders](graphqlapiargs.md#optional-readonly-additionalauthenticationproviders)
* [authenticationType](graphqlapiargs.md#readonly-authenticationtype)
* [datasources](graphqlapiargs.md#optional-datasources)
* [logConfig](graphqlapiargs.md#optional-readonly-logconfig)
* [modules](graphqlapiargs.md#modules)
* [name](graphqlapiargs.md#optional-readonly-name)
* [openidConnectConfig](graphqlapiargs.md#optional-readonly-openidconnectconfig)
* [schema](graphqlapiargs.md#optional-readonly-schema)
* [tags](graphqlapiargs.md#optional-readonly-tags)
* [userPoolConfig](graphqlapiargs.md#optional-readonly-userpoolconfig)
* [xrayEnabled](graphqlapiargs.md#optional-readonly-xrayenabled)

## Properties

### `Optional` `Readonly` additionalAuthenticationProviders

• **additionalAuthenticationProviders**? : *pulumi.Input‹pulumi.Input‹GraphQLApiAdditionalAuthenticationProvider›[]›*

*Inherited from [GraphQLApiArgs](graphqlapiargs.md).[additionalAuthenticationProviders](graphqlapiargs.md#optional-readonly-additionalauthenticationproviders)*

One or more additional authentication providers for the GraphqlApi. Defined below.

___

### `Readonly` authenticationType

• **authenticationType**: *pulumi.Input‹string›*

*Inherited from [GraphQLApiArgs](graphqlapiargs.md).[authenticationType](graphqlapiargs.md#readonly-authenticationtype)*

The authentication type. Valid values: `API_KEY`, `AWS_IAM`, `AMAZON_COGNITO_USER_POOLS`, `OPENID_CONNECT`

___

### `Optional` datasources

• **datasources**? : *[GraphQLDataSource](../classes/graphqldatasource.md)[]*

___

### `Optional` `Readonly` logConfig

• **logConfig**? : *pulumi.Input‹GraphQLApiLogConfig›*

*Inherited from [GraphQLApiArgs](graphqlapiargs.md).[logConfig](graphqlapiargs.md#optional-readonly-logconfig)*

Nested argument containing logging configuration. Defined below.

___

###  modules

• **modules**: *[GraphQLModule](../classes/graphqlmodule.md)[]*

___

### `Optional` `Readonly` name

• **name**? : *pulumi.Input‹string›*

*Inherited from [GraphQLApiArgs](graphqlapiargs.md).[name](graphqlapiargs.md#optional-readonly-name)*

A user-supplied name for the GraphqlApi.

___

### `Optional` `Readonly` openidConnectConfig

• **openidConnectConfig**? : *pulumi.Input‹GraphQLApiOpenidConnectConfig›*

*Inherited from [GraphQLApiArgs](graphqlapiargs.md).[openidConnectConfig](graphqlapiargs.md#optional-readonly-openidconnectconfig)*

Nested argument containing OpenID Connect configuration. Defined below.

___

### `Optional` `Readonly` schema

• **schema**? : *pulumi.Input‹string›*

*Inherited from [GraphQLApiArgs](graphqlapiargs.md).[schema](graphqlapiargs.md#optional-readonly-schema)*

The schema definition, in GraphQL schema language format. This provider cannot perform drift detection of this configuration.

___

### `Optional` `Readonly` tags

• **tags**? : *pulumi.Input‹object›*

*Inherited from [GraphQLApiArgs](graphqlapiargs.md).[tags](graphqlapiargs.md#optional-readonly-tags)*

A map of tags to assign to the resource.

___

### `Optional` `Readonly` userPoolConfig

• **userPoolConfig**? : *pulumi.Input‹GraphQLApiUserPoolConfig›*

*Inherited from [GraphQLApiArgs](graphqlapiargs.md).[userPoolConfig](graphqlapiargs.md#optional-readonly-userpoolconfig)*

The Amazon Cognito User Pool configuration. Defined below.

___

### `Optional` `Readonly` xrayEnabled

• **xrayEnabled**? : *pulumi.Input‹boolean›*

*Inherited from [GraphQLApiArgs](graphqlapiargs.md).[xrayEnabled](graphqlapiargs.md#optional-readonly-xrayenabled)*

Whether tracing with X-ray is enabled. Defaults to false.
