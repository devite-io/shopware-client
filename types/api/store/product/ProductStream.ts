import { GenericRecord } from "#types/api/global/GenericRecord";

export interface ProductStream {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  name: string;
  description?: string;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
