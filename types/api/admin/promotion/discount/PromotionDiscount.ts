import { Rule } from "../../rule/Rule";
import { PromotionDiscountPrice } from "./PromotionDiscountPrice";

export interface PromotionDiscount {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  type: "absolute" | "percentage";
  scope: string;
  considerAdvancedRules?: boolean;
  value: number;
  maxValue?: number;
  sorterKey?: "low to high" | "high to low";
  applierKey?: string;
  usageKey?: string;
  pickerKey?: string;
  discountRules?: Array<Rule>;
  promotionDiscountPrices?: Array<PromotionDiscountPrice>;
}
