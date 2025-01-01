import { GenericRecord } from "#types/api/global/GenericRecord";
import { FlowSequence } from "./FlowSequence";
import { AppFlowEvent } from "./app/AppFlowEvent";

export interface Flow {
  id: string;
  name: string;
  eventName: string;
  priority?: number;
  readonly invalid?: boolean;
  active?: boolean;
  description?: string;
  customFields?: GenericRecord;
  appFlowEventId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  sequences?: Array<FlowSequence>;
  appFlowEvent?: AppFlowEvent;
}
