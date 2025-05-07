import { CalculatedPrice } from "../price/CalculatedPrice";
import { CartError } from "./CartError";
import { CartDelivery } from "./delivery/CartDelivery";
import { CartLineItem } from "#types/api/store";

export interface Cart {
  name?: string;
  token?: string;
  price?: CalculatedPrice;
  lineItems?: Array<CartLineItem>;
  source?: string;
  states?: Array<string>;
  hash?: string;
  errors?: Array<CartError>;
  errorHash?: string;
  extensions?: Record<string, any>;
  deliveries?: Array<CartDelivery>;
  transactions?: Array<{
    paymentMethodId?: string;
    amount?: CalculatedPrice;
  }>;
  modified?: boolean;
  customerComment?: string | null;
  affiliateCode?: string | null;
  campaignCode?: string | null;
  id?: any;
}
