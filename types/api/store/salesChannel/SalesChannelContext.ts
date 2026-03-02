import { Currency } from "../Currency";
import { CustomerGroup } from "../customer/CustomerGroup";
import { SalesChannel } from "./SalesChannel";
import { Customer } from "../customer/Customer";
import { PaymentMethod } from "../PaymentMethod";
import { ShippingMethod } from "../shippingMethod/ShippingMethod";
import { PricingCashRoundingConfig } from "#types/api/global/dal/PricingCashRoundingConfig";

export interface SalesChannelContext {
  apiAlias: "sales_channel_context";
  token?: string;
  imitatingUserId?: string;
  customer?: Customer;
  currentCustomerGroup?: CustomerGroup;
  fallbackCustomerGroup?: CustomerGroup;
  context?: {
    apiAlias: "context";
    taxState?: "gross" | "net";
    currencyFactor?: number;
    currencyPrecision?: number;
  };
  currency?: Currency;
  languageInfo: { localeCode: string; name: string };
  salesChannel?: SalesChannel;
  paymentMethod?: PaymentMethod;
  shippingMethod?: ShippingMethod;
  itemRounding?: PricingCashRoundingConfig;
}
