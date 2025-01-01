import { ShopwarePlugin } from "#types/api/admin/ShopwarePlugin";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

export interface PluginListResponse {
  total?: number;
  data?: Array<ShopwarePlugin>;
}

export type PluginCreateRequest = ShopwarePlugin;
export type PluginCreateResponse = { data: ShopwarePlugin };

export type PluginListSearchRequest = Criteria;
export interface PluginListSearchResponse {
  total?: number;
  data?: Array<ShopwarePlugin>;
}

export interface PluginSingleResponse {
  data: ShopwarePlugin;
}

export type PluginUpdateRequest = ShopwarePlugin;
export type PluginUpdateResponse = { data: ShopwarePlugin };

export interface PluginAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface PluginAggregationResponse {
  total?: number;
  data?: Array<ShopwarePlugin>;
}
