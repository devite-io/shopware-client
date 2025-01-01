import { SalesChannel } from "./SalesChannel";
import { PaymentMethod } from "../paymentMethod/PaymentMethod";

export interface SalesChannelPaymentMethod {
  id?: string;
  salesChannelId: string;
  paymentMethodId: string;
  salesChannel?: SalesChannel;
  paymentMethod?: PaymentMethod;
}
