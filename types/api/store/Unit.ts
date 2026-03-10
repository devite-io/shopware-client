import { GenericRecord } from "#types/api/global/GenericRecord";

export interface Unit {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  name: string;
  shortCode: string;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
