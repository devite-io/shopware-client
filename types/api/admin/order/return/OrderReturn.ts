import { OrderPrice } from "#types/api/store/order/OrderPrice";
import { CalculatedPrice } from "#types/api/store";

export interface OrderReturn {
  id?: string;
  versionId?: string;
  orderVersionId?: string;
  price?: OrderPrice;
  shippingCosts?: CalculatedPrice;
  stateId?: string;
  returnNumber?: string;
  requestedAt?: string;
  amountTotal?: number;
  amountNet?: number;
  internalComment?: string;
  createdById?: string;
  updatedById?: string;
}
