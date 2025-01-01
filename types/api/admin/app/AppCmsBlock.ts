import { App } from "./App";

export interface AppCmsBlock {
  id: string;
  name: string;
  block: object;
  template: string;
  styles: string;
  label: string;
  appId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated: object;
  app: App;
}
