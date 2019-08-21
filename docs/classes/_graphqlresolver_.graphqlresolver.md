**[Pulumi AppSync Modules](../README.md)**

[Globals](../README.md) › ["GraphQLResolver"](../modules/_graphqlresolver_.md) › [GraphQLResolver](_graphqlresolver_.graphqlresolver.md)

# Class: GraphQLResolver

## Hierarchy

* ComponentResource

  * **GraphQLResolver**

## Constructors

###  constructor

\+ **new GraphQLResolver**(`name`: string, `args`: [GraphQLResolverArgs](../interfaces/_graphqlresolver_.graphqlresolverargs.md), `opts`: ComponentResourceOptions): *[GraphQLResolver](_graphqlresolver_.graphqlresolver.md)*

*Overrides void*

*Defined in [GraphQLResolver.ts:16](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLResolver.ts#L16)*

Create a GraphQLResolver resource with the given unique name, arguments, and options.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`name` | string | - | The _unique_ name of the resource. |
`args` | [GraphQLResolverArgs](../interfaces/_graphqlresolver_.graphqlresolverargs.md) | - | The arguments to use to populate this resource's properties. |
`opts` | ComponentResourceOptions |  {} | A bag of options that control this resource's behavior.  |

**Returns:** *[GraphQLResolver](_graphqlresolver_.graphqlresolver.md)*

## Properties

###  name

• **name**: *string*

*Defined in [GraphQLResolver.ts:14](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLResolver.ts#L14)*

___

###  resolver

• **resolver**: *[GraphQLResolverArgs](../interfaces/_graphqlresolver_.graphqlresolverargs.md)*

*Defined in [GraphQLResolver.ts:15](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLResolver.ts#L15)*

___

### `Optional` typeDefs

• **typeDefs**? : *undefined | string*

*Defined in [GraphQLResolver.ts:16](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLResolver.ts#L16)*

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