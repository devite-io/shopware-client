import { Country as StoreApiCountry } from "#types/api/store/country/Country";
import { CountryState } from "./CountryState";

export type Country = Omit<StoreApiCountry, "states"> & {
  states?: Array<CountryState>;
};
