// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Exchanges = {
  "KUCOIN": "KUCOIN",
  "BINANCE": "BINANCE",
  "BITGET": "BITGET"
};

const { Messages, Channels, Trades, Credentials } = initSchema(schema);

export {
  Messages,
  Channels,
  Trades,
  Credentials,
  Exchanges
};