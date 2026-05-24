import { CustomFieldSet } from "./CustomFieldSet";

export interface CustomFieldSetRelation {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  entityName: string;
  customFieldSetId: string;
  customFieldSet?: CustomFieldSet;
}
