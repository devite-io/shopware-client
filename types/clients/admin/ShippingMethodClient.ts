import { ShippingMethod } from "#types/api/admin/shippingMethod/ShippingMethod";
import { ShippingMethodPrice } from "#types/api/admin/shippingMethod/ShippingMethodPrice";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Shipping Methods **/

export interface ShippingMethodListResponse {
  total?: number;
  data?: Array<ShippingMethod>;
}

export type ShippingMethodCreateRequest = ShippingMethod;
export type ShippingMethodCreateResponse = { data: ShippingMethod };

export type ShippingMethodListSearchRequest = Criteria;
export interface ShippingMethodListSearchResponse {
  total?: number;
  data?: Array<ShippingMethod>;
}

export interface ShippingMethodSingleResponse {
  data: ShippingMethod;
}

export type ShippingMethodUpdateRequest = ShippingMethod;
export type ShippingMethodUpdateResponse = { data: ShippingMethod };

export interface ShippingMethodAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ShippingMethodAggregationResponse {
  total?: number;
  data?: Array<ShippingMethod>;
}

/** Prices **/

export interface PriceListResponse {
  total?: number;
  data?: Array<ShippingMethodPrice>;
}

export type PriceCreateRequest = ShippingMethodPrice;
export type PriceCreateResponse = { data: ShippingMethodPrice };

export type PriceListSearchRequest = Criteria;
export interface PriceListSearchResponse {
  total?: number;
  data?: Array<ShippingMethodPrice>;
}

export interface PriceSingleResponse {
  data: ShippingMethodPrice;
}

export type PriceUpdateRequest = ShippingMethodPrice;
export type PriceUpdateResponse = { data: ShippingMethodPrice };

export interface PriceAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface PriceAggregationResponse {
  total?: number;
  data?: Array<ShippingMethodPrice>;
}
