import { SeoUrl } from "#types/api/admin/seo/SeoUrl";
import { SeoUrlTemplate } from "#types/api/admin/seo/SeoUrlTemplate";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Urls **/

export interface UrlListResponse {
  total?: number;
  data?: Array<SeoUrl>;
}

export type UrlCreateRequest = SeoUrl;
export type UrlCreateResponse = { data: SeoUrl };

export type UrlListSearchRequest = Criteria;
export interface UrlListSearchResponse {
  total?: number;
  data?: Array<SeoUrl>;
}

export interface UrlSingleResponse {
  data: SeoUrl;
}

export type UrlUpdateRequest = SeoUrl;
export type UrlUpdateResponse = { data: SeoUrl };

export interface UrlAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface UrlAggregationResponse {
  total?: number;
  data?: Array<SeoUrl>;
}

/** Url Templates **/

export interface UrlTemplateListResponse {
  total?: number;
  data?: Array<SeoUrlTemplate>;
}

export type UrlTemplateCreateRequest = SeoUrlTemplate;
export type UrlTemplateCreateResponse = { data: SeoUrlTemplate };

export type UrlTemplateListSearchRequest = Criteria;
export interface UrlTemplateListSearchResponse {
  total?: number;
  data?: Array<SeoUrlTemplate>;
}

export interface UrlTemplateSingleResponse {
  data: SeoUrlTemplate;
}

export type UrlTemplateUpdateRequest = SeoUrlTemplate;
export type UrlTemplateUpdateResponse = { data: SeoUrlTemplate };

export interface UrlTemplateAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface UrlTemplateAggregationResponse {
  total?: number;
  data?: Array<SeoUrlTemplate>;
}
