import { Snippet } from "#types/api/admin/snippet/Snippet";
import { SnippetSet } from "#types/api/admin/snippet/SnippetSet";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Snippets **/

export interface SnippetListResponse {
  total?: number;
  data?: Array<Snippet>;
}

export type SnippetCreateRequest = Snippet;
export type SnippetCreateResponse = { data: Snippet };

export type SnippetListSearchRequest = Criteria;
export interface SnippetListSearchResponse {
  total?: number;
  data?: Array<Snippet>;
}

export interface SnippetSingleResponse {
  data: Snippet;
}

export type SnippetUpdateRequest = Snippet;
export type SnippetUpdateResponse = { data: Snippet };

export interface SnippetAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface SnippetAggregationResponse {
  total?: number;
  data?: Array<Snippet>;
}

/** Sets **/

export interface SetListResponse {
  total?: number;
  data?: Array<SnippetSet>;
}

export type SetCreateRequest = SnippetSet;
export type SetCreateResponse = { data: SnippetSet };

export type SetListSearchRequest = Criteria;
export interface SetListSearchResponse {
  total?: number;
  data?: Array<SnippetSet>;
}

export interface SetSingleResponse {
  data: SnippetSet;
}

export type SetUpdateRequest = SnippetSet;
export type SetUpdateResponse = { data: SnippetSet };

export interface SetAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface SetAggregationResponse {
  total?: number;
  data?: Array<SnippetSet>;
}
