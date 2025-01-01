import { PropertyGroup } from "#types/api/admin/propertyGroup/PropertyGroup";
import { PropertyGroupOption } from "#types/api/admin/propertyGroup/PropertyGroupOption";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Property Groups **/

export interface PropertyGroupListResponse {
  total?: number;
  data?: Array<PropertyGroup>;
}

export type PropertyGroupCreateRequest = PropertyGroup;
export type PropertyGroupCreateResponse = { data: PropertyGroup };

export type PropertyGroupListSearchRequest = Criteria;
export interface PropertyGroupListSearchResponse {
  total?: number;
  data?: Array<PropertyGroup>;
}

export interface PropertyGroupSingleResponse {
  data: PropertyGroup;
}

export type PropertyGroupUpdateRequest = PropertyGroup;
export type PropertyGroupUpdateResponse = { data: PropertyGroup };

export interface PropertyGroupAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface PropertyGroupAggregationResponse {
  total?: number;
  data?: Array<PropertyGroup>;
}

/** Options **/

export interface OptionListResponse {
  total?: number;
  data?: Array<PropertyGroupOption>;
}

export type OptionCreateRequest = PropertyGroupOption;
export type OptionCreateResponse = { data: PropertyGroupOption };

export type OptionListSearchRequest = Criteria;
export interface OptionListSearchResponse {
  total?: number;
  data?: Array<PropertyGroupOption>;
}

export interface OptionSingleResponse {
  data: PropertyGroupOption;
}

export type OptionUpdateRequest = PropertyGroupOption;
export type OptionUpdateResponse = { data: PropertyGroupOption };

export interface OptionAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface OptionAggregationResponse {
  total?: number;
  data?: Array<PropertyGroupOption>;
}
