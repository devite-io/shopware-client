import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "../media/Media";

export interface ShopwareDocumentBaseConfig {
  id: string;
  documentTypeId: string;
  logoId?: string;
  name: string;
  filenamePrefix?: string;
  filenameSuffix?: string;
  global?: boolean;
  documentNumber?: string;
  config?: object;
  readonly createdAt?: string;
  customFields?: GenericRecord;
  readonly updatedAt?: string;
  logo?: Media;
}
