import { StateMachineState as StoreApiStateMachineState } from "#types/api/store/StateMachineState";
import { StateMachine } from "./StateMachine";
import { StateMachineTransition } from "./StateMachineTransition";
import { OrderTransaction } from "../order/transaction/OrderTransaction";
import { OrderDelivery } from "../order/delivery/OrderDelivery";
import { Order } from "../order/Order";
import { OrderTransactionCapture } from "../order/transaction/capture/OrderTransactionCapture";
import { OrderTransactionCaptureRefund } from "../order/transaction/capture/OrderTransactionCaptureRefund";
import { StateMachineHistory } from "./StateMachineHistory";

export type StateMachineState = StoreApiStateMachineState & {
  stateMachineId: string;
  stateMachine?: StateMachine;
  fromStateMachineTransitions: Array<StateMachineTransition>;
  toStateMachineTransitions: Array<StateMachineTransition>;
  orderTransitions: Array<OrderTransaction>;
  orderDeliveries: Array<OrderDelivery>;
  orders?: Array<Order>;
  orderTransactionCaptures: Array<OrderTransactionCapture>;
  orderTransactionCaptureRefunds: Array<OrderTransactionCaptureRefund>;
  toStateMachineHistoryEntries: Array<StateMachineHistory>;
  fromStateMachineHistoryEntries: Array<StateMachineHistory>;
};
