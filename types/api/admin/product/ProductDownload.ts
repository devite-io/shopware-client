import { ProductDownload as StoreApiProductDownload } from "#types/api/store/product/ProductDownload";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { Product } from "./Product";
import { Media } from "../media/Media";

export type ProductDownload = StoreApiProductDownload & {
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
