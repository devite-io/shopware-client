import { OrderTransaction as StoreApiOrderTransaction } from "#types/api/store/order/transaction/OrderTransaction";
import { StateMachineState } from "../../stateMachine/StateMachineState";
import { Order } from "../Order";
import { OrderTransactionCapture } from "./capture/OrderTransactionCapture";

export type OrderTransaction = StoreApiOrderTransaction & {
  stateMachineState?: StateMachineState;
  order?: Order;
  captures?: Array<OrderTransactionCapture>;
};
