import { GenericRecord } from "../GenericRecord";
import { StateMachineState } from "../StateMachineState";
import { OrderTransactionCapture } from "./OrderTransactionCapture";
import { OrderTransactionCaptureRefundPosition } from "./OrderTransactionCaptureRefundPosition";
import { CalculatedPrice } from "#types/storeApi/price/CalculatedPrice";

export type OrderTransactionCaptureRefund = {
  id: string;
  versionId?: string;
  captureId: string;
  captureVersionId?: string;
  stateId: string;
  externalReference?: string;
  reason?: string;
  amount: CalculatedPrice;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  stateMachineState?: StateMachineState;
  transactionCapture?: OrderTransactionCapture;
  positions?: Array<OrderTransactionCaptureRefundPosition>;
  shippingCosts?: CalculatedPrice;
};
