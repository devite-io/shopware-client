import { CalculatedPrice } from "../price";
import { GenericRecord } from "../GenericRecord";
import { OrderLineItem, OrderTransactionCaptureRefund } from ".";

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
