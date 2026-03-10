import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "../media/Media";
import { ShopwareDocumentType } from "../document/ShopwareDocumentType";

export interface ShopwareDocumentBaseConfig {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  filenamePrefix?: string;
  filenameSuffix?: string;
  documentNumber?: string;
  documentTypeId: string;
  documentType?: ShopwareDocumentType;
  name: string;
  config?: object;
  logoId?: string;
  logo?: Media;
  customFields?: GenericRecord;
}
