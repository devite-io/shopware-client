import { CalculatedPrice } from "../../../price/CalculatedPrice";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { StateMachineState } from "../../../StateMachineState";
import { OrderTransactionCapture } from "./OrderTransactionCapture";
import { OrderTransactionCaptureRefundPosition } from "./OrderTransactionCaptureRefundPosition";

export interface OrderTransactionCaptureRefund {
  id: string;
  versionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  externalReference?: string;
  reason?: string;
  stateId: string;
  stateMachineState?: StateMachineState;
  captureId: string;
  captureVersionId?: string;
  transactionCapture?: OrderTransactionCapture;
  amount: CalculatedPrice;
  shippingCosts?: CalculatedPrice;
  positions?: Array<OrderTransactionCaptureRefundPosition>;
  customFields?: GenericRecord;
}
