import { GenericRecord } from "#types/api/global/GenericRecord";

export interface ProductStream {
  id: string;
  name: string;
  description?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
}
