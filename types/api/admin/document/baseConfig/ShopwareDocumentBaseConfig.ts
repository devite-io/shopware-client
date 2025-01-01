import { ShopwareDocumentBaseConfig as StoreApiShopwareDocumentBaseConfig } from "#types/api/store/document/ShopwareDocumentBaseConfig";
import { ShopwareDocumentType } from "../ShopwareDocumentType";
import { Media } from "../../media/Media";
import { SalesChannel } from "../../salesChannel/SalesChannel";

export type ShopwareDocumentBaseConfig = StoreApiShopwareDocumentBaseConfig & {
  documentType?: ShopwareDocumentType;
  logo?: Media;
  salesChannels?: Array<SalesChannel>;
};
