import { App } from "./App";

export interface AppActionButton {
  id: string;
  entity: string;
  view: string;
  url: string;
  action: string;
  label: string;
  appId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  app?: App;
}
