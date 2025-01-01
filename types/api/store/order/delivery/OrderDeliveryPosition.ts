import { CalculatedPrice } from "../../price/CalculatedPrice";
import { GenericRecord } from "#types/api/global/GenericRecord";

export interface OrderDeliveryPosition {
  id: string;
  versionId?: string;
  orderDeliveryId: string;
  orderDeliveryVersionId?: string;
  orderLineItemId: string;
  orderLineItemVersionId?: string;
  price: CalculatedPrice;
  unitPrice?: number;
  totalPrice?: number;
  quantity?: number;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
}
