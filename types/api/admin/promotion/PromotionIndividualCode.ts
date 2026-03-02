import { Promotion } from "./Promotion";

export interface PromotionIndividualCode {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  code: string;
  payload?: object;
  promotionId: string;
  promotion?: Promotion;
}
