import { ShopwareDocument as StoreApiShopwareDocument } from "#types/api/store/document/ShopwareDocument";
import { ShopwareDocumentType } from "./ShopwareDocumentType";
import { Media } from "../media/Media";

export type ShopwareDocument = StoreApiShopwareDocument & {
  documentType?: ShopwareDocumentType;
  referencedDocument?: ShopwareDocument;
  dependantDocuments?: Array<ShopwareDocument>;
  documentMediaFile?: Media;
};
