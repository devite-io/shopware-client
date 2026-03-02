import { CartDeliveryDate } from "./CartDeliveryDate";
import { CartDeliveryPosition } from "./CartDeliveryPosition";
import { CalculatedPrice } from "../../price/CalculatedPrice";
import { ShippingMethod } from "../../shippingMethod/ShippingMethod";

export interface CartDelivery {
  deliveryDate?: CartDeliveryDate;
  positions?: Array<CartDeliveryPosition>;
  shippingCosts?: CalculatedPrice;
  shippingMethod?: ShippingMethod;
}
