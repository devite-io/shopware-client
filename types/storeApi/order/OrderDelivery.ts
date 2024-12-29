import { OrderAddress } from "./OrderAddress";
import { OrderDeliveryPosition } from "./OrderDeliveryPosition";
import { CalculatedPrice } from "#types/storeApi/price/CalculatedPrice";
import { StateMachineState } from "#types/storeApi/StateMachineState";
import { ShippingMethod } from "#types/storeApi/shippingMethod/ShippingMethod";

export type OrderDelivery = {
  id: string;
  versionId?: string;
  orderId: string;
  orderVersionId?: string;
  shippingOrderAddressId: string;
  shippingOrderAddressVersionId?: string;
  shippingMethodId: string;
  stateId: string;
  trackingCodes?: Array<string>;
  shippingDateEarliest: string;
  shippingDateLatest: string;
  shippingCosts?: CalculatedPrice;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  stateMachineState?: StateMachineState;
  shippingOrderAddress?: OrderAddress;
  shippingMethod?: ShippingMethod;
  positions?: Array<OrderDeliveryPosition>;
};
