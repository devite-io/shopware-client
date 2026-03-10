import { GenericRecord } from "#types/api/global/GenericRecord";

export interface ProductStreamFilter {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  parentId?: string;
  parent?: ProductStreamFilter;
  type: "static" | "stream";
  field?: string;
  operator?: ">" | "<" | ">=" | "<=" | "==";
  value?: string;
  parameters?: { gte?: number; lte?: number; gt?: number; lt?: number };
  position?: number;
  queries?: Array<ProductStreamFilter>;
  customFields?: GenericRecord;
}
