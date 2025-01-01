import { GenericRecord } from "#types/api/global/GenericRecord";
import { CustomFieldSetRelation } from "./CustomFieldSetRelation";
import { Product } from "../../../product/Product";
import { App } from "../../../app/App";

export interface CustomFieldSet {
  id: string;
  name: string;
  config?: object;
  active?: boolean;
  global?: boolean;
  position?: number;
  appId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  customFields?: GenericRecord;
  relations?: Array<CustomFieldSetRelation>;
  products?: Array<Product>;
  app?: App;
}
