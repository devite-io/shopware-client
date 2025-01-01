import { OrderTransactionCapture as StoreApiOrderTransactionCapture } from "#types/api/store/order/transaction/OrderTransactionCapture";
import { StateMachineState } from "../../../stateMachine/StateMachineState";
import { OrderTransaction } from "../OrderTransaction";
import { OrderTransactionCaptureRefund } from "./OrderTransactionCaptureRefund";

export type OrderTransactionCapture = StoreApiOrderTransactionCapture & {
  stateMachineState?: StateMachineState;
  transaction?: OrderTransaction;
  refunds?: Array<OrderTransactionCaptureRefund>;
};
