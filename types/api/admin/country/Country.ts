import { Country as StoreApiCountry } from "#types/api/store/country/Country";
import { CountryState } from "./CountryState";

export type Country = StoreApiCountry & {
  states?: Array<CountryState>;
};
