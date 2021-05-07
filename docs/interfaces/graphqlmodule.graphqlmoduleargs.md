[pulumi-appsync-modules](../README.md) / [Exports](../modules.md) / [GraphQLModule](../modules/graphqlmodule.md) / GraphQLModuleArgs

# Interface: GraphQLModuleArgs

[GraphQLModule](../modules/graphqlmodule.md).GraphQLModuleArgs

## Table of contents

### Properties

- [datasources](graphqlmodule.graphqlmoduleargs.md#datasources)
- [resolvers](graphqlmodule.graphqlmoduleargs.md#resolvers)
- [typeDefs](graphqlmodule.graphqlmoduleargs.md#typedefs)

## Properties

### datasources

• `Optional` **datasources**: *undefined* \| [*GraphQLDataSource*](../classes/graphqldatasource.graphqldatasource-1.md) \| [*GraphQLDataSource*](../classes/graphqldatasource.graphqldatasource-1.md)[]

Datasources (GraphQLModules)

Defined in: [src/GraphQLModule.ts:23](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLModule.ts#L23)

___

### resolvers

• `Optional` **resolvers**: *undefined* \| [*GraphQLResolver*](../classes/graphqlresolver.graphqlresolver-1.md) \| [*GraphQLResolver*](../classes/graphqlresolver.graphqlresolver-1.md)[]

Resolvers object provided by a GraphQLResolver

Defined in: [src/GraphQLModule.ts:19](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLModule.ts#L19)

___

### typeDefs

• `Optional` **typeDefs**: *undefined* \| *string* \| *string*[]

A definition of GraphQL type definitions as string.
Arrays are also accepted, and they will get merged.

Defined in: [src/GraphQLModule.ts:15](https://github.com/bjerkio/pulumi-appsync-modules/blob/2a7a038/src/GraphQLModule.ts#L15)
