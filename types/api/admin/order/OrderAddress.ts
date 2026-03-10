import { OrderAddress as StoreApiOrderAddress } from "#types/api/store/order/OrderAddress";
import { Country } from "../country/Country";
import { CountryState } from "../country/CountryState";
import { Salutation } from "../Salutation";

export type OrderAddress = Omit<StoreApiOrderAddress, "salutation" | "country" | "countryState"> & {
  salutation: Salutation;
  country?: Country;
  countryState?: CountryState;
};
