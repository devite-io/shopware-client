import { GenericRecord } from "#types/api/global/GenericRecord";

export interface Unit {
  id: string;
  shortCode: string;
  name: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
}
