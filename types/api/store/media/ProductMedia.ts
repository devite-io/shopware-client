import { GenericRecord } from "#types/api/global/GenericRecord";
import { MediaThumbnail } from "./MediaThumbnail";
import { Media } from "./Media";

export interface ProductMedia {
  apiAlias: "product_media";
  id: string;
  versionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  position?: number;
  productId: string;
  productVersionId?: string;
  mediaId: string;
  media?: Media;
  thumbnails?: MediaThumbnail;
  customFields?: GenericRecord;
}
