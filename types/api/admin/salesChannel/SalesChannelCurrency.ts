import { SalesChannel } from "./SalesChannel";
import { Currency } from "../currency/Currency";

export interface SalesChannelCurrency {
  id?: string;
  salesChannelId: string;
  currencyId: string;
  salesChannel: SalesChannel;
  currency?: Currency;
}
