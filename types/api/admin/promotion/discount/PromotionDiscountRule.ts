import { PromotionDiscount } from "./PromotionDiscount";
import { Rule } from "../../rule/Rule";

export interface PromotionDiscountRule {
  id?: string;
  discountId: string;
  ruleId: string;
  discount?: PromotionDiscount;
  rule?: Rule;
}
