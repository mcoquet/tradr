/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTrades = /* GraphQL */ `
  query GetTrades($id: ID!) {
    getTrades(id: $id) {
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
export const listTrades = /* GraphQL */ `
  query ListTrades(
    $filter: ModelTradesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTrades(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncTrades = /* GraphQL */ `
  query SyncTrades(
    $filter: ModelTradesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrades(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCredentials = /* GraphQL */ `
  query GetCredentials($id: ID!) {
    getCredentials(id: $id) {
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
export const listCredentials = /* GraphQL */ `
  query ListCredentials(
    $filter: ModelCredentialsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCredentials(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCredentials = /* GraphQL */ `
  query SyncCredentials(
    $filter: ModelCredentialsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCredentials(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
