/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessages = /* GraphQL */ `
  subscription OnCreateMessages($filter: ModelSubscriptionMessagesFilterInput) {
    onCreateMessages(filter: $filter) {
      id
      rawMessage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateMessages = /* GraphQL */ `
  subscription OnUpdateMessages($filter: ModelSubscriptionMessagesFilterInput) {
    onUpdateMessages(filter: $filter) {
      id
      rawMessage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteMessages = /* GraphQL */ `
  subscription OnDeleteMessages($filter: ModelSubscriptionMessagesFilterInput) {
    onDeleteMessages(filter: $filter) {
      id
      rawMessage
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateChannels = /* GraphQL */ `
  subscription OnCreateChannels($filter: ModelSubscriptionChannelsFilterInput) {
    onCreateChannels(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateChannels = /* GraphQL */ `
  subscription OnUpdateChannels($filter: ModelSubscriptionChannelsFilterInput) {
    onUpdateChannels(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteChannels = /* GraphQL */ `
  subscription OnDeleteChannels($filter: ModelSubscriptionChannelsFilterInput) {
    onDeleteChannels(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
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
