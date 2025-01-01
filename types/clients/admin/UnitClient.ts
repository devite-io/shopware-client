import { Unit } from "#types/api/admin/Unit";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

export interface UnitListResponse {
  total?: number;
  data?: Array<Unit>;
}

export type UnitCreateRequest = Unit;
export type UnitCreateResponse = { data: Unit };

export type UnitListSearchRequest = Criteria;
export interface UnitListSearchResponse {
  total?: number;
  data?: Array<Unit>;
}

export interface UnitSingleResponse {
  data: Unit;
}

export type UnitUpdateRequest = Unit;
export type UnitUpdateResponse = { data: Unit };

export interface UnitAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface UnitAggregationResponse {
  total?: number;
  data?: Array<Unit>;
}
