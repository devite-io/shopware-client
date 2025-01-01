import { Rounding } from "#types/api/global/Rounding";
import { Currency } from "./Currency";
import { Country } from "../country/Country";

export interface CurrencyCountryRounding {
  id: string;
  currencyId: string;
  countryId: string;
  itemRounding: Rounding;
  totalRounding: Rounding;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  currency?: Currency;
  country?: Country;
}
