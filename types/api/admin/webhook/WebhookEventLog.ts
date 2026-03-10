import { GenericRecord } from "#types/api/global/GenericRecord";

export interface WebhookEventLog {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  readonly timestamp?: string;
  eventName: string;
  webhookName: string;
  processingTime?: number;
  requestContent?: object;
  responseContent?: object;
  responseStatusCode?: number;
  responseReasonPhrase?: string;
  url: string;
  customFields?: GenericRecord;
}
