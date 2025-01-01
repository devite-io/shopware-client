import { OrderLineItemDownload as StoreApiOrderLineItemDownload } from "#types/api/store/order/OrderLineItemDownload";
import { OrderLineItem } from "./OrderLineItem";
import { Media } from "../../media/Media";

export type OrderLineItemDownload = StoreApiOrderLineItemDownload & {
  orderLineItem?: OrderLineItem;
  media?: Media;
};
