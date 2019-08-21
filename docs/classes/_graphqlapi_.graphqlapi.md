**[Pulumi AppSync Modules](../README.md)**

[Globals](../README.md) › ["GraphQLApi"](../modules/_graphqlapi_.md) › [GraphQLApi](_graphqlapi_.graphqlapi.md)

# Class: GraphQLApi

## Hierarchy

* ComponentResource

  * **GraphQLApi**

## Constructors

###  constructor

\+ **new GraphQLApi**(`name`: string, `args`: [GraphQLApiArgs](../interfaces/_graphqlapi_.graphqlapiargs.md), `opts`: ComponentResourceOptions): *[GraphQLApi](_graphqlapi_.graphqlapi.md)*

*Overrides void*

*Defined in [GraphQLApi.ts:19](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLApi.ts#L19)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`name` | string | - |
`args` | [GraphQLApiArgs](../interfaces/_graphqlapi_.graphqlapiargs.md) | - |
`opts` | ComponentResourceOptions |  {} |

**Returns:** *[GraphQLApi](_graphqlapi_.graphqlapi.md)*

## Properties

###  api

• **api**: *GraphQLApi*

*Defined in [GraphQLApi.ts:13](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLApi.ts#L13)*

___

###  datasources

• **datasources**: *DataSource[]*

*Defined in [GraphQLApi.ts:17](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLApi.ts#L17)*

___

###  resolvers

• **resolvers**: *Resolver[]*

*Defined in [GraphQLApi.ts:15](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLApi.ts#L15)*

___

###  schema

• **schema**: *string*

*Defined in [GraphQLApi.ts:19](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLApi.ts#L19)*

___

###  urn

• **urn**: *Output‹URN›*

*Inherited from void*

Defined in /Users/cobraz/Repos/pulumi-appsync-modules/node_modules/@pulumi/pulumi/resource.d.ts:17

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.

## Methods

###  getProvider

▸ **getProvider**(`moduleMember`: string): *ProviderResource | undefined*

*Inherited from void*

Defined in /Users/cobraz/Repos/pulumi-appsync-modules/node_modules/@pulumi/pulumi/resource.d.ts:19

**Parameters:**

Name | Type |
------ | ------ |
`moduleMember` | string |

**Returns:** *ProviderResource | undefined*

___

### `Protected` registerOutputs

▸ **registerOutputs**(`outputs?`: Inputs | Promise‹Inputs› | Output‹Inputs›): *void*

*Inherited from void*

Defined in /Users/cobraz/Repos/pulumi-appsync-modules/node_modules/@pulumi/pulumi/resource.d.ts:273

**Parameters:**

Name | Type |
------ | ------ |
`outputs?` | Inputs \| Promise‹Inputs› \| Output‹Inputs› |

**Returns:** *void*

___

### `Static` isInstance

▸ **isInstance**(`obj`: any): *boolean*

*Inherited from void*

*Overrides void*

Defined in /Users/cobraz/Repos/pulumi-appsync-modules/node_modules/@pulumi/pulumi/resource.d.ts:258

Returns true if the given object is an instance of CustomResource.  This is designed to work even when
multiple copies of the Pulumi SDK have been loaded into the same process.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *boolean*