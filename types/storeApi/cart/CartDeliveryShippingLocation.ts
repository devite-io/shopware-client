import { CustomerAddress } from "#types/storeApi/customer/CustomerAddress";
import { Country } from "#types/storeApi/country/Country";

export type CartDeliveryShippingLocation = {
  apiAlias?: "cart_delivery_shipping_location";
  country?: Country;
  address?: CustomerAddress;
};
