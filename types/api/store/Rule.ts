import { GenericRecord } from "#types/api/global/GenericRecord";

export interface Rule {
  id?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  name: string;
  description?: string;
  customFields?: GenericRecord;
}
