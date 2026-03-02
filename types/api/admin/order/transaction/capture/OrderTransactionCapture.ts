import { OrderTransactionCapture as StoreApiOrderTransactionCapture } from "#types/api/store/order/transaction/capture/OrderTransactionCapture";
import { StateMachineState } from "../../../stateMachine/StateMachineState";
import { OrderTransaction } from "../OrderTransaction";
import { OrderTransactionCaptureRefund } from "./OrderTransactionCaptureRefund";

export type OrderTransactionCapture = StoreApiOrderTransactionCapture & {
  stateMachineState?: StateMachineState;
  refunds?: Array<OrderTransactionCaptureRefund>;
  transaction?: OrderTransaction;
};
