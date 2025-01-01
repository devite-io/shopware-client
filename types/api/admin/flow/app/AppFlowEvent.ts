import { GenericRecord } from "#types/api/global/GenericRecord";
import { App } from "../../app/App";
import { Flow } from "../Flow";

export interface AppFlowEvent {
  id: string;
  appId: string;
  name: string;
  aware: Array<string>;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  app?: App;
  flows?: Array<Flow>;
}
