import { CartDeliveryDate } from "./CartDeliveryDate";
import { CartDeliveryShippingLocation } from "./CartDeliveryShippingLocation";
import { CountryState } from "../../country/CountryState";
import { CartDeliveryPosition } from "./CartDeliveryPosition";
import { CalculatedPrice } from "../../price/CalculatedPrice";
import { ShippingMethod } from "../../shippingMethod/ShippingMethod";

export interface CartDelivery {
  deliveryDate?: CartDeliveryDate;
  location?: CartDeliveryShippingLocation & { state?: CountryState };
  positions?: Array<CartDeliveryPosition>;
  shippingCosts?: CalculatedPrice;
  shippingMethod?: ShippingMethod;
}
