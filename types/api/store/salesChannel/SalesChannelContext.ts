import { Currency } from "../Currency";
import { SalesChannel } from "./SalesChannel";
import { Customer } from "../customer/Customer";
import { PaymentMethod } from "../PaymentMethod";
import { CartDeliveryShippingLocation } from "../cart/delivery/CartDeliveryShippingLocation";
import { ShippingMethod } from "../shippingMethod/ShippingMethod";

export interface SalesChannelContext {
  token?: string;
  currentCustomerGroup?: {
    name?: string;
    displayGross?: boolean;
  };
  fallbackCustomerGroup?: {
    name?: string;
    displayGross?: boolean;
  };
  currency?: Currency;
  salesChannel?: SalesChannel;
  taxRules?: Array<{
    taxRate?: number;
    name?: string;
  }>;
  customer?: Customer;
  paymentMethod?: PaymentMethod;
  shippingLocation?: CartDeliveryShippingLocation;
  shippingMethod?: ShippingMethod;
  context?: {
    versionId?: string;
    currencyId?: string;
    currencyFactor?: number;
    currencyPrecision?: number;
    languageIdChain?: string;
    scope?: string;
    source?: string;
    taxState?: "gross" | "net";
    useCache?: boolean;
  };
}
