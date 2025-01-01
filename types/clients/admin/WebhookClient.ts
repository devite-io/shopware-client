import { Webhook } from "#types/api/admin/webhook/Webhook";
import { WebhookEventLog } from "#types/api/admin/webhook/WebhookEventLog";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Webhooks **/

export interface WebhookListResponse {
  total?: number;
  data?: Array<Webhook>;
}

export type WebhookCreateRequest = Webhook;
export type WebhookCreateResponse = { data: Webhook };

export type WebhookListSearchRequest = Criteria;
export interface WebhookListSearchResponse {
  total?: number;
  data?: Array<Webhook>;
}

export interface WebhookSingleResponse {
  data: Webhook;
}

export type WebhookUpdateRequest = Webhook;
export type WebhookUpdateResponse = { data: Webhook };

export interface WebhookAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface WebhookAggregationResponse {
  total?: number;
  data?: Array<Webhook>;
}

/** Event Logs **/

export interface EventLogListResponse {
  total?: number;
  data?: Array<WebhookEventLog>;
}

export type EventLogCreateRequest = WebhookEventLog;
export type EventLogCreateResponse = { data: WebhookEventLog };

export type EventLogListSearchRequest = Criteria;
export interface EventLogListSearchResponse {
  total?: number;
  data?: Array<WebhookEventLog>;
}

export interface EventLogSingleResponse {
  data: WebhookEventLog;
}

export type EventLogUpdateRequest = WebhookEventLog;
export type EventLogUpdateResponse = { data: WebhookEventLog };

export interface EventLogAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface EventLogAggregationResponse {
  total?: number;
  data?: Array<WebhookEventLog>;
}
