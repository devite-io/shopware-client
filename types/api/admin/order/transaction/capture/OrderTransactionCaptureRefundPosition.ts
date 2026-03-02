import { OrderTransactionCaptureRefundPosition as StoreApiOrderTransactionCaptureRefundPosition } from "#types/api/store/order/transaction/capture/OrderTransactionCaptureRefundPosition";
import { OrderLineItem } from "../../lineItem/OrderLineItem";
import { OrderTransactionCaptureRefund } from "./OrderTransactionCaptureRefund";

export type OrderTransactionCaptureRefundPosition =
  StoreApiOrderTransactionCaptureRefundPosition & {
    orderTransactionCaptureRefund?: OrderTransactionCaptureRefund;
    orderLineItem?: OrderLineItem;
  };
