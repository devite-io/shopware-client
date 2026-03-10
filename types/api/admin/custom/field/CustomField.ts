import { CustomFieldSet } from "./set/CustomFieldSet";

export interface CustomField {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  active?: boolean;
  type: string;
  name: string;
  allowCustomerWrite?: boolean;
  allowCartExpose?: boolean;
  customFieldSetId?: string;
  customFieldSet?: CustomFieldSet;
}
