import { Script } from "#types/api/admin/Script";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

export interface ScriptListResponse {
  total?: number;
  data?: Array<Script>;
}

export type ScriptCreateRequest = Script;
export type ScriptCreateResponse = { data: Script };

export type ScriptListSearchRequest = Criteria;
export interface ScriptListSearchResponse {
  total?: number;
  data?: Array<Script>;
}

export interface ScriptSingleResponse {
  data: Script;
}

export type ScriptUpdateRequest = Script;
export type ScriptUpdateResponse = { data: Script };

export interface ScriptAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ScriptAggregationResponse {
  total?: number;
  data?: Array<Script>;
}
