import { GenericRecord } from "#types/api/global/GenericRecord";
import { Rule } from "../Rule";
import { ShippingMethodPrice } from "./ShippingMethodPrice";
import { Media } from "../media/Media";
import { Tag } from "../Tag";

export interface ShippingMethod {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  active?: boolean;
  technicalName?: string;
  name: string;
  description?: string;
  position?: number;
  trackingUrl?: string;
  mediaId?: string;
  media?: Media;
  tags?: Array<Tag>;
  prices?: Array<ShippingMethodPrice>;
  availabilityRuleId?: string;
  availabilityRule?: Rule;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
