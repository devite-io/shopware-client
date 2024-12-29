import { GenericRecord } from "../GenericRecord";
import { OrderTransactionCaptureRefund } from "./OrderTransactionCaptureRefund";
import { OrderLineItem } from "./OrderLineItem";
import { CalculatedPrice } from "#types/storeApi/price/CalculatedPrice";

export type OrderTransactionCaptureRefundPosition = {
  id: string;
  versionId?: string;
  refundId: string;
  refundVersionId?: string;
  orderLineItemId: string;
  orderLineItemVersionId?: string;
  externalReference?: string;
  reason?: string;
  quantity?: number;
  amount: CalculatedPrice;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  orderLineItem?: OrderLineItem;
  orderTransactionCaptureRefund?: OrderTransactionCaptureRefund;
  shippingCosts?: CalculatedPrice;
};
