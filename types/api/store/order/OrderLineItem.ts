import { GenericRecord } from "#types/api/global/GenericRecord";
import { OrderLineItemDownload } from "./OrderLineItemDownload";
import { CartLineItem } from "../cart/lineItem/CartLineItem";

export interface OrderLineItem extends Omit<CartLineItem, "apiAlias"> {
  apiAlias: "order_line_item";
  readonly createdAt: string;
  readonly updatedAt?: string;
  orderId: string;
  unitPrice?: number;
  totalPrice?: number;
  downloads?: Array<OrderLineItemDownload>;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
