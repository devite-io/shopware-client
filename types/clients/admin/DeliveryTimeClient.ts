import { DeliveryTime } from "#types/api/admin/DeliveryTime";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

export interface DeliveryTimeListResponse {
  total?: number;
  data?: Array<DeliveryTime>;
}

export type DeliveryTimeCreateRequest = DeliveryTime;
export type DeliveryTimeCreateResponse = { data: DeliveryTime };

export type DeliveryTimeListSearchRequest = Criteria;
export interface DeliveryTimeListSearchResponse {
  total?: number;
  data?: Array<DeliveryTime>;
}

export interface DeliveryTimeSingleResponse {
  data: DeliveryTime;
}

export type DeliveryTimeUpdateRequest = DeliveryTime;
export type DeliveryTimeUpdateResponse = { data: DeliveryTime };

export interface DeliveryTimeAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface DeliveryTimeAggregationResponse {
  total?: number;
  data?: Array<DeliveryTime>;
}
