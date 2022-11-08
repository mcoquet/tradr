// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Settings } = initSchema(schema);

export {
  Settings
};