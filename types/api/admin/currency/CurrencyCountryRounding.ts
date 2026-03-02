import { Rounding } from "#types/api/global/Rounding";
import { Currency } from "./Currency";
import { Country } from "../country/Country";

export interface CurrencyCountryRounding {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  currencyId: string;
  currency?: Currency;
  countryId: string;
  country?: Country;
  itemRounding: Rounding;
  totalRounding: Rounding;
}
