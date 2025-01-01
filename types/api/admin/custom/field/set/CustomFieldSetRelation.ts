import { CustomFieldSet } from "./CustomFieldSet";

export interface CustomFieldSetRelation {
  id: string;
  customFieldSetId: string;
  entityName: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  customFieldSet: CustomFieldSet;
}
