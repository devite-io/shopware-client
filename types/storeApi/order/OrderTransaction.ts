import { CalculatedPrice } from "../price";
import { GenericRecord } from "../GenericRecord";
import { StateMachineState } from "../StateMachineState";
import { PaymentMethod } from "../PaymentMethod";
import { OrderTransactionCapture } from ".";

export type OrderTransaction = {
  id: string;
  versionId?: string;
  orderId: string;
  orderVersionId?: string;
  paymentMethodId: string;
  amount: CalculatedPrice;
  validationData?: object;
  stateId: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  stateMachineState?: StateMachineState;
  paymentMethod?: PaymentMethod;
  captures?: Array<OrderTransactionCapture>;
  shippingCosts?: CalculatedPrice;
};
