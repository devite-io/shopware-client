import { Price } from "#types/api/global/price/Price";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { Rule } from "../Rule";

export interface ShippingMethodPrice {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  ruleId?: string;
  calculation?: number;
  quantityStart?: number;
  quantityEnd?: number;
  currencyPrice: Array<Price>;
  customFields?: GenericRecord;
  calculationRuleId?: string;
  calculationRule?: Rule;
}
