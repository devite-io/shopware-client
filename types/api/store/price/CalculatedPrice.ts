import { CartPriceReference } from "./cart/CartPriceReference";
import { CartListPrice } from "./cart/CartListPrice";
import { CartRegulationPrice } from "./cart/CartRegulationPrice";

export interface CalculatedPrice {
  apiAlias: "calculated_price";
  variantId?: string;
  quantity: number;
  hasRange: boolean;
  positionPrice: number;
  netPrice: number;
  unitPrice: number;
  totalPrice: number;
  listPrice: CartListPrice | null;
  regulationPrice?: CartRegulationPrice;
  referencePrice?: CartPriceReference;
  calculatedTaxes: Array<{
    apiAlias: "cart_tax_calculated";
    taxRate: number;
    tax: number;
    price: number;
  }>;
}
