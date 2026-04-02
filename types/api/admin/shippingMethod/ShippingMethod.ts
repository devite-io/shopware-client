import { DeliveryTime } from "../DeliveryTime";
import { Media } from "../media/Media";
import { Rule } from "../rule/Rule";
import { ShippingMethod as StoreApiShippingMethod } from "#types/api/store/shippingMethod/ShippingMethod";
import { ShippingMethodPrice } from "./ShippingMethodPrice";
import { Tag } from "../Tag";

export type ShippingMethod = Omit<
  StoreApiShippingMethod,
  "media" | "tags" | "prices" | "availabilityRule"
> & {
  media?: Media;
  tags?: Array<Tag>;
  prices?: Array<ShippingMethodPrice>;
  availabilityRule?: Rule;
  deliveryTime?: DeliveryTime;
};
