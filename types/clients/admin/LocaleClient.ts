import { Locale } from "#types/api/admin/locale/Locale";
import { Language } from "#types/api/admin/locale/Language";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Locales **/

export interface LocaleListResponse {
  total?: number;
  data?: Array<Locale>;
}

export type LocaleCreateRequest = Locale;
export type LocaleCreateResponse = { data: Locale };

export type LocaleListSearchRequest = Criteria;
export interface LocaleListSearchResponse {
  total?: number;
  data?: Array<Locale>;
}

export interface LocaleSingleResponse {
  data: Locale;
}

export type LocaleUpdateRequest = Locale;
export type LocaleUpdateResponse = { data: Locale };

export interface LocaleAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface LocaleAggregationResponse {
  total?: number;
  data?: Array<Locale>;
}

/** Languages **/

export interface LanguageListResponse {
  total?: number;
  data?: Array<Language>;
}

export type LanguageCreateRequest = Language;
export type LanguageCreateResponse = { data: Language };

export type LanguageListSearchRequest = Criteria;
export interface LanguageListSearchResponse {
  total?: number;
  data?: Array<Language>;
}

export interface LanguageSingleResponse {
  data: Language;
}

export type LanguageUpdateRequest = Language;
export type LanguageUpdateResponse = { data: Language };

export interface LanguageAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface LanguageAggregationResponse {
  total?: number;
  data?: Array<Language>;
}
