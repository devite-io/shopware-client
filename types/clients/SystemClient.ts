import {
  Country,
  CountryState,
  Criteria,
  Currency,
  EntitySearchResult,
  Language,
  Salutation
} from "../storeApi";

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
