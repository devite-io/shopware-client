import { ShippingMethodPrice as StoreApiShippingMethodPrice } from "#types/api/store/shippingMethod/ShippingMethodPrice";
import { Rule } from "../rule/Rule";

export type ShippingMethodPrice = Omit<StoreApiShippingMethodPrice, "calculationRule"> & {
  calculationRule?: Rule;
};
