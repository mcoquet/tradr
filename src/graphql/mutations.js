/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessages = /* GraphQL */ `
  mutation CreateMessages(
    $input: CreateMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    createMessages(input: $input, condition: $condition) {
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
export const updateMessages = /* GraphQL */ `
  mutation UpdateMessages(
    $input: UpdateMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    updateMessages(input: $input, condition: $condition) {
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
export const deleteMessages = /* GraphQL */ `
  mutation DeleteMessages(
    $input: DeleteMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    deleteMessages(input: $input, condition: $condition) {
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
export const createChannels = /* GraphQL */ `
  mutation CreateChannels(
    $input: CreateChannelsInput!
    $condition: ModelChannelsConditionInput
  ) {
    createChannels(input: $input, condition: $condition) {
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
export const updateChannels = /* GraphQL */ `
  mutation UpdateChannels(
    $input: UpdateChannelsInput!
    $condition: ModelChannelsConditionInput
  ) {
    updateChannels(input: $input, condition: $condition) {
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
export const deleteChannels = /* GraphQL */ `
  mutation DeleteChannels(
    $input: DeleteChannelsInput!
    $condition: ModelChannelsConditionInput
  ) {
    deleteChannels(input: $input, condition: $condition) {
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
export const createTrades = /* GraphQL */ `
  mutation CreateTrades(
    $input: CreateTradesInput!
    $condition: ModelTradesConditionInput
  ) {
    createTrades(input: $input, condition: $condition) {
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
export const updateTrades = /* GraphQL */ `
  mutation UpdateTrades(
    $input: UpdateTradesInput!
    $condition: ModelTradesConditionInput
  ) {
    updateTrades(input: $input, condition: $condition) {
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
export const deleteTrades = /* GraphQL */ `
  mutation DeleteTrades(
    $input: DeleteTradesInput!
    $condition: ModelTradesConditionInput
  ) {
    deleteTrades(input: $input, condition: $condition) {
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
export const createCredentials = /* GraphQL */ `
  mutation CreateCredentials(
    $input: CreateCredentialsInput!
    $condition: ModelCredentialsConditionInput
  ) {
    createCredentials(input: $input, condition: $condition) {
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
export const updateCredentials = /* GraphQL */ `
  mutation UpdateCredentials(
    $input: UpdateCredentialsInput!
    $condition: ModelCredentialsConditionInput
  ) {
    updateCredentials(input: $input, condition: $condition) {
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
export const deleteCredentials = /* GraphQL */ `
  mutation DeleteCredentials(
    $input: DeleteCredentialsInput!
    $condition: ModelCredentialsConditionInput
  ) {
    deleteCredentials(input: $input, condition: $condition) {
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
