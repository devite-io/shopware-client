import { CustomFieldSet } from "./set/CustomFieldSet";
import { ProductSearchConfigField } from "../../product/search/config/ProductSearchConfigField";

export interface CustomField {
  id: string;
  name: string;
  type: string;
  config?: object;
  active?: boolean;
  customFieldSetId?: string;
  allowCustomerWrite?: boolean;
  allowCartExpose?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  customFieldSet?: CustomFieldSet;
  productSearchConfigFields?: Array<ProductSearchConfigField>;
}
