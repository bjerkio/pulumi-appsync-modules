import * as faker from 'faker';
import { GraphQLDataSourceArgs } from '../GraphQLDataSource';
export default (): GraphQLDataSourceArgs => ({
  name: faker.random.uuid(),
  type: 'NONE'
});
