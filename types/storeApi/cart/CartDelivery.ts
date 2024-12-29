import { CartDeliveryDate } from "./CartDeliveryDate";
import { CartDeliveryShippingLocation } from "./CartDeliveryShippingLocation";
import { CartDeliveryPosition } from "./CartDeliveryPosition";
import { ShippingMethod } from "#types/storeApi/shippingMethod/ShippingMethod";
import { CountryState } from "#types/storeApi/country/CountryState";
import { CalculatedPrice } from "#types/storeApi/price/CalculatedPrice";

export type CartDelivery = {
  deliveryDate?: CartDeliveryDate;
  location?: CartDeliveryShippingLocation & { state?: CountryState };
  positions?: Array<CartDeliveryPosition>;
  shippingCosts?: CalculatedPrice;
  shippingMethod?: ShippingMethod;
};
