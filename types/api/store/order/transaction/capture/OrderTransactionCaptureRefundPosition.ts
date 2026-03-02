import { CalculatedPrice } from "../../../price/CalculatedPrice";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { OrderLineItem } from "../../OrderLineItem";
import { OrderTransactionCaptureRefund } from "./OrderTransactionCaptureRefund";

export interface OrderTransactionCaptureRefundPosition {
  id: string;
  versionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  externalReference?: string;
  reason?: string;
  refundId: string;
  refundVersionId?: string;
  orderTransactionCaptureRefund?: OrderTransactionCaptureRefund;
  orderLineItemId: string;
  orderLineItemVersionId?: string;
  orderLineItem?: OrderLineItem;
  quantity?: number;
  amount: CalculatedPrice;
  shippingCosts?: CalculatedPrice;
  customFields?: GenericRecord;
}
