import { SalesChannel } from "./SalesChannel";
import { ShippingMethod } from "../shippingMethod/ShippingMethod";

export interface SalesChannelShippingMethod {
  id?: string;
  salesChannelId: string;
  shippingMethodId: string;
  salesChannel?: SalesChannel;
  shippingMethod?: ShippingMethod;
}
