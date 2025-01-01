import { GenericRecord } from "#types/api/global/GenericRecord";
import { Rule } from "./Rule";
import { AppScriptCondition } from "../app/AppScriptCondition";

export interface RuleCondition {
  id: string;
  type: string;
  ruleId: string;
  scriptId?: string;
  parentId?: string;
  value?: object;
  position?: number;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  rule?: Rule;
  appScriptCondition?: AppScriptCondition;
  parent?: RuleCondition;
  children?: Array<RuleCondition>;
}
