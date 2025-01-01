import { GenericRecord } from "#types/api/global/GenericRecord";
import { DeliveryTime } from "../DeliveryTime";
import { Rule } from "../Rule";
import { ShippingMethodPrice } from "./ShippingMethodPrice";
import { Media } from "../media/Media";
import { Tag } from "../Tag";
import { Tax } from "../Tax";

export interface ShippingMethod {
  id: string;
  name: string;
  active?: boolean;
  position?: number;
  customFields?: GenericRecord;
  mediaId?: string;
  deliveryTimeId: string;
  taxType?: "Free" | "Net" | "Gross";
  description?: string;
  trackingUrl?: string;
  technicalName?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  deliveryTime?: DeliveryTime;
  availabilityRule?: Rule;
  prices?: Array<ShippingMethodPrice>;
  media?: Media;
  tags?: Array<Tag>;
  tax?: Tax;
}
