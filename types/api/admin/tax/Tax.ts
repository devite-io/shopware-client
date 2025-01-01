import { Tax as StoreApiTax } from "#types/api/store/Tax";
import { Product } from "../product/Product";
import { TaxRule } from "./rule/TaxRule";
import { ShippingMethod } from "../shippingMethod/ShippingMethod";

export type Tax = StoreApiTax & {
  products?: Array<Product>;
  rules?: Array<TaxRule>;
  shippingMethods?: Array<ShippingMethod>;
};
