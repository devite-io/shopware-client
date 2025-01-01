import { Integration } from "#types/api/admin/integration/Integration";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

export interface IntegrationListResponse {
  total?: number;
  data?: Array<Integration>;
}

export type IntegrationCreateRequest = Integration;
export type IntegrationCreateResponse = { data: Integration };

export type IntegrationListSearchRequest = Criteria;
export interface IntegrationListSearchResponse {
  total?: number;
  data?: Array<Integration>;
}

export interface IntegrationSingleResponse {
  data: Integration;
}

export type IntegrationUpdateRequest = Integration;
export type IntegrationUpdateResponse = { data: Integration };

export interface IntegrationAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface IntegrationAggregationResponse {
  total?: number;
  data?: Array<Integration>;
}
