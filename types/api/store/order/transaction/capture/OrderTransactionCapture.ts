import { CalculatedPrice } from "../../../price/CalculatedPrice";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { StateMachineState } from "../../../StateMachineState";
import { OrderTransaction } from "../OrderTransaction";
import { OrderTransactionCaptureRefund } from "./OrderTransactionCaptureRefund";

export interface OrderTransactionCapture {
  id: string;
  versionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  externalReference?: string;
  stateId: string;
  stateMachineState?: StateMachineState;
  amount: CalculatedPrice;
  shippingCosts?: CalculatedPrice;
  refunds?: Array<OrderTransactionCaptureRefund>;
  orderTransactionId: string;
  orderTransactionVersionId?: string;
  transaction?: OrderTransaction;
  customFields?: GenericRecord;
}
