import { GenericRecord } from "#types/api/global/GenericRecord";

export interface Locale {
  id: string;
  code: string;
  name: string;
  territory: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
}
