import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";
import { Currency } from "#types/api/admin/currency/Currency";
import { CurrencyCountryRounding } from "#types/api/admin/currency/CurrencyCountryRounding";

/** Currency **/

export interface CurrencyListResponse {
  total?: number;
  data?: Array<Currency>;
}

export type CurrencyCreateRequest = Currency;
export type CurrencyCreateResponse = { data: Currency };

export type CurrencyListSearchRequest = Criteria;
export interface CurrencyListSearchResponse {
  total?: number;
  data?: Array<Currency>;
}

export interface CurrencySingleResponse {
  data: Currency;
}

export type CurrencyUpdateRequest = Currency;
export type CurrencyUpdateResponse = { data: Currency };

export interface CurrencyAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CurrencyAggregationResponse {
  total?: number;
  data?: Array<Currency>;
}

/** Country Roundings **/

export interface CountryRoundingListResponse {
  total?: number;
  data?: Array<CurrencyCountryRounding>;
}

export type CountryRoundingCreateRequest = CurrencyCountryRounding;
export type CountryRoundingCreateResponse = { data: CurrencyCountryRounding };

export type CountryRoundingListSearchRequest = Criteria;
export interface CountryRoundingListSearchResponse {
  total?: number;
  data?: Array<CurrencyCountryRounding>;
}

export interface CountryRoundingSingleResponse {
  data: CurrencyCountryRounding;
}

export type CountryRoundingUpdateRequest = CurrencyCountryRounding;
export type CountryRoundingUpdateResponse = { data: CurrencyCountryRounding };

export interface CountryRoundingAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CountryRoundingAggregationResponse {
  total?: number;
  data?: Array<CurrencyCountryRounding>;
}
