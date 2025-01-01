import { Promotion } from "../Promotion";
import { Rule } from "../../rule/Rule";

export interface PromotionPersonaRule {
  id?: string;
  promotionId: string;
  ruleId: string;
  promotion?: Promotion;
  rule?: Rule;
}
