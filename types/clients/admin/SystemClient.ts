import { LogEntry } from "#types/api/admin/LogEntry";
import { Notification } from "#types/api/admin/Notification";
import { SystemConfig } from "#types/api/admin/SystemConfig";
import { ScheduledTask } from "#types/api/admin/ScheduledTask";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Info & Health **/

export type BusinessEventsResponse = Array<{
  name?: string;
  class?: string;
  data?: object;
  aware?: Array<string>;
  extensions?: Array<string>;
}>;

export interface ShopwareVersionResponse {
  version?: string;
}

export interface HealthReportResponse {
  checks?: Array<{
    name?: string;
    healthy?: boolean;
    status?: string;
    message?: string;
  }>;
}

export type FlowBuilderActionsResponse = Array<{
  name?: string;
  requirements?: Array<string>;
  extensions?: Array<string>;
}>;

export interface ApiConfigResponse {
  version?: string;
  versionRevision?: string;
  adminWorker?: {
    enableAdminWorker?: boolean;
    transports?: Array<string>;
  };
  bundles?: Record<string, { css?: Array<string>; js?: Array<string> }>;
  settings?: {
    enableUrlFeature?: boolean;
  };
}

/** Operations **/

export interface IndexRequest {
  skip?: Array<string>;
}

export interface IndexIterationRequest {
  offset?: number;
}
export interface IndexIterationResponse {
  finish?: boolean;
  offset?: number;
}

export interface CacheInfoResponse {
  environment?: string;
  httpCache?: boolean;
  cacheAdapter?: string;
}

export interface MessageQueueConsumptionRequest {
  receiver: string;
}
export interface MessageQueueConsumptionResponse {
  handledMessages?: number;
}

export interface ScheduledTaskRunResponse {
  message?: string;
}

export interface ScheduledTaskMinIntervalResponse {
  minRunInterval?: string;
}

/** Log Entries **/

export interface LogEntryListResponse {
  total?: number;
  data?: Array<LogEntry>;
}

export type LogEntryCreateRequest = LogEntry;
export type LogEntryCreateResponse = { data: LogEntry };

export type LogEntryListSearchRequest = Criteria;
export interface LogEntryListSearchResponse {
  total?: number;
  data?: Array<LogEntry>;
}

export interface LogEntrySingleResponse {
  data: LogEntry;
}

export type LogEntryUpdateRequest = LogEntry;
export type LogEntryUpdateResponse = { data: LogEntry };

export interface LogEntryAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface LogEntryAggregationResponse {
  total?: number;
  data?: Array<LogEntry>;
}

/** Notifications **/

export interface NotificationListResponse {
  total?: number;
  data?: Array<Notification>;
}

export type NotificationCreateRequest = Notification;
export type NotificationCreateResponse = { data: Notification };

export type NotificationListSearchRequest = Criteria;
export interface NotificationListSearchResponse {
  total?: number;
  data?: Array<Notification>;
}

export interface NotificationSingleResponse {
  data: Notification;
}

export type NotificationUpdateRequest = Notification;
export type NotificationUpdateResponse = { data: Notification };

export interface NotificationAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface NotificationAggregationResponse {
  total?: number;
  data?: Array<Notification>;
}

/** Config Entries **/

export interface ConfigEntryListResponse {
  total?: number;
  data?: Array<SystemConfig>;
}

export type ConfigEntryCreateRequest = SystemConfig;
export type ConfigEntryCreateResponse = { data: SystemConfig };

export type ConfigEntryListSearchRequest = Criteria;
export interface ConfigEntryListSearchResponse {
  total?: number;
  data?: Array<SystemConfig>;
}

export interface ConfigEntrySingleResponse {
  data: SystemConfig;
}

export type ConfigEntryUpdateRequest = SystemConfig;
export type ConfigEntryUpdateResponse = { data: SystemConfig };

export interface ConfigEntryAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ConfigEntryAggregationResponse {
  total?: number;
  data?: Array<SystemConfig>;
}

/** Scheduled Tasks **/

export interface ScheduledTaskListResponse {
  total?: number;
  data?: Array<ScheduledTask>;
}

export type ScheduledTaskCreateRequest = ScheduledTask;
export type ScheduledTaskCreateResponse = { data: ScheduledTask };

export type ScheduledTaskListSearchRequest = Criteria;
export interface ScheduledTaskListSearchResponse {
  total?: number;
  data?: Array<ScheduledTask>;
}

export interface ScheduledTaskSingleResponse {
  data: ScheduledTask;
}

export type ScheduledTaskUpdateRequest = ScheduledTask;
export type ScheduledTaskUpdateResponse = { data: ScheduledTask };

export interface ScheduledTaskAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface ScheduledTaskAggregationResponse {
  total?: number;
  data?: Array<ScheduledTask>;
}
