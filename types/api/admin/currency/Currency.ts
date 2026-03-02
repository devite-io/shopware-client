import { Currency as StoreApiCurrency } from "#types/api/store/Currency";
import { SalesChannel } from "../salesChannel/SalesChannel";

export type Currency = StoreApiCurrency & {
  salesChannels?: Array<SalesChannel>;
};
