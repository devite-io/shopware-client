import { PaymentMethod } from "#types/api/store/PaymentMethod";
import { ShippingMethod } from "#types/api/store/shippingMethod/ShippingMethod";

export interface GatewayCheckoutResponse {
  paymentMethods?: {
    total?: number;
    aggregations?: object;
    elements?: Array<PaymentMethod>;
  };
  shippingMethods?: {
    total?: number;
    aggregations?: object;
    elements?: Array<ShippingMethod>;
  };
  errors?: Array<{
    code?: string;
    detail?: string;
    blocking?: boolean;
  }>;
}
