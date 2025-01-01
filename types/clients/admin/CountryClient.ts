import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";
import { Country } from "#types/api/admin/country/Country";
import { CountryState } from "#types/api/admin/country/CountryState";

/** Country **/

export interface CountryListResponse {
  total?: number;
  data?: Array<Country>;
}

export type CountryCreateRequest = Country;
export type CountryCreateResponse = { data: Country };

export type CountryListSearchRequest = Criteria;
export interface CountryListSearchResponse {
  total?: number;
  data?: Array<Country>;
}

export interface CountrySingleResponse {
  data: Country;
}

export type CountryUpdateRequest = Country;
export type CountryUpdateResponse = { data: Country };

export interface CountryAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CountryAggregationResponse {
  total?: number;
  data?: Array<Country>;
}

/** States **/

export interface StateListResponse {
  total?: number;
  data?: Array<CountryState>;
}

export type StateCreateRequest = CountryState;
export type StateCreateResponse = { data: CountryState };

export type StateListSearchRequest = Criteria;
export interface StateListSearchResponse {
  total?: number;
  data?: Array<CountryState>;
}

export interface StateSingleResponse {
  data: CountryState;
}

export type StateUpdateRequest = CountryState;
export type StateUpdateResponse = { data: CountryState };

export interface StateAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface StateAggregationResponse {
  total?: number;
  data?: Array<CountryState>;
}
