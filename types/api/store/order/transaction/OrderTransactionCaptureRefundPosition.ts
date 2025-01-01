import { CalculatedPrice } from "../../price/CalculatedPrice";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { OrderLineItem } from "../OrderLineItem";
import { OrderTransactionCaptureRefund } from "./OrderTransactionCaptureRefund";

export interface OrderTransactionCaptureRefundPosition {
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
}
