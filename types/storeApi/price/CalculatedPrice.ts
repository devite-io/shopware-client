import { CartPriceReference } from "./CartPriceReference";
import { CartListPrice } from "./CartListPrice";
import { CartRegulationPrice } from "./CartRegulationPrice";

export type CalculatedPrice = {
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
  referencePrice: CartPriceReference | null;
  listPrice: CartListPrice | null;
  positionPrice: number;
  netPrice: number;
  regulationPrice: CartRegulationPrice | null;
  hasRange: boolean;
  variantId?: string | null;
  apiAlias: "calculated_price";
  taxRules: Array<{
    taxRate?: number;
    name?: string;
  }>;
};
