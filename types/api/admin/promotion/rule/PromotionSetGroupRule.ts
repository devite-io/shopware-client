import { PromotionSetGroup } from "../PromotionSetGroup";
import { Rule } from "../../rule/Rule";

export interface PromotionSetGroupRule {
  id?: string;
  setgroupId: string;
  ruleId: string;
  setgroup: PromotionSetGroup;
  rule?: Rule;
}
