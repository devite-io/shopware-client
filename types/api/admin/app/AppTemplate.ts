import { App } from "./App";

export interface AppTemplate {
  id: string;
  template: string;
  path: string;
  active: boolean;
  appId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  app?: App;
}
