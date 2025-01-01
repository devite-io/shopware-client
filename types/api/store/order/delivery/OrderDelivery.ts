import { CalculatedPrice } from "../../price/CalculatedPrice";
import { StateMachineState } from "../../StateMachineState";
import { OrderAddress } from "../OrderAddress";
import { ShippingMethod } from "../../shippingMethod/ShippingMethod";
import { OrderDeliveryPosition } from "./OrderDeliveryPosition";

export interface OrderDelivery {
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
}
