import { Tax as StoreApiTax } from "#types/api/store/Tax";
import { TaxRule } from "./rule/TaxRule";

export type Tax = StoreApiTax & {
  rules?: Array<TaxRule>;
};
