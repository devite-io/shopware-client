import { GenericRecord } from "../GenericRecord";
import { Price } from "#types/storeApi/price/Price";

export type ShippingMethodPrice = {
  id: string;
  shippingMethodId: string;
  ruleId?: string;
  calculation?: number;
  calculationRuleId?: string;
  quantityStart?: number;
  quantityEnd?: number;
  currencyPrice: Array<Price>;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
};
