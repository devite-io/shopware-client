import { GenericRecord } from "#types/api/global/GenericRecord";
import { Product } from "./Product";
import { Rule } from "../rule/Rule";
import { CalculatedPrice } from "#types/api/store/price/CalculatedPrice";

export interface ProductPrice {
  id: string;
  versionId?: string;
  productId: string;
  productVersionId?: string;
  ruleId: string;
  price?: Array<CalculatedPrice>;
  quantityStart: number;
  quantityEnd?: number;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  product?: Product;
  rule?: Rule;
}
