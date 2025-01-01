import { CountryState as StoreApiCountryState } from "#types/api/store/country/CountryState";
import { Country } from "./Country";
import { CustomerAddress } from "../customer/CustomerAddress";
import { OrderAddress } from "../order/OrderAddress";

export type CountryState = StoreApiCountryState & {
  country?: Country;
  customerAddresses?: Array<CustomerAddress>;
  orderAddresses?: Array<OrderAddress>;
};
