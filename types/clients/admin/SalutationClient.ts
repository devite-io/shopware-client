import { Salutation } from "#types/api/admin/Salutation";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

export interface SalutationListResponse {
  total?: number;
  data?: Array<Salutation>;
}

export type SalutationCreateRequest = Salutation;
export type SalutationCreateResponse = { data: Salutation };

export type SalutationListSearchRequest = Criteria;
export interface SalutationListSearchResponse {
  total?: number;
  data?: Array<Salutation>;
}

export interface SalutationSingleResponse {
  data: Salutation;
}

export type SalutationUpdateRequest = Salutation;
export type SalutationUpdateResponse = { data: Salutation };

export interface SalutationAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface SalutationAggregationResponse {
  total?: number;
  data?: Array<Salutation>;
}
