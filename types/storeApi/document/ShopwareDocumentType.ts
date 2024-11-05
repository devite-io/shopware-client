import { GenericRecord } from "../GenericRecord";

export type ShopwareDocumentType = {
  id: string;
  name: string;
  technicalName: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  customFields?: GenericRecord;
  translated?: object;
};
