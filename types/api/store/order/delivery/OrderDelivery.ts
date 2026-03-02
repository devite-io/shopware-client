import { CalculatedPrice } from "../../price/CalculatedPrice";
import { StateMachineState } from "../../StateMachineState";
import { OrderAddress } from "../OrderAddress";
import { ShippingMethod } from "../../shippingMethod/ShippingMethod";
import { OrderDeliveryPosition } from "./OrderDeliveryPosition";

export interface OrderDelivery {
  id: string;
  versionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  orderId: string;
  orderVersionId?: string;
  shippingOrderAddressId: string;
  shippingOrderAddressVersionId?: string;
  shippingOrderAddress?: OrderAddress;
  shippingMethodId: string;
  shippingMethod?: ShippingMethod;
  shippingCosts?: CalculatedPrice;
  stateId: string;
  stateMachineState?: StateMachineState;
  positions?: Array<OrderDeliveryPosition>;
  trackingCodes?: Array<string>;
  shippingDateEarliest: string;
  shippingDateLatest: string;
}
