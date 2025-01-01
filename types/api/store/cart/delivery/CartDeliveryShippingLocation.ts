import { Country } from "../../country/Country";
import { CustomerAddress } from "../../customer/address/CustomerAddress";

export interface CartDeliveryShippingLocation {
  apiAlias?: "cart_delivery_shipping_location";
  country?: Country;
  address?: CustomerAddress;
}
