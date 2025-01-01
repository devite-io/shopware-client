import { GenericRecord } from "#types/api/global/GenericRecord";
import { App } from "../../app/App";
import { FlowSequence } from "../FlowSequence";

export interface AppFlowAction {
  id: string;
  appId: string;
  name: string;
  badge?: string;
  parameters?: object;
  config?: object;
  headers?: object;
  requirements?: object;
  iconRaw?: string;
  readonly icon?: string;
  swIcon?: string;
  url: string;
  delayable?: boolean;
  label: string;
  description?: string;
  headline?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  app?: App;
  flowSequences?: Array<FlowSequence>;
}
