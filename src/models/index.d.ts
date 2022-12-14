import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Exchanges {
  KUCOIN = "KUCOIN",
  BINANCE = "BINANCE",
  BITGET = "BITGET"
}

type MessagesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ChannelsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}



type CredentialsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerMessages = {
  readonly id: string;
  readonly rawMessage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMessages = {
  readonly id: string;
  readonly rawMessage?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Messages = LazyLoading extends LazyLoadingDisabled ? EagerMessages : LazyMessages

export declare const Messages: (new (init: ModelInit<Messages, MessagesMetaData>) => Messages) & {
  copyOf(source: Messages, mutator: (draft: MutableModel<Messages, MessagesMetaData>) => MutableModel<Messages, MessagesMetaData> | void): Messages;
}

type EagerChannels = {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyChannels = {
  readonly id: string;
  readonly name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Channels = LazyLoading extends LazyLoadingDisabled ? EagerChannels : LazyChannels

export declare const Channels: (new (init: ModelInit<Channels, ChannelsMetaData>) => Channels) & {
  copyOf(source: Channels, mutator: (draft: MutableModel<Channels, ChannelsMetaData>) => MutableModel<Channels, ChannelsMetaData> | void): Channels;
}

type EagerTrades = {
  readonly id: string;
  readonly token?: string | null;
  readonly sls: (string | null)[];
  readonly tps: string[];
  readonly createdAt: number;
  readonly updatedAt?: number | null;
}

type LazyTrades = {
  readonly id: string;
  readonly token?: string | null;
  readonly sls: (string | null)[];
  readonly tps: string[];
  readonly createdAt: number;
  readonly updatedAt?: number | null;
}

export declare type Trades = LazyLoading extends LazyLoadingDisabled ? EagerTrades : LazyTrades

export declare const Trades: (new (init: ModelInit<Trades>) => Trades) & {
  copyOf(source: Trades, mutator: (draft: MutableModel<Trades>) => MutableModel<Trades> | void): Trades;
}

type EagerCredentials = {
  readonly id: string;
  readonly apikey?: string | null;
  readonly apisecret?: string | null;
  readonly exchange?: Exchanges | keyof typeof Exchanges | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCredentials = {
  readonly id: string;
  readonly apikey?: string | null;
  readonly apisecret?: string | null;
  readonly exchange?: Exchanges | keyof typeof Exchanges | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Credentials = LazyLoading extends LazyLoadingDisabled ? EagerCredentials : LazyCredentials

export declare const Credentials: (new (init: ModelInit<Credentials, CredentialsMetaData>) => Credentials) & {
  copyOf(source: Credentials, mutator: (draft: MutableModel<Credentials, CredentialsMetaData>) => MutableModel<Credentials, CredentialsMetaData> | void): Credentials;
}