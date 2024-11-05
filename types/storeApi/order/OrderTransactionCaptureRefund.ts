import { CalculatedPrice } from "../price";
import { GenericRecord } from "../GenericRecord";
import { StateMachineState } from "../StateMachineState";
import { OrderTransactionCapture, OrderTransactionCaptureRefundPosition } from ".";

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
