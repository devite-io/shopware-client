import Client from "../Client";
import { Currency } from "#types/api/admin/currency/Currency";
import { CurrencyCountryRounding } from "#types/api/admin/currency/CurrencyCountryRounding";
import createRestEndpoint from "../../utils/createRestEndpoint";

class CountryClient extends Client {
  public currencies = createRestEndpoint<Currency>(this, "/currency", "currency");
  public currencyRoundings = createRestEndpoint<CurrencyCountryRounding>(
    this,
    "currency-country-rounding",
    "currency country rounding"
  );
}

export default CountryClient;
