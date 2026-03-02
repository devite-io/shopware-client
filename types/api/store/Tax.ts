import { GenericRecord } from "#types/api/global/GenericRecord";

export interface Tax {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  name: string;
  taxRate: number;
  position?: number;
  customFields?: GenericRecord;
}
