import { PaymentMethod } from "#types/storeApi/PaymentMethod";
import { ShippingMethod } from "#types/storeApi/shippingMethod/ShippingMethod";

export type GatewayCheckoutResponse = {
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
};
