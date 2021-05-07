[pulumi-appsync-modules](../README.md) / [Exports](../modules.md) / [GraphQLResolver](../modules/graphqlresolver.md) / GraphQLResolverArgs

# Interface: GraphQLResolverArgs

[GraphQLResolver](../modules/graphqlresolver.md).GraphQLResolverArgs

## Hierarchy

- [*GraphQLResolverPreArgs*](../modules/graphqlresolver.md#graphqlresolverpreargs)

  ↳ **GraphQLResolverArgs**

## Table of contents

### Properties

- [cachingConfig](graphqlresolver.graphqlresolverargs.md#cachingconfig)
- [dataSource](graphqlresolver.graphqlresolverargs.md#datasource)
- [field](graphqlresolver.graphqlresolverargs.md#field)
- [kind](graphqlresolver.graphqlresolverargs.md#kind)
- [pipelineConfig](graphqlresolver.graphqlresolverargs.md#pipelineconfig)
- [requestTemplate](graphqlresolver.graphqlresolverargs.md#requesttemplate)
- [responseTemplate](graphqlresolver.graphqlresolverargs.md#responsetemplate)
- [type](graphqlresolver.graphqlresolverargs.md#type)
- [typeDefs](graphqlresolver.graphqlresolverargs.md#typedefs)

## Properties

### cachingConfig

• `Optional` `Readonly` **cachingConfig**: *undefined* \| ResolverCachingConfig \| *Promise*<ResolverCachingConfig\> \| *OutputInstance*<ResolverCachingConfig\>

The CachingConfig.

Defined in: node_modules/@pulumi/aws/appsync/resolver.d.ts:217

___

### dataSource

• `Optional` `Readonly` **dataSource**: *undefined* \| *string* \| *Promise*<string\> \| *OutputInstance*<string\>

The DataSource name.

Defined in: node_modules/@pulumi/aws/appsync/resolver.d.ts:221

___

### field

• `Readonly` **field**: *Input*<string\>

The field name from the schema defined in the GraphQL API.

Defined in: node_modules/@pulumi/aws/appsync/resolver.d.ts:225

___

### kind

• `Optional` `Readonly` **kind**: *undefined* \| *string* \| *Promise*<string\> \| *OutputInstance*<string\>

The resolver type. Valid values are `UNIT` and `PIPELINE`.

Defined in: node_modules/@pulumi/aws/appsync/resolver.d.ts:229

___

### pipelineConfig

• `Optional` `Readonly` **pipelineConfig**: *undefined* \| ResolverPipelineConfig \| *Promise*<ResolverPipelineConfig\> \| *OutputInstance*<ResolverPipelineConfig\>

The PipelineConfig.

Defined in: node_modules/@pulumi/aws/appsync/resolver.d.ts:233

___

### requestTemplate

• `Readonly` **requestTemplate**: *Input*<string\>

The request mapping template for UNIT resolver or 'before mapping template' for PIPELINE resolver.

Defined in: node_modules/@pulumi/aws/appsync/resolver.d.ts:237

___

### responseTemplate

• `Readonly` **responseTemplate**: *Input*<string\>

The response mapping template for UNIT resolver or 'after mapping template' for PIPELINE resolver.

Defined in: node_modules/@pulumi/aws/appsync/resolver.d.ts:241

___

### type

• `Readonly` **type**: *Input*<string\>

The type name from the schema defined in the GraphQL API.

Defined in: node_modules/@pulumi/aws/appsync/resolver.d.ts:245

___

### typeDefs

• `Optional` **typeDefs**: *undefined* \| *string* \| *string*[]

A definition of GraphQL type definitions as string.
Arrays are also accepted, and they will get merged.

Defined in: [src/GraphQLResolver.ts:16](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLResolver.ts#L16)
