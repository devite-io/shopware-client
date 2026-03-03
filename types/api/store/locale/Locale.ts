import { GenericRecord } from "#types/api/global/GenericRecord";

export interface Locale {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  name: string;
  code: string;
  territory: string;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
