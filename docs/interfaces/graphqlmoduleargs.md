[pulumi-appsync-modules](../README.md) › [GraphQLModuleArgs](graphqlmoduleargs.md)

# Interface: GraphQLModuleArgs

## Hierarchy

* **GraphQLModuleArgs**

## Index

### Properties

* [datasources](graphqlmoduleargs.md#optional-datasources)
* [resolvers](graphqlmoduleargs.md#optional-resolvers)
* [typeDefs](graphqlmoduleargs.md#optional-typedefs)

## Properties

### `Optional` datasources

• **datasources**? : *[GraphQLDataSource](../classes/graphqldatasource.md) | [GraphQLDataSource](../classes/graphqldatasource.md)[]*

Datasources (GraphQLModules)

___

### `Optional` resolvers

• **resolvers**? : *[GraphQLResolver](../classes/graphqlresolver.md) | [GraphQLResolver](../classes/graphqlresolver.md)[]*

Resolvers object provided by a GraphQLResolver

___

### `Optional` typeDefs

• **typeDefs**? : *string | string[]*

A definition of GraphQL type definitions as string.
Arrays are also accepted, and they will get merged.
