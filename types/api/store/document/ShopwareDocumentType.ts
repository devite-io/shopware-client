import { GenericRecord } from "#types/api/global/GenericRecord";

export interface ShopwareDocumentType {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  name: string;
  technicalName: string;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
