import { CartListPrice, CartRegulationPrice } from ".";

export type CartPriceReference = {
  apiAlias: "cart_price_reference";
  purchaseUnit?: number;
  referenceUnit?: number;
  unitName: string;
  price?: number;
  listPrice: CartListPrice | null;
  regulationPrice: CartRegulationPrice | null;
  hasRange: boolean;
  variantId?: string;
};
