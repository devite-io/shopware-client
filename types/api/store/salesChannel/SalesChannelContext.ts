import { Currency } from "../Currency";
import { CustomerGroup } from "../customer/CustomerGroup";
import { SalesChannel } from "./SalesChannel";
import { Customer } from "../customer/Customer";
import { PaymentMethod } from "../PaymentMethod";
import { CartDeliveryShippingLocation } from "../cart/delivery/CartDeliveryShippingLocation";
import { ShippingMethod } from "../shippingMethod/ShippingMethod";
import { PricingCashRoundingConfig } from "#types/api/global/dal/PricingCashRoundingConfig";

export interface SalesChannelContext {
  apiAlias: "sales_channel_context";
  context?: {
    apiAlias: "context";
    considerInheritance?: boolean;
    versionId?: string;
    currencyId?: string;
    currencyFactor?: number;
    currencyPrecision?: number;
    languageIdChain?: Array<string>;
    rounding?: PricingCashRoundingConfig;
    scope?: string;
    source?: any;
    taxState?: "gross" | "net";
  };
  currency?: Currency;
  currentCustomerGroup?: CustomerGroup;
  fallbackCustomerGroup?: CustomerGroup;
  customer?: Customer;
  imitatingUserId?: string;
  itemRounding?: PricingCashRoundingConfig;
  languageInfo: { localeCode: string; name: string };
  paymentMethod?: PaymentMethod;
  salesChannel?: SalesChannel;
  shippingLocation?: CartDeliveryShippingLocation;
  shippingMethod?: ShippingMethod;
  taxRules?: Array<{
    taxRate?: number;
    name?: string;
  }>;
  token?: string;
}
