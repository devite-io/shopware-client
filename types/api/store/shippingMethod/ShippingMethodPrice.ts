import { Price } from "#types/api/global/price/Price";
import { GenericRecord } from "#types/api/global/GenericRecord";

export interface ShippingMethodPrice {
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
}
