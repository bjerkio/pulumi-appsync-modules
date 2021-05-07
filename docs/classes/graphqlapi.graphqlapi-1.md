[pulumi-appsync-modules](../README.md) / [Exports](../modules.md) / [GraphQLApi](../modules/graphqlapi.md) / GraphQLApi

# Class: GraphQLApi

[GraphQLApi](../modules/graphqlapi.md).GraphQLApi

## Hierarchy

- *ComponentResource*

  ↳ **GraphQLApi**

## Table of contents

### Constructors

- [constructor](graphqlapi.graphqlapi-1.md#constructor)

### Properties

- [api](graphqlapi.graphqlapi-1.md#api)
- [datasources](graphqlapi.graphqlapi-1.md#datasources)
- [resolvers](graphqlapi.graphqlapi-1.md#resolvers)
- [schema](graphqlapi.graphqlapi-1.md#schema)
- [urn](graphqlapi.graphqlapi-1.md#urn)

### Methods

- [getData](graphqlapi.graphqlapi-1.md#getdata)
- [getProvider](graphqlapi.graphqlapi-1.md#getprovider)
- [initialize](graphqlapi.graphqlapi-1.md#initialize)
- [registerOutputs](graphqlapi.graphqlapi-1.md#registeroutputs)
- [isInstance](graphqlapi.graphqlapi-1.md#isinstance)

## Constructors

### constructor

\+ **new GraphQLApi**(`name`: *string*, `args`: [*GraphQLApiArgs*](../interfaces/graphqlapi.graphqlapiargs.md), `opts?`: ComponentResourceOptions): [*GraphQLApi*](graphqlapi.graphqlapi-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |
| `args` | [*GraphQLApiArgs*](../interfaces/graphqlapi.graphqlapiargs.md) |
| `opts` | ComponentResourceOptions |

**Returns:** [*GraphQLApi*](graphqlapi.graphqlapi-1.md)

Defined in: [src/GraphQLApi.ts:22](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLApi.ts#L22)

## Properties

### api

• **api**: *GraphQLApi*

Defined in: [src/GraphQLApi.ts:16](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLApi.ts#L16)

___

### datasources

• **datasources**: *DataSource*[]

Defined in: [src/GraphQLApi.ts:20](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLApi.ts#L20)

___

### resolvers

• **resolvers**: *Resolver*[]

Defined in: [src/GraphQLApi.ts:18](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLApi.ts#L18)

___

### schema

• **schema**: *string*

Defined in: [src/GraphQLApi.ts:22](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLApi.ts#L22)

___

### urn

• `Readonly` **urn**: *Output*<string\>

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:17

## Methods

### getData

▸ `Protected` **getData**(): *Promise*<any\>

Retrieves the data produces by [initialize].  The data is immediately available in a
derived class's constructor after the `super(...)` call to `ComponentResource`.

**Returns:** *Promise*<any\>

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:347

___

### getProvider

▸ **getProvider**(`moduleMember`: *string*): *undefined* \| *ProviderResource*

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleMember` | *string* |

**Returns:** *undefined* \| *ProviderResource*

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:19

___

### initialize

▸ `Protected` **initialize**(`args`: *Record*<string, any\>): *Promise*<any\>

Can be overridden by a subclass to asynchronously initialize data for this Component
automatically when constructed.  The data will be available immediately for subclass
constructors to use.  To access the data use `.getData`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | *Record*<string, any\> |

**Returns:** *Promise*<any\>

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:342

___

### registerOutputs

▸ `Protected` **registerOutputs**(`outputs?`: *Record*<string, any\> \| *Promise*<Record<string, any\>\> \| *Output*<Record<string, any\>\>): *void*

registerOutputs registers synthetic outputs that a component has initialized, usually by
allocating other child sub-resources and propagating their resulting property values.

ComponentResources can call this at the end of their constructor to indicate that they are
done creating child resources.  This is not strictly necessary as this will automatically be
called after the `initialize` method completes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `outputs?` | *Record*<string, any\> \| *Promise*<Record<string, any\>\> \| *Output*<Record<string, any\>\> |

**Returns:** *void*

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:356

___

### isInstance

▸ `Static` **isInstance**(`obj`: *any*): obj is ComponentResource<any\>

Returns true if the given object is an instance of CustomResource.  This is designed to work even when
multiple copies of the Pulumi SDK have been loaded into the same process.

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | *any* |

**Returns:** obj is ComponentResource<any\>

Defined in: node_modules/@pulumi/pulumi/resource.d.ts:322
