import { PaymentMethod } from "#types/api/admin/paymentMethod/PaymentMethod";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

export interface PaymentMethodListResponse {
  total?: number;
  data?: Array<PaymentMethod>;
}

export type PaymentMethodCreateRequest = PaymentMethod;
export type PaymentMethodCreateResponse = { data: PaymentMethod };

export type PaymentMethodListSearchRequest = Criteria;
export interface PaymentMethodListSearchResponse {
  total?: number;
  data?: Array<PaymentMethod>;
}

export interface PaymentMethodSingleResponse {
  data: PaymentMethod;
}

export type PaymentMethodUpdateRequest = PaymentMethod;
export type PaymentMethodUpdateResponse = { data: PaymentMethod };

export interface PaymentMethodAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface PaymentMethodAggregationResponse {
  total?: number;
  data?: Array<PaymentMethod>;
}
