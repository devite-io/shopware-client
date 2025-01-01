import { NumberRange } from "#types/api/admin/numberRange/NumberRange";
import { NumberRangeSalesChannel } from "#types/api/admin/numberRange/NumberRangeSalesChannel";
import { NumberRangeState } from "#types/api/admin/numberRange/NumberRangeState";
import { NumberRangeType } from "#types/api/admin/numberRange/NumberRangeType";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Ranges **/

export interface RangeListResponse {
  total?: number;
  data?: Array<NumberRange>;
}

export type RangeCreateRequest = NumberRange;
export type RangeCreateResponse = { data: NumberRange };

export type RangeListSearchRequest = Criteria;
export interface RangeListSearchResponse {
  total?: number;
  data?: Array<NumberRange>;
}

export interface RangeSingleResponse {
  data: NumberRange;
}

export type RangeUpdateRequest = NumberRange;
export type RangeUpdateResponse = { data: NumberRange };

export interface RangeAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface RangeAggregationResponse {
  total?: number;
  data?: Array<NumberRange>;
}

/** Sales Channels **/

export interface SalesChannelListResponse {
  total?: number;
  data?: Array<NumberRangeSalesChannel>;
}

export type SalesChannelCreateRequest = NumberRangeSalesChannel;
export type SalesChannelCreateResponse = { data: NumberRangeSalesChannel };

export type SalesChannelListSearchRequest = Criteria;
export interface SalesChannelListSearchResponse {
  total?: number;
  data?: Array<NumberRangeSalesChannel>;
}

export interface SalesChannelSingleResponse {
  data: NumberRangeSalesChannel;
}

export type SalesChannelUpdateRequest = NumberRangeSalesChannel;
export type SalesChannelUpdateResponse = { data: NumberRangeSalesChannel };

export interface SalesChannelAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface SalesChannelAggregationResponse {
  total?: number;
  data?: Array<NumberRangeSalesChannel>;
}

/** States **/

export interface StateListResponse {
  total?: number;
  data?: Array<NumberRangeState>;
}

export type StateCreateRequest = NumberRangeState;
export type StateCreateResponse = { data: NumberRangeState };

export type StateListSearchRequest = Criteria;
export interface StateListSearchResponse {
  total?: number;
  data?: Array<NumberRangeState>;
}

export interface StateSingleResponse {
  data: NumberRangeState;
}

export type StateUpdateRequest = NumberRangeState;
export type StateUpdateResponse = { data: NumberRangeState };

export interface StateAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface StateAggregationResponse {
  total?: number;
  data?: Array<NumberRangeState>;
}

/** Types **/

export interface TypeListResponse {
  total?: number;
  data?: Array<NumberRangeType>;
}

export type TypeCreateRequest = NumberRangeType;
export type TypeCreateResponse = { data: NumberRangeType };

export type TypeListSearchRequest = Criteria;
export interface TypeListSearchResponse {
  total?: number;
  data?: Array<NumberRangeType>;
}

export interface TypeSingleResponse {
  data: NumberRangeType;
}

export type TypeUpdateRequest = NumberRangeType;
export type TypeUpdateResponse = { data: NumberRangeType };

export interface TypeAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface TypeAggregationResponse {
  total?: number;
  data?: Array<NumberRangeType>;
}
