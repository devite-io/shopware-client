import { ProductStream } from "./stream/ProductStream";
import { SalesChannel } from "../salesChannel/SalesChannel";
import { SalesChannelDomain } from "../salesChannel/SalesChannelDomain";
import { Currency } from "../currency/Currency";

export interface ProductExport {
  id: string;
  productStreamId: string;
  storefrontSalesChannelId: string;
  salesChannelId: string;
  salesChannelDomainId: string;
  currencyId: string;
  fileName: string;
  accessKey: string;
  encoding: string;
  fileFormat: string;
  includeVariants?: boolean;
  generateByCronjob: boolean;
  generatedAt?: string;
  interval: number;
  headerTemplate?: string;
  bodyTemplate?: string;
  footerTemplate?: string;
  pausedSchedule?: boolean;
  isRunning?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  productStream?: ProductStream;
  storefrontSalesChannel?: SalesChannel;
  salesChannel?: SalesChannel;
  salesChannelDomain?: SalesChannelDomain;
  currency?: Currency;
}
