import { ShippingMethod as StoreApiShippingMethod } from "#types/api/store/shippingMethod/ShippingMethod";
import { DeliveryTime } from "../DeliveryTime";
import { Rule } from "../rule/Rule";
import { ShippingMethodPrice } from "./ShippingMethodPrice";
import { Media } from "../media/Media";
import { Tag } from "../Tag";
import { OrderDelivery } from "../order/delivery/OrderDelivery";
import { SalesChannel } from "../salesChannel/SalesChannel";
import { Tax } from "../tax/Tax";
import { AppShippingMethod } from "./AppShippingMethod";

export type ShippingMethod = StoreApiShippingMethod & {
  availabilityRuleId?: string;
  taxId?: string;
  deliveryTime?: DeliveryTime;
  availabilityRule?: Rule;
  prices?: Array<ShippingMethodPrice>;
  media?: Media;
  tags?: Array<Tag>;
  orderDeliveries?: Array<OrderDelivery>;
  salesChannels?: Array<SalesChannel>;
  salesChannelDefaultAssignments?: Array<SalesChannel>;
  tax?: Tax;
  appShippingMethod?: AppShippingMethod;
};
