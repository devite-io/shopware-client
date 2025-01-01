import { Tag } from "#types/api/admin/Tag";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

export interface TagListResponse {
  total?: number;
  data?: Array<Tag>;
}

export type TagCreateRequest = Tag;
export type TagCreateResponse = { data: Tag };

export type TagListSearchRequest = Criteria;
export interface TagListSearchResponse {
  total?: number;
  data?: Array<Tag>;
}

export interface TagSingleResponse {
  data: Tag;
}

export type TagUpdateRequest = Tag;
export type TagUpdateResponse = { data: Tag };

export interface TagAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface TagAggregationResponse {
  total?: number;
  data?: Array<Tag>;
}
