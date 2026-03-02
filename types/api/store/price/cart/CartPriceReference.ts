import { CartListPrice } from "./CartListPrice";
import { CartRegulationPrice } from "./CartRegulationPrice";

export interface CartPriceReference {
  apiAlias: "cart_price_reference";
  unitName: string;
  variantId?: string;
  purchaseUnit?: number;
  referenceUnit?: number;
  hasRange: boolean;
  price?: number;
  listPrice: CartListPrice | null;
  regulationPrice: CartRegulationPrice | null;
}
