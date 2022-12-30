import * as Amplify from 'aws-amplify';
import { DataStore, Predicates } from '@aws-amplify/datastore';
import { Credential } from './models';

Amplify.configure(awsconfig);

export async function storeCredentials(key, apiKey, apiSecret) {
  // Store the API key and secret in the database
  await DataStore.save(
    new Credential({
      key,
      apiKey,
      apiSecret,
    })
  );
}

export async function getCredentials(key) {
  // Retrieve the API key and secret from the database
  const credential = await DataStore.query(Credential, Predicates.eq('key', key));
  return credential;
}
