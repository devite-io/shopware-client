import { ShopwareDocumentType } from "../ShopwareDocumentType";
import { ShopwareDocumentBaseConfig } from "./ShopwareDocumentBaseConfig";
import { SalesChannel } from "../../salesChannel/SalesChannel";

export interface ShopwareDocumentBaseConfigSalesChannel {
  id: string;
  documentBaseConfigId: string;
  salesChannelId?: string;
  documentTypeId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  documentType?: ShopwareDocumentType;
  documentBaseConfig?: ShopwareDocumentBaseConfig;
  salesChannel?: SalesChannel;
}
