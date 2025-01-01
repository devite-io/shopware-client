import { CalculatedPrice } from "#types/api/store";
import { GenericRecord } from "#types/api/global/GenericRecord";

export interface OrderReturnLineItem {
  id?: string;
  versionId?: string;
  orderReturnId?: string;
  orderReturnVersionId?: string;
  orderLineItemId?: string;
  orderLineItemVersionId?: string;
  reasonId?: string;
  quantity?: number;
  shippingCosts?: CalculatedPrice;
  refundAmount?: number;
  restockQuantity?: any;
  internalComment?: string;
  customFields?: GenericRecord;
  stateId?: string;
}
