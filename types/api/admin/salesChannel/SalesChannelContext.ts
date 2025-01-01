import { Currency } from "../currency/Currency";
import { SalesChannel } from "./SalesChannel";
import { Customer } from "../customer/Customer";
import { PaymentMethod } from "../paymentMethod/PaymentMethod";
import { ShippingMethod } from "../shippingMethod/ShippingMethod";

export interface SalesChannelContext {
  currentCustomerGroup?: {
    name?: string;
    displayGross?: boolean;
  };
  currency?: Currency;
  salesChannel?: SalesChannel;
  taxRules?: {
    taxRate?: number;
    name?: string;
  };
  customer?: Customer;
  paymentMethod?: PaymentMethod;
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
