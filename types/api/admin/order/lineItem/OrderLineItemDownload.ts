import { OrderLineItemDownload as StoreApiOrderLineItemDownload } from "#types/api/store/order/OrderLineItemDownload";
import { OrderLineItem } from "./OrderLineItem";
import { Media } from "../../media/Media";

export type OrderLineItemDownload = Omit<
  StoreApiOrderLineItemDownload,
  "orderLineItem" | "media"
> & {
  orderLineItem?: OrderLineItem;
  media?: Media;
};
