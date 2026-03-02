import { Promotion } from "../Promotion";
import { Rule } from "../../rule/Rule";

export interface PromotionOrderRule {
  id?: string;
  promotionId: string;
  promotion?: Promotion;
  ruleId: string;
  rule?: Rule;
}
