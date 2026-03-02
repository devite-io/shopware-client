import { GenericRecord } from "#types/api/global/GenericRecord";
import { Rule } from "../rule/Rule";
import { CalculatedPrice } from "#types/api/store/price/CalculatedPrice";

export interface ProductPrice {
  id: string;
  versionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  quantityStart: number;
  quantityEnd?: number;
  ruleId: string;
  rule?: Rule;
  price?: Array<CalculatedPrice>;
  customFields?: GenericRecord;
}
