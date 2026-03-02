import { ShippingMethod as StoreApiShippingMethod } from "#types/api/store/shippingMethod/ShippingMethod";
import { Rule } from "../rule/Rule";
import { ShippingMethodPrice } from "./ShippingMethodPrice";
import { Media } from "../media/Media";
import { Tag } from "../Tag";

export type ShippingMethod = StoreApiShippingMethod & {
  media?: Media;
  tags?: Array<Tag>;
  prices?: Array<ShippingMethodPrice>;
  availabilityRule?: Rule;
};
