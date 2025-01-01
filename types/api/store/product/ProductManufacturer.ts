import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "../media/Media";

export interface ProductManufacturer {
  id: string;
  versionId?: string;
  mediaId?: string;
  link?: string;
  name: string;
  description?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  media?: Media;
}
