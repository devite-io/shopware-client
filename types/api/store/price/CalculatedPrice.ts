import { CartPriceReference } from "./cart/CartPriceReference";
import { CartListPrice } from "./cart/CartListPrice";
import { CartRegulationPrice } from "./cart/CartRegulationPrice";

export interface CalculatedPrice {
  unitPrice: number;
  quantity: number;
  rawTotal?: number;
  totalPrice: number;
  calculatedTaxes: Array<{
    apiAlias: "cart_tax_calculated";
    tax: number;
    taxRate: number;
    price: number;
  }>;
  referencePrice?: CartPriceReference;
  listPrice: CartListPrice | null;
  positionPrice: number;
  netPrice: number;
  regulationPrice?: CartRegulationPrice;
  hasRange: boolean;
  variantId?: string | null;
  apiAlias: "calculated_price";
  taxRules: Array<{
    taxRate?: number;
    name?: string;
  }>;
}
