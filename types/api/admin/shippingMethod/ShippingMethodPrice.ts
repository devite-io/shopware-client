import { ShippingMethodPrice as StoreApiShippingMethodPrice } from "#types/api/store/shippingMethod/ShippingMethodPrice";
import { Rule } from "../rule/Rule";

export type ShippingMethodPrice = StoreApiShippingMethodPrice & {
  calculationRule?: Rule;
};
