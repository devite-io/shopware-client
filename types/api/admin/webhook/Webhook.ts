import { App } from "../app/App";

export interface Webhook {
  id: string;
  name: string;
  eventName: string;
  url: string;
  onlyLiveVersion?: boolean;
  readonly errorCount?: number;
  active?: boolean;
  appId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  app?: App;
}
