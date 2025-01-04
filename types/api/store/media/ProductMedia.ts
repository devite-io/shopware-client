import { GenericRecord } from "#types/api/global/GenericRecord";
import { MediaThumbnail } from "./MediaThumbnail";
import { Media } from "./Media";

export interface ProductMedia {
  apiAlias: "product_media";
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
}
