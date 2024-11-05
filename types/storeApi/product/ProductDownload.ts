import { GenericRecord } from "../GenericRecord";
import { Product } from ".";
import { Media } from "../media";

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
