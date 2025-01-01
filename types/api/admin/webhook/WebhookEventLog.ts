import { GenericRecord } from "#types/api/global/GenericRecord";

export interface WebhookEventLog {
  id: string;
  appName?: string;
  webhookName: string;
  eventName: string;
  deliveryStatus: string;
  timestamp?: string;
  processingTime?: number;
  appVersion?: string;
  requestContent?: object;
  responseContent?: object;
  responseStatusCode?: number;
  responseReasonPhrase?: string;
  url: string;
  onlyLiveVersion?: boolean;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
}
