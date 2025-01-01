import { CalculatedPrice } from "../price/CalculatedPrice";
import { CartItems } from "./CartItems";
import { CartError } from "./CartError";
import { CartDelivery } from "./delivery/CartDelivery";

export interface Cart {
  name?: string;
  token?: string;
  price?: CalculatedPrice;
  lineItems?: CartItems;
  errors?: Array<CartError>;
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
