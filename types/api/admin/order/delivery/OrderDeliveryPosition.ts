import { OrderDeliveryPosition as StoreApiOrderDeliveryPosition } from "#types/api/store/order/delivery/OrderDeliveryPosition";
import { OrderDelivery } from "./OrderDelivery";
import { OrderLineItem } from "../lineItem/OrderLineItem";

export type OrderDeliveryPosition = StoreApiOrderDeliveryPosition & {
  orderDelivery?: OrderDelivery;
  orderLineItem?: OrderLineItem;
};
