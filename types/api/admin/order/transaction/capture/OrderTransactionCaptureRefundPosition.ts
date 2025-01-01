import { OrderTransactionCaptureRefundPosition as StoreApiOrderTransactionCaptureRefundPosition } from "#types/api/store/order/transaction/OrderTransactionCaptureRefundPosition";
import { OrderLineItem } from "../../lineItem/OrderLineItem";
import { OrderTransactionCaptureRefund } from "./OrderTransactionCaptureRefund";

export type OrderTransactionCaptureRefundPosition =
  StoreApiOrderTransactionCaptureRefundPosition & {
    orderLineItem?: OrderLineItem;
    orderTransactionCaptureRefund?: OrderTransactionCaptureRefund;
  };
