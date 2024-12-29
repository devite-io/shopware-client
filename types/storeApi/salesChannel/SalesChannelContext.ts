import { PaymentMethod } from "../PaymentMethod";
import { SalesChannel } from "#types/storeApi/salesChannel/SalesChannel";
import { Currency } from "#types/storeApi/Currency";
import { Customer } from "#types/storeApi/customer/Customer";
import { CartDeliveryShippingLocation } from "#types/storeApi/cart/CartDeliveryShippingLocation";
import { ShippingMethod } from "#types/storeApi/shippingMethod/ShippingMethod";

export type SalesChannelContext = {
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
};
