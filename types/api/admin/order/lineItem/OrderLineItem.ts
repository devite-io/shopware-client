import { OrderLineItem as StoreApiOrderLineItem } from "#types/api/store/order/OrderLineItem";
import { Media } from "../../media/Media";
import { OrderLineItemDownload } from "./OrderLineItemDownload";

export type OrderLineItem = StoreApiOrderLineItem & {
  parent?: OrderLineItem;
  children: Array<OrderLineItem>;
  cover?: Media;
  downloads?: Array<OrderLineItemDownload>;
};
