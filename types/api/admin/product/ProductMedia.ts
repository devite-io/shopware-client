import { GenericRecord } from "#types/api/global/GenericRecord";
import { Product } from "./Product";
import { Media } from "../media/Media";

export interface ProductMedia {
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
  coverProducts?: Array<Product>;
}
