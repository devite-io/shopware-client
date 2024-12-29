import { GenericRecord } from "../GenericRecord";
import { StateMachineState } from "../StateMachineState";
import { OrderTransaction } from "./OrderTransaction";
import { OrderTransactionCaptureRefund } from "./OrderTransactionCaptureRefund";
import { CalculatedPrice } from "#types/storeApi/price/CalculatedPrice";

export type OrderTransactionCapture = {
  id: string;
  versionId?: string;
  orderTransactionId: string;
  orderTransactionVersionId?: string;
  stateId: string;
  externalReference?: string;
  amount: CalculatedPrice;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  stateMachineState?: StateMachineState;
  transaction?: OrderTransaction;
  refunds?: Array<OrderTransactionCaptureRefund>;
  shippingCosts?: CalculatedPrice;
};
