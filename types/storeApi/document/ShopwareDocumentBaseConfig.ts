import { GenericRecord } from "../GenericRecord";
import { Media } from "../media/Media";

export type ShopwareDocumentBaseConfig = {
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
};
