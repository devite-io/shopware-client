import { ShippingMethod } from "./ShippingMethod";
import { Media } from "../media/Media";

export interface AppShippingMethod {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  appName: string;
  identifier: string;
  originalMediaId?: string;
  originalMedia?: Media;
  shippingMethodId: string;
  shippingMethod?: ShippingMethod;
}
