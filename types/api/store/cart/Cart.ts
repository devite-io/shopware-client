import { CalculatedPrice } from "../price/CalculatedPrice";
import { CartError } from "./CartError";
import { CartDelivery } from "./delivery/CartDelivery";
import { CartLineItem } from "#types/api/store";

export interface Cart {
  token?: string;
  name?: string;
  price?: CalculatedPrice;
  lineItems?: Array<CartLineItem>;
  errors?: Array<CartError>;
  deliveries?: Array<CartDelivery>;
  customerComment?: string | null;
  affiliateCode?: string | null;
  campaignCode?: string | null;
  extensions?: Record<string, any>;
}
