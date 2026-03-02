import { ShopwareDocumentType as StoreApiShopwareDocumentType } from "#types/api/store/document/ShopwareDocumentType";
import { ShopwareDocument } from "./ShopwareDocument";
import { ShopwareDocumentBaseConfig } from "./ShopwareDocumentBaseConfig";

export type ShopwareDocumentType = StoreApiShopwareDocumentType & {
  documents?: Array<ShopwareDocument>;
  documentBaseConfigs?: Array<ShopwareDocumentBaseConfig>;
};
