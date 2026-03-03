import { CustomerAddress as StoreApiCustomerAddress } from "#types/api/store/customer/address/CustomerAddress";
import { Country } from "../country/Country";
import { CountryState } from "../country/CountryState";
import { Salutation } from "../Salutation";

export type CustomerAddress = Omit<
  StoreApiCustomerAddress,
  "salutation" | "country" | "countryState"
> & {
  salutation?: Salutation;
  country?: Country;
  countryState?: CountryState;
};
