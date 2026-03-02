import { CalculatedPrice } from "../../price/CalculatedPrice";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { OrderLineItem } from "../OrderLineItem";

export interface OrderDeliveryPosition {
  id: string;
  versionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  quantity?: number;
  unitPrice?: number;
  totalPrice?: number;
  price: CalculatedPrice;
  orderDeliveryId: string;
  orderDeliveryVersionId?: string;
  orderLineItemId: string;
  orderLineItemVersionId?: string;
  orderLineItem?: OrderLineItem;
  customFields?: GenericRecord;
}
