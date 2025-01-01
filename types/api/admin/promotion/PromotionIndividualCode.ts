import { Promotion } from "./Promotion";

export interface PromotionIndividualCode {
  id: string;
  promotionId: string;
  code: string;
  payload?: object;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  promotion?: Promotion;
}
