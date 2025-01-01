import { App } from "../app/App";
import { ShippingMethod } from "./ShippingMethod";
import { Media } from "../media/Media";

export interface AppShippingMethod {
  id: string;
  appName: string;
  identifier: string;
  appId?: string;
  shippingMethodId: string;
  originalMediaId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  app?: App;
  shippingMethod?: ShippingMethod;
  originalMedia?: Media;
}
