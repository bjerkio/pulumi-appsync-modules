**[Pulumi AppSync Modules](../README.md)**

[Globals](../README.md) › ["GraphQLModule"](../modules/_graphqlmodule_.md) › [GraphQLModule](_graphqlmodule_.graphqlmodule.md)

# Class: GraphQLModule

## Hierarchy

* ComponentResource

  * **GraphQLModule**

## Constructors

###  constructor

\+ **new GraphQLModule**(`name`: string, `args`: [GraphQLModuleArgs](../interfaces/_graphqlmodule_.graphqlmoduleargs.md), `opts`: ComponentResourceOptions): *[GraphQLModule](_graphqlmodule_.graphqlmodule.md)*

*Overrides void*

*Defined in [GraphQLModule.ts:27](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLModule.ts#L27)*

Create a GraphQLModule resource with the given unique name, arguments, and options.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`name` | string | - | The _unique_ name of the resource. |
`args` | [GraphQLModuleArgs](../interfaces/_graphqlmodule_.graphqlmoduleargs.md) | - | The arguments to use to populate this resource's properties. |
`opts` | ComponentResourceOptions |  {} | A bag of options that control this resource's behavior.  |

**Returns:** *[GraphQLModule](_graphqlmodule_.graphqlmodule.md)*

## Properties

###  datasources

• **datasources**: *[GraphQLDataSource](_graphqldatasource_.graphqldatasource.md)[]*

*Defined in [GraphQLModule.ts:27](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLModule.ts#L27)*

___

###  resolvers

• **resolvers**: *[GraphQLResolver](_graphqlresolver_.graphqlresolver.md)[]*

*Defined in [GraphQLModule.ts:25](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLModule.ts#L25)*

___

### `Optional` typeDefs

• **typeDefs**? : *undefined | string*

*Defined in [GraphQLModule.ts:23](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLModule.ts#L23)*

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