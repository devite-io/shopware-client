import { CartItems } from "./CartItems";
import { CartError } from "./CartError";
import { CartDelivery } from "./CartDelivery";
import { CalculatedPrice } from "#types/storeApi/price/CalculatedPrice";

export type Cart = {
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
};
