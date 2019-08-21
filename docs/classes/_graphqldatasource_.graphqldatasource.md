**[Pulumi AppSync Modules](../README.md)**

[Globals](../README.md) › ["GraphQLDataSource"](../modules/_graphqldatasource_.md) › [GraphQLDataSource](_graphqldatasource_.graphqldatasource.md)

# Class: GraphQLDataSource

## Hierarchy

* ComponentResource

  * **GraphQLDataSource**

## Constructors

###  constructor

\+ **new GraphQLDataSource**(`name`: string, `args`: [GraphQLDataSourceArgs](../modules/_graphqldatasource_.md#graphqldatasourceargs), `opts`: ComponentResourceOptions): *[GraphQLDataSource](_graphqldatasource_.graphqldatasource.md)*

*Overrides void*

*Defined in [GraphQLDataSource.ts:29](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLDataSource.ts#L29)*

Create a GraphQLResolver resource with the given unique name, arguments, and options.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`name` | string | - | The _unique_ name of the resource. |
`args` | [GraphQLDataSourceArgs](../modules/_graphqldatasource_.md#graphqldatasourceargs) | - | The arguments to use to populate this resource's properties. |
`opts` | ComponentResourceOptions |  {} | A bag of options that control this resource's behavior.  |

**Returns:** *[GraphQLDataSource](_graphqldatasource_.graphqldatasource.md)*

## Properties

###  datasource

• **datasource**: *[GraphQLDataSourceArgs](../modules/_graphqldatasource_.md#graphqldatasourceargs)*

*Defined in [GraphQLDataSource.ts:29](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLDataSource.ts#L29)*

___

###  name

• **name**: *string*

*Defined in [GraphQLDataSource.ts:28](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLDataSource.ts#L28)*

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