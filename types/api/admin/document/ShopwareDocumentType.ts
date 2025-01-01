import { ShopwareDocumentType as StoreApiShopwareDocumentType } from "#types/api/store/document/ShopwareDocumentType";
import { ShopwareDocument } from "./ShopwareDocument";
import { ShopwareDocumentBaseConfig } from "./baseConfig/ShopwareDocumentBaseConfig";
import { ShopwareDocumentBaseConfigSalesChannel } from "./baseConfig/ShopwareDocumentBaseConfigSalesChannel";

export type ShopwareDocumentType = StoreApiShopwareDocumentType & {
  documents?: Array<ShopwareDocument>;
  documentBaseConfigs?: Array<ShopwareDocumentBaseConfig>;
  documentBaseConfigSalesChannels?: Array<ShopwareDocumentBaseConfigSalesChannel>;
};
