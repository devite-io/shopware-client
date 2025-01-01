import { CartListPrice } from "./CartListPrice";
import { CartRegulationPrice } from "./CartRegulationPrice";

export interface CartPriceReference {
  apiAlias: "cart_price_reference";
  purchaseUnit?: number;
  referenceUnit?: number;
  unitName: string;
  price?: number;
  listPrice: CartListPrice | null;
  regulationPrice: CartRegulationPrice | null;
  hasRange: boolean;
  variantId?: string;
}
