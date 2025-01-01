import { PromotionDiscount } from "./PromotionDiscount";
import { Currency } from "../../currency/Currency";

export interface PromotionDiscountPrice {
  id: string;
  discountId: string;
  currencyId: string;
  price: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  promotionDiscount?: PromotionDiscount;
  currency?: Currency;
}
