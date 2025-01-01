import { Promotion } from "./Promotion";
import { PromotionSetGroupRule } from "./rule/PromotionSetGroupRule";

export interface PromotionSetGroup {
  id: string;
  promotionId: string;
  packagerKey: string;
  sorterKey: string;
  value: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  promotion?: Promotion;
  setGroupRules?: Array<PromotionSetGroupRule>;
}
