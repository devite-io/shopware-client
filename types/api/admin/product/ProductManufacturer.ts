import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "../media/Media";

export type ProductManufacturer = {
  id: string;
  versionId?: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  link?: string;
  name: string;
  description?: string;
  mediaId?: string;
  media?: Media;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
};
