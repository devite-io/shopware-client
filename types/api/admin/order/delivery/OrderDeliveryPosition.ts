import { OrderDeliveryPosition as StoreApiOrderDeliveryPosition } from "#types/api/store/order/delivery/OrderDeliveryPosition";
import { OrderLineItem } from "../lineItem/OrderLineItem";

export type OrderDeliveryPosition = StoreApiOrderDeliveryPosition & {
  orderLineItem?: OrderLineItem;
};
