import { App } from "./app/App";

export interface Script {
  id: string;
  script: string;
  hook: string;
  name: string;
  active: string;
  appId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  app?: App;
}
