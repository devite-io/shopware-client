import { Criteria } from "#types/storeApi/query/Criteria";
import { EntitySearchResult } from "#types/storeApi/EntitySearchResult";
import { Country } from "#types/storeApi/country/Country";
import { CountryState } from "#types/storeApi/country/CountryState";
import { Currency } from "#types/storeApi/Currency";
import { Language } from "#types/storeApi/locale/Language";
import { Salutation } from "#types/storeApi/Salutation";
import { ShippingMethod } from "#types/storeApi/shippingMethod/ShippingMethod";
import { PaymentMethod } from "#types/storeApi/PaymentMethod";

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
export type PaymentMethodListResponse = {
  total?: number;
  aggregations?: object;
  elements?: Array<PaymentMethod>;
};
