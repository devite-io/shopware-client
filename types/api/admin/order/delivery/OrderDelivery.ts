import { OrderDelivery as StoreApiOrderDelivery } from "#types/api/store/order/delivery/OrderDelivery";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { StateMachineState } from "#types/api/store";
import { Order } from "../Order";
import { OrderAddress } from "../OrderAddress";
import { OrderDeliveryPosition } from "./OrderDeliveryPosition";

export type OrderDelivery = StoreApiOrderDelivery & {
  customFields?: GenericRecord;
  stateMachineState?: StateMachineState;
  order: Order;
  shippingOrderAddress?: OrderAddress;
  positions?: Array<OrderDeliveryPosition>;
};
