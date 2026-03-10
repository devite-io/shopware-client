import { GenericRecord } from "#types/api/global/GenericRecord";
import { Rule } from "./Rule";

export interface RuleCondition {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  parentId?: string;
  parent?: RuleCondition;
  children?: Array<RuleCondition>;
  type: string;
  value?: object;
  position?: number;
  ruleId: string;
  rule?: Rule;
  customFields?: GenericRecord;
}
