/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTrades = /* GraphQL */ `
  subscription OnCreateTrades(
    $filter: ModelSubscriptionTradesFilterInput
    $owner: String
  ) {
    onCreateTrades(filter: $filter, owner: $owner) {
      id
      token
      sls
      tps
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateTrades = /* GraphQL */ `
  subscription OnUpdateTrades(
    $filter: ModelSubscriptionTradesFilterInput
    $owner: String
  ) {
    onUpdateTrades(filter: $filter, owner: $owner) {
      id
      token
      sls
      tps
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteTrades = /* GraphQL */ `
  subscription OnDeleteTrades(
    $filter: ModelSubscriptionTradesFilterInput
    $owner: String
  ) {
    onDeleteTrades(filter: $filter, owner: $owner) {
      id
      token
      sls
      tps
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onCreateCredentials = /* GraphQL */ `
  subscription OnCreateCredentials(
    $filter: ModelSubscriptionCredentialsFilterInput
    $owner: String
  ) {
    onCreateCredentials(filter: $filter, owner: $owner) {
      id
      apikey
      apisecret
      exchange
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onUpdateCredentials = /* GraphQL */ `
  subscription OnUpdateCredentials(
    $filter: ModelSubscriptionCredentialsFilterInput
    $owner: String
  ) {
    onUpdateCredentials(filter: $filter, owner: $owner) {
      id
      apikey
      apisecret
      exchange
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const onDeleteCredentials = /* GraphQL */ `
  subscription OnDeleteCredentials(
    $filter: ModelSubscriptionCredentialsFilterInput
    $owner: String
  ) {
    onDeleteCredentials(filter: $filter, owner: $owner) {
      id
      apikey
      apisecret
      exchange
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
