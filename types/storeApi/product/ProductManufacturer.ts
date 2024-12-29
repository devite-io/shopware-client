import { GenericRecord } from "../GenericRecord";
import { Media } from "#types/storeApi/media/Media";

export type ProductManufacturer = {
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
};
