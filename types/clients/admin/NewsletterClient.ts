import { NewsletterRecipient } from "#types/api/admin/newsletterRecipient/NewsletterRecipient";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

export interface RecipientListResponse {
  total?: number;
  data?: Array<NewsletterRecipient>;
}

export type RecipientCreateRequest = NewsletterRecipient;
export type RecipientCreateResponse = { data: NewsletterRecipient };

export type RecipientListSearchRequest = Criteria;
export interface RecipientListSearchResponse {
  total?: number;
  data?: Array<NewsletterRecipient>;
}

export interface RecipientSingleResponse {
  data: NewsletterRecipient;
}

export type RecipientUpdateRequest = NewsletterRecipient;
export type RecipientUpdateResponse = { data: NewsletterRecipient };

export interface RecipientAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface RecipientAggregationResponse {
  total?: number;
  data?: Array<NewsletterRecipient>;
}
