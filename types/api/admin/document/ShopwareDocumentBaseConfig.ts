import { ShopwareDocumentBaseConfig as StoreApiShopwareDocumentBaseConfig } from "#types/api/store/document/ShopwareDocumentBaseConfig";
import { ShopwareDocumentType } from "./ShopwareDocumentType";
import { Media } from "../media/Media";

export type ShopwareDocumentBaseConfig = Omit<
  StoreApiShopwareDocumentBaseConfig,
  "documentType" | "logo"
> & {
  documentType?: ShopwareDocumentType;
  logo?: Media;
};
