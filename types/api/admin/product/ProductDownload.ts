import { ProductDownload as StoreApiProductDownload } from "#types/api/store/product/ProductDownload";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { Product } from "./Product";
import { Media } from "../media/Media";

export type ProductDownload = Omit<StoreApiProductDownload, "product" | "media"> & {
  id: string;
  versionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  position?: number;
  productId: string;
  productVersionId?: string;
  product?: Product;
  mediaId: string;
  media?: Media;
  customFields?: GenericRecord;
};
