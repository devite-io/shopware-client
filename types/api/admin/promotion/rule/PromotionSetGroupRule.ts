import { PromotionSetGroup } from "../PromotionSetGroup";
import { Rule } from "../../rule/Rule";

export interface PromotionSetGroupRule {
  id?: string;
  setgroupId: string;
  setgroup: PromotionSetGroup;
  ruleId: string;
  rule?: Rule;
}
