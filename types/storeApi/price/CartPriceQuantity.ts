import { CartListPrice } from ".";

export type CartPriceQuantity = {
  apiAlias: "cart_price_quantity";
  isCalculated?: boolean;
  listPrice?: CartListPrice;
  price?: number;
  quantity?: number;
  regulationPrice?: { price?: number };
  taxRules?: Array<{
    taxRate?: number;
    name?: string;
  }>;
  type?: string;
};
