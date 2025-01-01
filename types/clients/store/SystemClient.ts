import { Criteria } from "#types/api/global/query/Criteria";
import { EntitySearchResult } from "#types/api/store/EntitySearchResult";
import { Country } from "#types/api/store/country/Country";
import { CountryState } from "#types/api/store/country/CountryState";
import { Currency } from "#types/api/store/Currency";
import { Language } from "#types/api/store/locale/Language";
import { Salutation } from "#types/api/store/Salutation";
import { ShippingMethod } from "#types/api/store/shippingMethod/ShippingMethod";
import { PaymentMethod } from "#types/api/store/PaymentMethod";

export type CountryListRequest = Criteria;
export type CountryListResponse = EntitySearchResult & { elements?: Array<Country> };

export type CountryStateListRequest = Criteria;
export type CountryStateListResponse = EntitySearchResult & { elements?: Array<CountryState> };

export type CurrencyListRequest = Criteria;
export type CurrencyListResponse = EntitySearchResult & { elements?: Array<Currency> };

export type LanguageListRequest = Criteria;
export type LanguageListResponse = EntitySearchResult & { elements?: Array<Language> };

export type SalutationListRequest = Criteria;
export type SalutationListResponse = EntitySearchResult & { elements?: Array<Salutation> };

export type ShippingMethodListRequest = Criteria;
export type ShippingMethodListResponse = EntitySearchResult & { elements?: Array<ShippingMethod> };

export type PaymentMethodListRequest = Criteria & { onlyAvailable?: boolean };
export interface PaymentMethodListResponse {
  total?: number;
  aggregations?: object;
  elements?: Array<PaymentMethod>;
}
