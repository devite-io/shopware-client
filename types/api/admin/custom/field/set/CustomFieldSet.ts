import { GenericRecord } from "#types/api/global/GenericRecord";

export interface CustomFieldSet {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  active?: boolean;
  name: string;
  position?: number;
  customFields?: GenericRecord;
}
