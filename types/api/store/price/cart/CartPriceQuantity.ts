import { CartListPrice } from "./CartListPrice";

export interface CartPriceQuantity {
  apiAlias: "cart_price_quantity";
  quantity?: number;
  type?: string;
  isCalculated?: boolean;
  price?: number;
  listPrice?: CartListPrice;
  regulationPrice?: { price?: number };
}
