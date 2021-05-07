[pulumi-appsync-modules](../README.md) / [Exports](../modules.md) / [index](../modules/index.md) / GraphQLModule

# Class: GraphQLModule

[index](../modules/index.md).GraphQLModule

## Hierarchy

- *ComponentResource*

  ↳ **GraphQLModule**

## Table of contents

### Constructors

- [constructor](index.graphqlmodule.md#constructor)

### Properties

- [datasources](index.graphqlmodule.md#datasources)
- [resolvers](index.graphqlmodule.md#resolvers)
- [typeDefs](index.graphqlmodule.md#typedefs)
- [urn](index.graphqlmodule.md#urn)

### Methods

- [getData](index.graphqlmodule.md#getdata)
- [getProvider](index.graphqlmodule.md#getprovider)
- [initialize](index.graphqlmodule.md#initialize)
- [registerOutputs](index.graphqlmodule.md#registeroutputs)
- [isInstance](index.graphqlmodule.md#isinstance)

## Constructors

### constructor

\+ **new GraphQLModule**(`name`: *string*, `args`: [*GraphQLModuleArgs*](../interfaces/graphqlmodule.graphqlmoduleargs.md), `opts?`: ComponentResourceOptions): [*GraphQLModule*](graphqlmodule.graphqlmodule-1.md)

Create a GraphQLModule resource with the given unique name, arguments, and options.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | *string* | The _unique_ name of the resource. |
| `args` | [*GraphQLModuleArgs*](../interfaces/graphqlmodule.graphqlmoduleargs.md) | The arguments to use to populate this resource's properties. |
| `opts` | ComponentResourceOptions | A bag of options that control this resource's behavior. |

**Returns:** [*GraphQLModule*](graphqlmodule.graphqlmodule-1.md)

Defined in: [src/GraphQLModule.ts:31](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLModule.ts#L31)

## Properties

### datasources

• **datasources**: [*GraphQLDataSource*](graphqldatasource.graphqldatasource-1.md)[]

Defined in: [src/GraphQLModule.ts:31](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLModule.ts#L31)

___

### resolvers

• **resolvers**: [*GraphQLResolver*](graphqlresolver.graphqlresolver-1.md)[]

Defined in: [src/GraphQLModule.ts:29](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLModule.ts#L29)

___

### typeDefs

• `Optional` **typeDefs**: *undefined* \| *string*

Defined in: [src/GraphQLModule.ts:27](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLModule.ts#L27)

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
