import { OrderTransactionCaptureRefund as StoreApiOrderTransactionCaptureRefund } from "#types/api/store/order/transaction/capture/OrderTransactionCaptureRefund";
import { StateMachineState } from "../../../stateMachine/StateMachineState";
import { OrderTransactionCapture } from "./OrderTransactionCapture";
import { OrderTransactionCaptureRefundPosition } from "./OrderTransactionCaptureRefundPosition";

export type OrderTransactionCaptureRefund = StoreApiOrderTransactionCaptureRefund & {
  stateMachineState?: StateMachineState;
  transactionCapture?: OrderTransactionCapture;
  positions?: Array<OrderTransactionCaptureRefundPosition>;
};
