import { ShippingMethodPrice as StoreApiShippingMethodPrice } from "#types/api/store/shippingMethod/ShippingMethodPrice";
import { ShippingMethod } from "./ShippingMethod";
import { Rule } from "../rule/Rule";

export type ShippingMethodPrice = StoreApiShippingMethodPrice & {
  shippingMethod?: ShippingMethod;
  rule?: Rule;
  calculationRule?: Rule;
};
