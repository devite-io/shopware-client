import { CalculatedPrice } from "../../price/CalculatedPrice";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { StateMachineState } from "../../StateMachineState";
import { OrderTransactionCapture } from "./OrderTransactionCapture";
import { OrderTransactionCaptureRefundPosition } from "./OrderTransactionCaptureRefundPosition";

export interface OrderTransactionCaptureRefund {
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
}
