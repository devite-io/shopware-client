import { ShippingMethod } from "./ShippingMethod";
import { Tag } from "../Tag";

export interface ShippingMethodTag {
  id?: string;
  shippingMethodId: string;
  tagId: string;
  shippingMethod?: ShippingMethod;
  tag?: Tag;
}
