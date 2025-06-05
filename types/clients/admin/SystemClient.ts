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
