import { GenericRecord } from "#types/api/global/GenericRecord";

export interface ShopwareDocumentType {
  id: string;
  name: string;
  technicalName: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  customFields?: GenericRecord;
  translated?: object;
}
