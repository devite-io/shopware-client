import { CartDeliveryDate, CartDeliveryPosition, CartDeliveryShippingLocation } from ".";
import { CountryState } from "../country";
import { CalculatedPrice } from "../price";
import { ShippingMethod } from "../shippingMethod";

export type CartDelivery = {
  deliveryDate?: CartDeliveryDate;
  location?: CartDeliveryShippingLocation & { state?: CountryState };
  positions?: Array<CartDeliveryPosition>;
  shippingCosts?: CalculatedPrice;
  shippingMethod?: ShippingMethod;
};
