import { Promotion } from "../Promotion";
import { Rule } from "../../rule/Rule";
import { PromotionDiscountPrice } from "./PromotionDiscountPrice";

export interface PromotionDiscount {
  id: string;
  promotionId: string;
  scope: string;
  type: "absolute" | "percentage";
  value: number;
  considerAdvancedRules?: boolean;
  maxValue?: number;
  sorterKey?: "low to high" | "high to low";
  applierKey?: string;
  usageKey?: string;
  pickerKey?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  promotion?: Promotion;
  discountRules?: Array<Rule>;
  promotionDiscountPrices?: Array<PromotionDiscountPrice>;
}
