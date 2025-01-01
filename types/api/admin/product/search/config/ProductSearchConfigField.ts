import { ProductSearchConfig } from "./ProductSearchConfig";
import { CustomField } from "../../../custom/field/CustomField";

export interface ProductSearchConfigField {
  id: string;
  searchConfigId: string;
  customFieldId?: string;
  field: string;
  tokenize?: boolean;
  searchable?: boolean;
  ranking?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  searchConfig?: ProductSearchConfig;
  customField?: CustomField;
}
