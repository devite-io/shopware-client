import { GenericRecord } from "../GenericRecord";
import { MediaThumbnail } from "./MediaThumbnail";
import { Media } from "./Media";

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
