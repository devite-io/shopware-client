import { CalculatedPrice } from "../price";
import { StateMachineState } from "../StateMachineState";
import { OrderAddress, OrderDeliveryPosition } from ".";
import { ShippingMethod } from "../shippingMethod";

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
