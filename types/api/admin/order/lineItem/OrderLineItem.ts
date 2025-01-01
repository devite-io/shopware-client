import { OrderLineItem as StoreApiOrderLineItem } from "#types/api/store/order/OrderLineItem";
import { Media } from "../../media/Media";
import { OrderDeliveryPosition } from "../delivery/OrderDeliveryPosition";
import { OrderTransactionCaptureRefundPosition } from "../transaction/capture/OrderTransactionCaptureRefundPosition";
import { OrderLineItemDownload } from "./OrderLineItemDownload";

export type OrderLineItem = StoreApiOrderLineItem & {
  cover?: Media;
  orderDeliveryPositions?: Array<OrderDeliveryPosition>;
  orderTransactionCaptureRefundPositions?: Array<OrderTransactionCaptureRefundPosition>;
  downloads?: Array<OrderLineItemDownload>;
  parent?: OrderLineItem;
  children: Array<OrderLineItem>;
};
