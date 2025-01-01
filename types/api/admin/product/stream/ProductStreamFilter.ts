import { GenericRecord } from "#types/api/global/GenericRecord";
import { ProductStream } from "./ProductStream";

export interface ProductStreamFilter {
  id: string;
  productStreamId: string;
  parentId?: string;
  type: "static" | "stream";
  field?: string;
  operator?: ">" | "<" | ">=" | "<=" | "==";
  value?: string;
  parameters?: object;
  position?: number;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  productStream?: ProductStream;
  parent?: ProductStreamFilter;
  queries?: Array<ProductStreamFilter>;
}
