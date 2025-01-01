import { Promotion } from "#types/api/admin/promotion/Promotion";
import { PromotionDiscount } from "#types/api/admin/promotion/discount/PromotionDiscount";
import { PromotionDiscountPrice } from "#types/api/admin/promotion/discount/PromotionDiscountPrice";
import { PromotionIndividualCode } from "#types/api/admin/promotion/PromotionIndividualCode";
import { PromotionSalesChannel } from "#types/api/admin/promotion/PromotionSalesChannel";
import { PromotionSetGroup } from "#types/api/admin/promotion/PromotionSetGroup";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Promotions **/

export interface PromotionListResponse {
  total?: number;
  data?: Array<Promotion>;
}

export type PromotionCreateRequest = Promotion;
export type PromotionCreateResponse = { data: Promotion };

export type PromotionListSearchRequest = Criteria;
export interface PromotionListSearchResponse {
  total?: number;
  data?: Array<Promotion>;
}

export interface PromotionSingleResponse {
  data: Promotion;
}

export type PromotionUpdateRequest = Promotion;
export type PromotionUpdateResponse = { data: Promotion };

export interface PromotionAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface PromotionAggregationResponse {
  total?: number;
  data?: Array<Promotion>;
}

/** Discounts **/

export interface DiscountListResponse {
  total?: number;
  data?: Array<PromotionDiscount>;
}

export type DiscountCreateRequest = PromotionDiscount;
export type DiscountCreateResponse = { data: PromotionDiscount };

export type DiscountListSearchRequest = Criteria;
export interface DiscountListSearchResponse {
  total?: number;
  data?: Array<PromotionDiscount>;
}

export interface DiscountSingleResponse {
  data: PromotionDiscount;
}

export type DiscountUpdateRequest = PromotionDiscount;
export type DiscountUpdateResponse = { data: PromotionDiscount };

export interface DiscountAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface DiscountAggregationResponse {
  total?: number;
  data?: Array<PromotionDiscount>;
}

/** Discount Prices **/

export interface DiscountPriceListResponse {
  total?: number;
  data?: Array<PromotionDiscountPrice>;
}

export type DiscountPriceCreateRequest = PromotionDiscountPrice;
export type DiscountPriceCreateResponse = { data: PromotionDiscountPrice };

export type DiscountPriceListSearchRequest = Criteria;
export interface DiscountPriceListSearchResponse {
  total?: number;
  data?: Array<PromotionDiscountPrice>;
}

export interface DiscountPriceSingleResponse {
  data: PromotionDiscountPrice;
}

export type DiscountPriceUpdateRequest = PromotionDiscountPrice;
export type DiscountPriceUpdateResponse = { data: PromotionDiscountPrice };

export interface DiscountPriceAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface DiscountPriceAggregationResponse {
  total?: number;
  data?: Array<PromotionDiscountPrice>;
}

/** Individual Codes **/

export interface IndividualCodeListResponse {
  total?: number;
  data?: Array<PromotionIndividualCode>;
}

export type IndividualCodeCreateRequest = PromotionIndividualCode;
export type IndividualCodeCreateResponse = { data: PromotionIndividualCode };

export type IndividualCodeListSearchRequest = Criteria;
export interface IndividualCodeListSearchResponse {
  total?: number;
  data?: Array<PromotionIndividualCode>;
}

export interface IndividualCodeSingleResponse {
  data: PromotionIndividualCode;
}

export type IndividualCodeUpdateRequest = PromotionIndividualCode;
export type IndividualCodeUpdateResponse = { data: PromotionIndividualCode };

export interface IndividualCodeAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface IndividualCodeAggregationResponse {
  total?: number;
  data?: Array<PromotionIndividualCode>;
}

/** Sales Channels **/

export interface SalesChannelListResponse {
  total?: number;
  data?: Array<PromotionSalesChannel>;
}

export type SalesChannelCreateRequest = PromotionSalesChannel;
export type SalesChannelCreateResponse = { data: PromotionSalesChannel };

export type SalesChannelListSearchRequest = Criteria;
export interface SalesChannelListSearchResponse {
  total?: number;
  data?: Array<PromotionSalesChannel>;
}

export interface SalesChannelSingleResponse {
  data: PromotionSalesChannel;
}

export type SalesChannelUpdateRequest = PromotionSalesChannel;
export type SalesChannelUpdateResponse = { data: PromotionSalesChannel };

export interface SalesChannelAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface SalesChannelAggregationResponse {
  total?: number;
  data?: Array<PromotionSalesChannel>;
}

/** Set Groups **/

export interface SetGroupListResponse {
  total?: number;
  data?: Array<PromotionSetGroup>;
}

export type SetGroupCreateRequest = PromotionSetGroup;
export type SetGroupCreateResponse = { data: PromotionSetGroup };

export type SetGroupListSearchRequest = Criteria;
export interface SetGroupListSearchResponse {
  total?: number;
  data?: Array<PromotionSetGroup>;
}

export interface SetGroupSingleResponse {
  data: PromotionSetGroup;
}

export type SetGroupUpdateRequest = PromotionSetGroup;
export type SetGroupUpdateResponse = { data: PromotionSetGroup };

export interface SetGroupAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface SetGroupAggregationResponse {
  total?: number;
  data?: Array<PromotionSetGroup>;
}
