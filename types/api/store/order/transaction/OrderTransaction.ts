import { CalculatedPrice } from "../../price/CalculatedPrice";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { StateMachineState } from "../../StateMachineState";
import { PaymentMethod } from "../../PaymentMethod";
import { OrderTransactionCapture } from "./capture/OrderTransactionCapture";

export interface OrderTransaction {
  id: string;
  versionId?: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  orderId: string;
  orderVersionId?: string;
  stateId: string;
  paymentMethodId: string;
  paymentMethod?: PaymentMethod;
  captures?: Array<OrderTransactionCapture>;
  stateMachineState?: StateMachineState;
  amount: CalculatedPrice;
  shippingCosts?: CalculatedPrice;
  customFields?: GenericRecord;
}
