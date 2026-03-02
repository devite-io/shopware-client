import { OrderDelivery as StoreApiOrderDelivery } from "#types/api/store/order/delivery/OrderDelivery";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { StateMachineState } from "#types/api/store";
import { OrderAddress } from "../OrderAddress";
import { OrderDeliveryPosition } from "./OrderDeliveryPosition";

export type OrderDelivery = StoreApiOrderDelivery & {
  shippingOrderAddress?: OrderAddress;
  stateMachineState?: StateMachineState;
  positions?: Array<OrderDeliveryPosition>;
  customFields?: GenericRecord;
};
