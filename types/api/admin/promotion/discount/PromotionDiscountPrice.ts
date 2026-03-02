import { Currency } from "../../currency/Currency";

export interface PromotionDiscountPrice {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  price: number;
  currencyId: string;
  currency?: Currency;
}
