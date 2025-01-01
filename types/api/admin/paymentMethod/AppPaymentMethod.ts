import { App } from "../app/App";
import { Media } from "../media/Media";
import { PaymentMethod } from "./PaymentMethod";

export interface AppPaymentMethod {
  id: string;
  appName: string;
  identifier: string;
  payUrl?: string;
  finalizeUrl?: string;
  validateUrl?: string;
  captureUrl?: string;
  refundUrl?: string;
  recurringUrl?: string;
  appId?: string;
  originalMediaId?: string;
  paymentMethodId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  app?: App;
  originalMedia?: Media;
  paymentMethod?: PaymentMethod;
}
