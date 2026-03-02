import { PromotionDiscount } from "./PromotionDiscount";
import { Rule } from "../../rule/Rule";

export interface PromotionDiscountRule {
  id?: string;
  discountId: string;
  discount?: PromotionDiscount;
  ruleId: string;
  rule?: Rule;
}
