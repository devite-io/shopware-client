import { GenericRecord } from "../GenericRecord";
import { Media, MediaThumbnail } from ".";

export type ProductMedia = {
  id: string;
  versionId?: string;
  productId: string;
  productVersionId?: string;
  mediaId: string;
  position?: number;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  media?: Media;
  thumbnails?: MediaThumbnail;
};
