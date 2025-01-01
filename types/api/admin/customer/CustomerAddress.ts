import { CustomerAddress as StoreApiCustomerAddress } from "#types/api/store/customer/address/CustomerAddress";
import { Customer } from "./Customer";
import { Country } from "../country/Country";
import { CountryState } from "../country/CountryState";
import { Salutation } from "../Salutation";

export type CustomerAddress = StoreApiCustomerAddress & {
  customer?: Customer;
  country?: Country;
  countryState?: CountryState;
  salutation?: Salutation;
};
