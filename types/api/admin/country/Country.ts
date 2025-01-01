import { Country as StoreApiCountry } from "#types/api/store/country/Country";
import { CountryState } from "./CountryState";
import { CustomerAddress } from "../customer/CustomerAddress";
import { OrderAddress } from "../order/OrderAddress";
import { SalesChannel } from "../salesChannel/SalesChannel";
import { TaxRule } from "../tax/rule/TaxRule";
import { CurrencyCountryRounding } from "../currency/CurrencyCountryRounding";

export type Country = StoreApiCountry & {
  states?: Array<CountryState>;
  customerAddresses?: Array<CustomerAddress>;
  orderAddresses?: Array<OrderAddress>;
  salesChannelDefaultAssignments?: Array<SalesChannel>;
  salesChannels?: Array<SalesChannel>;
  taxRules?: Array<TaxRule>;
  currencyCountryRoundings?: Array<CurrencyCountryRounding>;
};
