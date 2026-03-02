import { ProductSearchConfig } from "./ProductSearchConfig";
import { CustomField } from "../../../custom/field/CustomField";

export interface ProductSearchConfigField {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  field: string;
  searchConfigId: string;
  searchConfig?: ProductSearchConfig;
  tokenize?: boolean;
  searchable?: boolean;
  ranking?: number;
  customField?: CustomField;
}
