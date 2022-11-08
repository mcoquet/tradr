import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type SettingsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerSettings = {
  readonly id: string;
  readonly credentials?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySettings = {
  readonly id: string;
  readonly credentials?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Settings = LazyLoading extends LazyLoadingDisabled ? EagerSettings : LazySettings

export declare const Settings: (new (init: ModelInit<Settings, SettingsMetaData>) => Settings) & {
  copyOf(source: Settings, mutator: (draft: MutableModel<Settings, SettingsMetaData>) => MutableModel<Settings, SettingsMetaData> | void): Settings;
}