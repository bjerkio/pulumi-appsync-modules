**[Pulumi AppSync Modules](../README.md)**

[Globals](../README.md) › ["GraphQLModule"](../modules/_graphqlmodule_.md) › [GraphQLModuleArgs](_graphqlmodule_.graphqlmoduleargs.md)

# Interface: GraphQLModuleArgs

## Hierarchy

* **GraphQLModuleArgs**

## Properties

### `Optional` datasources

• **datasources**? : *[GraphQLDataSource](../classes/_graphqldatasource_.graphqldatasource.md) | [GraphQLDataSource](../classes/_graphqldatasource_.graphqldatasource.md)[]*

*Defined in [GraphQLModule.ts:19](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLModule.ts#L19)*

Datasources (GraphQLModules)

___

### `Optional` resolvers

• **resolvers**? : *[GraphQLResolver](../classes/_graphqlresolver_.graphqlresolver.md) | [GraphQLResolver](../classes/_graphqlresolver_.graphqlresolver.md)[]*

*Defined in [GraphQLModule.ts:15](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLModule.ts#L15)*

Resolvers object provided by a GraphQLResolver

___

### `Optional` typeDefs

• **typeDefs**? : *string | string[]*

*Defined in [GraphQLModule.ts:11](https://github.com/Bjerkio/pulumi-appsync-modules/blob/5648fe6/src/GraphQLModule.ts#L11)*

A definition of GraphQL type definitions as string.
Arrays are also accepted, and they will get merged.