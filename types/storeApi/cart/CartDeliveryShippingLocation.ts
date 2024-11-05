import { Country } from "../country";
import { CustomerAddress } from "../customer";

export type CartDeliveryShippingLocation = {
  apiAlias?: "cart_delivery_shipping_location";
  country?: Country;
  address?: CustomerAddress;
};
