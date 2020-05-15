import * as faker from 'faker';
/**
 * @ignore
 */

import { GraphQLResolverArgs } from '../GraphQLResolver';

export default (): GraphQLResolverArgs => ({
  field: `get${faker.random.word()}`,
  requestTemplate: `{
    "version": "2017-02-28",
    "operation": "GetItem",
    "key": {
        "id": $util.dynamodb.toDynamoDBJson($ctx.args.id),
    }
}`,
  responseTemplate: `$util.toJson($ctx.result)`,
  type: faker.random.arrayElement(['Query', 'Mutation']),
});
