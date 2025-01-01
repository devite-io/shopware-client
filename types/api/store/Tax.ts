import { GenericRecord } from "#types/api/global/GenericRecord";

export interface Tax {
  id: string;
  taxRate: number;
  name: string;
  position?: number;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
}
