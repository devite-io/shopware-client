import { SalesChannel } from "#types/api/admin/salesChannel/SalesChannel";
import { SalesChannelAnalytics } from "#types/api/admin/salesChannel/SalesChannelAnalytics";
import { SalesChannelDomain } from "#types/api/admin/salesChannel/SalesChannelDomain";
import { SalesChannelType } from "#types/api/admin/salesChannel/SalesChannelType";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Sales Channels **/

export interface SalesChannelListResponse {
  total?: number;
  data?: Array<SalesChannel>;
}

export type SalesChannelCreateRequest = SalesChannel;
export type SalesChannelCreateResponse = { data: SalesChannel };

export type SalesChannelListSearchRequest = Criteria;
export interface SalesChannelListSearchResponse {
  total?: number;
  data?: Array<SalesChannel>;
}

export interface SalesChannelSingleResponse {
  data: SalesChannel;
}

export type SalesChannelUpdateRequest = SalesChannel;
export type SalesChannelUpdateResponse = { data: SalesChannel };

export interface SalesChannelAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface SalesChannelAggregationResponse {
  total?: number;
  data?: Array<SalesChannel>;
}

/** Analytics **/

export interface AnalyticsListResponse {
  total?: number;
  data?: Array<SalesChannelAnalytics>;
}

export type AnalyticsCreateRequest = SalesChannelAnalytics;
export type AnalyticsCreateResponse = { data: SalesChannelAnalytics };

export type AnalyticsListSearchRequest = Criteria;
export interface AnalyticsListSearchResponse {
  total?: number;
  data?: Array<SalesChannelAnalytics>;
}

export interface AnalyticsSingleResponse {
  data: SalesChannelAnalytics;
}

export type AnalyticsUpdateRequest = SalesChannelAnalytics;
export type AnalyticsUpdateResponse = { data: SalesChannelAnalytics };

export interface AnalyticsAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface AnalyticsAggregationResponse {
  total?: number;
  data?: Array<SalesChannelAnalytics>;
}

/** Domains **/

export interface DomainListResponse {
  total?: number;
  data?: Array<SalesChannelDomain>;
}

export type DomainCreateRequest = SalesChannelDomain;
export type DomainCreateResponse = { data: SalesChannelDomain };

export type DomainListSearchRequest = Criteria;
export interface DomainListSearchResponse {
  total?: number;
  data?: Array<SalesChannelDomain>;
}

export interface DomainSingleResponse {
  data: SalesChannelDomain;
}

export type DomainUpdateRequest = SalesChannelDomain;
export type DomainUpdateResponse = { data: SalesChannelDomain };

export interface DomainAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface DomainAggregationResponse {
  total?: number;
  data?: Array<SalesChannelDomain>;
}

/** Types **/

export interface TypeListResponse {
  total?: number;
  data?: Array<SalesChannelType>;
}

export type TypeCreateRequest = SalesChannelType;
export type TypeCreateResponse = { data: SalesChannelType };

export type TypeListSearchRequest = Criteria;
export interface TypeListSearchResponse {
  total?: number;
  data?: Array<SalesChannelType>;
}

export interface TypeSingleResponse {
  data: SalesChannelType;
}

export type TypeUpdateRequest = SalesChannelType;
export type TypeUpdateResponse = { data: SalesChannelType };

export interface TypeAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface TypeAggregationResponse {
  total?: number;
  data?: Array<SalesChannelType>;
}
