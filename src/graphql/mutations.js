/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
