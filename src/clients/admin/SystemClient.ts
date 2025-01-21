import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  ApiConfigResponse,
  BusinessEventsResponse,
  CacheInfoResponse,
  ConfigEntryAggregationRequest,
  ConfigEntryAggregationResponse,
  ConfigEntryCreateRequest,
  ConfigEntryCreateResponse,
  ConfigEntryListResponse,
  ConfigEntryListSearchRequest,
  ConfigEntryListSearchResponse,
  ConfigEntrySingleResponse,
  ConfigEntryUpdateRequest,
  ConfigEntryUpdateResponse,
  FlowBuilderActionsResponse,
  HealthReportResponse,
  IndexIterationRequest,
  IndexIterationResponse,
  IndexRequest,
  LogEntryAggregationRequest,
  LogEntryAggregationResponse,
  LogEntryCreateRequest,
  LogEntryCreateResponse,
  LogEntryListResponse,
  LogEntryListSearchRequest,
  LogEntryListSearchResponse,
  LogEntrySingleResponse,
  LogEntryUpdateRequest,
  LogEntryUpdateResponse,
  MessageQueueConsumptionRequest,
  MessageQueueConsumptionResponse,
  NotificationAggregationRequest,
  NotificationAggregationResponse,
  NotificationCreateRequest,
  NotificationCreateResponse,
  NotificationListResponse,
  NotificationListSearchRequest,
  NotificationListSearchResponse,
  NotificationSingleResponse,
  NotificationUpdateRequest,
  NotificationUpdateResponse,
  ScheduledTaskAggregationRequest,
  ScheduledTaskAggregationResponse,
  ScheduledTaskCreateRequest,
  ScheduledTaskCreateResponse,
  ScheduledTaskListResponse,
  ScheduledTaskListSearchRequest,
  ScheduledTaskListSearchResponse,
  ScheduledTaskMinIntervalResponse,
  ScheduledTaskRunResponse,
  ScheduledTaskSingleResponse,
  ScheduledTaskUpdateRequest,
  ScheduledTaskUpdateResponse,
  ShopwareVersionResponse
} from "#types/clients/admin/SystemClient";

class SystemClient extends Client {
  /** Info & Health **/

  /**
   * @throws {Error} if the request failed
   */
  public async getBusinessEvents(): Promise<BusinessEventsResponse> {
    const response = await this.get(`/_info/events.json`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as BusinessEventsResponse;

    throw new ShopwareError("Failed to fetch business events", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getShopwareVersion(): Promise<ShopwareVersionResponse> {
    const response = await this.get(`/_info/version`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShopwareVersionResponse;

    throw new ShopwareError("Failed to fetch Shopware version", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async checkApiHealth(): Promise<void> {
    const response = await this.get(`/_info/health-check`);

    if (response.statusCode === 200) return;

    throw new ShopwareError("Failed to verify API health", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getHealthReport(verbose?: boolean): Promise<HealthReportResponse> {
    const response = await this.get(`/_info/system-health-check`, {
      query: { verbose },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as HealthReportResponse;

    throw new ShopwareError("Failed to fetch system health report", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFlowBuilderActions(): Promise<FlowBuilderActionsResponse> {
    const response = await this.get(`/_info/flow-actions.json`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowBuilderActionsResponse;

    throw new ShopwareError("Failed to fetch flow builder actions", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getApiConfig(): Promise<ApiConfigResponse> {
    const response = await this.get(`/_info/config`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ApiConfigResponse;

    throw new ShopwareError("Failed to fetch API config", response);
  }

  /** Operations **/

  /**
   * @throws {Error} if the request failed
   */
  public async index(request: IndexRequest): Promise<void> {
    const response = await this.post(`/_action/index`, { body: new JsonPayload(request) });

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to start indexing", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async iterateIndexer(
    indexerName: string,
    request: IndexIterationRequest
  ): Promise<IndexIterationResponse> {
    const response = await this.post(`/_action/indexing/${indexerName}`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IndexIterationResponse;

    throw new ShopwareError("Failed to iterate indexer", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCacheInfo(): Promise<CacheInfoResponse> {
    const response = await this.get(`/_action/cache_info`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CacheInfoResponse;

    throw new ShopwareError("Failed to get cache info", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async clearOldCacheFolders(): Promise<void> {
    const response = await this.delete(`/_action/cleanup`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to clear old cache folders", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async consumeMessageQueue(
    request: MessageQueueConsumptionRequest
  ): Promise<MessageQueueConsumptionResponse> {
    const response = await this.post(`/_action/message-queue/consume`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MessageQueueConsumptionResponse;

    throw new ShopwareError("Failed to consume message queue", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async runScheduledTasks(): Promise<ScheduledTaskRunResponse> {
    const response = await this.post(`/_action/scheduled-task/run`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskRunResponse;

    throw new ShopwareError("Failed to run scheduled tasks", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getMinScheduledTaskInterval(): Promise<ScheduledTaskMinIntervalResponse> {
    const response = await this.get(`/_action/scheduled-task/min-run-interval`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskMinIntervalResponse;

    throw new ShopwareError("Failed to fetch minimum scheduled task interval", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async indexProducts(): Promise<void> {
    const response = await this.post(`/_action/index-products`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to start product indexing", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async clearContainerCaches(): Promise<void> {
    const response = await this.post(`/_action/container-cache`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to clear container caches", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async clearCaches(): Promise<void> {
    const response = await this.post(`/_action/cache`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to clear caches", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async clearInvalidatedCaches(): Promise<void> {
    const response = await this.post(`/_action/cache-delayed`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to clear invalidated caches", response);
  }

  /** Log Entries **/

  /**
   * @throws {Error} if the request failed
   */
  public async getLogEntries(query?: Criteria): Promise<LogEntryListResponse> {
    const response = await this.get(`/log-entry` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogEntryListResponse;

    throw new ShopwareError("Failed to fetch log entry list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createLogEntry(
    request: LogEntryCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<LogEntryCreateResponse> {
    const response = await this.post(`/log-entry`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogEntryCreateResponse;

    throw new ShopwareError("Failed to create log entry", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchLogEntries(
    request: LogEntryListSearchRequest
  ): Promise<LogEntryListSearchResponse> {
    const response = await this.post(`/search/log-entry`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogEntryListSearchResponse;

    throw new ShopwareError("Failed to search for log entries", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLogEntry(id: string, query?: Criteria): Promise<LogEntrySingleResponse> {
    const response = await this.get(`/log-entry/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogEntrySingleResponse;

    throw new ShopwareError("Failed to fetch log entry", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteLogEntry(id: string): Promise<void> {
    const response = await this.delete(`/log-entry/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete log entry", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateLogEntry(
    id: string,
    request: LogEntryUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<LogEntryUpdateResponse> {
    const response = await this.patch(`/log-entry/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogEntryUpdateResponse;

    throw new ShopwareError("Failed to update log entry", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLogEntryAggregate(
    request: LogEntryAggregationRequest
  ): Promise<LogEntryAggregationResponse> {
    const response = await this.post(`/aggregate/log-entry`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogEntryAggregationResponse;

    throw new ShopwareError("Failed to aggregate log entry", response);
  }

  /** Notifications **/

  /**
   * @throws {Error} if the request failed
   */
  public async getNotifications(query?: Criteria): Promise<NotificationListResponse> {
    const response = await this.get(`/notification` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NotificationListResponse;

    throw new ShopwareError("Failed to fetch notification list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createNotification(
    request: NotificationCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<NotificationCreateResponse> {
    const response = await this.post(`/notification`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NotificationCreateResponse;

    throw new ShopwareError("Failed to create notification", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchNotifications(
    request: NotificationListSearchRequest
  ): Promise<NotificationListSearchResponse> {
    const response = await this.post(`/search/notification`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NotificationListSearchResponse;

    throw new ShopwareError("Failed to search for notifications", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getNotification(id: string, query?: Criteria): Promise<NotificationSingleResponse> {
    const response = await this.get(`/notification/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NotificationSingleResponse;

    throw new ShopwareError("Failed to fetch notification", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteNotification(id: string): Promise<void> {
    const response = await this.delete(`/notification/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete notification", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateNotification(
    id: string,
    request: NotificationUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<NotificationUpdateResponse> {
    const response = await this.patch(`/notification/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NotificationUpdateResponse;

    throw new ShopwareError("Failed to update notification", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getNotificationAggregate(
    request: NotificationAggregationRequest
  ): Promise<NotificationAggregationResponse> {
    const response = await this.post(`/aggregate/notification`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NotificationAggregationResponse;

    throw new ShopwareError("Failed to aggregate notification", response);
  }

  /** Config Entries **/

  /**
   * @throws {Error} if the request failed
   */
  public async getConfigEntries(query?: Criteria): Promise<ConfigEntryListResponse> {
    const response = await this.get(`/system-config` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigEntryListResponse;

    throw new ShopwareError("Failed to fetch config entry list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createConfigEntry(
    request: ConfigEntryCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ConfigEntryCreateResponse> {
    const response = await this.post(`/system-config`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigEntryCreateResponse;

    throw new ShopwareError("Failed to create config entry", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchConfigEntries(
    request: ConfigEntryListSearchRequest
  ): Promise<ConfigEntryListSearchResponse> {
    const response = await this.post(`/search/system-config`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigEntryListSearchResponse;

    throw new ShopwareError("Failed to search for config entries", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getConfigEntry(id: string, query?: Criteria): Promise<ConfigEntrySingleResponse> {
    const response = await this.get(`/system-config/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigEntrySingleResponse;

    throw new ShopwareError("Failed to fetch config entry", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteConfigEntry(id: string): Promise<void> {
    const response = await this.delete(`/system-config/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete config entry", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateConfigEntry(
    id: string,
    request: ConfigEntryUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ConfigEntryUpdateResponse> {
    const response = await this.patch(`/system-config/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigEntryUpdateResponse;

    throw new ShopwareError("Failed to update config entry", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getConfigEntryAggregate(
    request: ConfigEntryAggregationRequest
  ): Promise<ConfigEntryAggregationResponse> {
    const response = await this.post(`/aggregate/system-config`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigEntryAggregationResponse;

    throw new ShopwareError("Failed to aggregate config entry", response);
  }

  /** Scheduled Tasks **/

  /**
   * @throws {Error} if the request failed
   */
  public async getScheduledTasks(query?: Criteria): Promise<ScheduledTaskListResponse> {
    const response = await this.get(`/scheduled-task` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskListResponse;

    throw new ShopwareError("Failed to fetch scheduled task list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createScheduledTask(
    request: ScheduledTaskCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ScheduledTaskCreateResponse> {
    const response = await this.post(`/scheduled-task`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskCreateResponse;

    throw new ShopwareError("Failed to create scheduled task", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchScheduledTasks(
    request: ScheduledTaskListSearchRequest
  ): Promise<ScheduledTaskListSearchResponse> {
    const response = await this.post(`/search/scheduled-task`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskListSearchResponse;

    throw new ShopwareError("Failed to search for scheduled tasks", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getScheduledTask(
    id: string,
    query?: Criteria
  ): Promise<ScheduledTaskSingleResponse> {
    const response = await this.get(`/scheduled-task/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskSingleResponse;

    throw new ShopwareError("Failed to fetch scheduled task", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteScheduledTask(id: string): Promise<void> {
    const response = await this.delete(`/scheduled-task/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete scheduled task", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateScheduledTask(
    id: string,
    request: ScheduledTaskUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ScheduledTaskUpdateResponse> {
    const response = await this.patch(`/scheduled-task/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskUpdateResponse;

    throw new ShopwareError("Failed to update scheduled task", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getScheduledTaskAggregate(
    request: ScheduledTaskAggregationRequest
  ): Promise<ScheduledTaskAggregationResponse> {
    const response = await this.post(`/aggregate/scheduled-task`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskAggregationResponse;

    throw new ShopwareError("Failed to aggregate scheduled task", response);
  }
}

export default SystemClient;
