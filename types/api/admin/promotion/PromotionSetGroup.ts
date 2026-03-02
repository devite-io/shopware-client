import { Promotion } from "./Promotion";
import { PromotionSetGroupRule } from "./rule/PromotionSetGroupRule";

export interface PromotionSetGroup {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  value: number;
  packagerKey: string;
  sorterKey: string;
  setGroupRules?: Array<PromotionSetGroupRule>;
  promotionId: string;
  promotion?: Promotion;
}
