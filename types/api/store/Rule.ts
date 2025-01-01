import { GenericRecord } from "#types/api/global/GenericRecord";

export interface Rule {
  id?: string;
  name: string;
  description?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  extensions?: any;
}
