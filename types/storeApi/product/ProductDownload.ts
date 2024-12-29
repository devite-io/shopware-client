import { GenericRecord } from "../GenericRecord";
import { Media } from "#types/storeApi/media/Media";
import { Product } from "#types/storeApi/product/Product";

export type ProductDownload = {
  id: string;
  versionId?: string;
  productId: string;
  productVersionId?: string;
  mediaId: string;
  position?: number;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  product?: Product;
  media?: Media;
};
