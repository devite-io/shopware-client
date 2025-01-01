import { GenericRecord } from "#types/api/global/GenericRecord";
import { Flow } from "./Flow";
import { Rule } from "#types/api/store";
import { AppFlowAction } from "./app/AppFlowAction";

export interface FlowSequence {
  id: string;
  name: string;
  ruleId?: string;
  actionName?: string;
  config?: object;
  position?: number;
  displayGroup?: number;
  trueCase?: boolean;
  parentId?: string;
  customFields?: GenericRecord;
  appFLowActionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  flow?: Flow;
  rule?: Rule;
  parent?: FlowSequence;
  children?: Array<FlowSequence>;
  appFlowAction?: AppFlowAction;
  appFlowEventId?: string;
}
