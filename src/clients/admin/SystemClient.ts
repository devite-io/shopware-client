import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
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
    const response = await this.get(`/_info/events.json`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as BusinessEventsResponse;

    throw new Error(
      `Failed to fetch business events: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getShopwareVersion(): Promise<ShopwareVersionResponse> {
    const response = await this.get(`/_info/version`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShopwareVersionResponse;

    throw new Error(
      `Failed to fetch Shopware version: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async checkApiHealth(): Promise<void> {
    const response = await this.get(`/_info/health-check`);

    if (response.statusCode === 200) return;

    throw new Error(
      `Failed to verify API health: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getHealthReport(verbose?: boolean): Promise<HealthReportResponse> {
    const response = await this.get(`/_info/system-health-check`, {
      query: { verbose }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as HealthReportResponse;

    throw new Error(
      `Failed to fetch system health report: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFlowBuilderActions(): Promise<FlowBuilderActionsResponse> {
    const response = await this.get(`/_info/flow-actions.json`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowBuilderActionsResponse;

    throw new Error(
      `Failed to fetch flow builder actions: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getApiConfig(): Promise<ApiConfigResponse> {
    const response = await this.get(`/_info/config`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ApiConfigResponse;

    throw new Error(`Failed to fetch API config: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Operations **/

  /**
   * @throws {Error} if the request failed
   */
  public async index(request: IndexRequest): Promise<void> {
    const response = await this.post(`/_action/index`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 204) return;

    throw new Error(`Failed to start indexing: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async iterateIndexer(
    indexerName: string,
    request: IndexIterationRequest
  ): Promise<IndexIterationResponse> {
    const response = await this.post(`/_action/indexing/${indexerName}`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IndexIterationResponse;

    throw new Error(`Failed to iterate indexer: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCacheInfo(): Promise<CacheInfoResponse> {
    const response = await this.get(`/_action/cache_info`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CacheInfoResponse;

    throw new Error(`Failed to get cache info: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async clearOldCacheFolders(): Promise<void> {
    const response = await this.delete(`/_action/cleanup`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to clear old cache folders: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async consumeMessageQueue(
    request: MessageQueueConsumptionRequest
  ): Promise<MessageQueueConsumptionResponse> {
    const response = await this.post(`/_action/message-queue/consume`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MessageQueueConsumptionResponse;

    throw new Error(
      `Failed to consume message queue: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async runScheduledTasks(): Promise<ScheduledTaskRunResponse> {
    const response = await this.post(`/_action/scheduled-task/run`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskRunResponse;

    throw new Error(
      `Failed to run scheduled tasks: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getMinScheduledTaskInterval(): Promise<ScheduledTaskMinIntervalResponse> {
    const response = await this.get(`/_action/scheduled-task/min-run-interval`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskMinIntervalResponse;

    throw new Error(
      `Failed to fetch minimum scheduled task interval: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async indexProducts(): Promise<void> {
    const response = await this.post(`/_action/index-products`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to start product indexing: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async clearContainerCaches(): Promise<void> {
    const response = await this.post(`/_action/container-cache`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to clear container caches: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async clearCaches(): Promise<void> {
    const response = await this.post(`/_action/cache`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to clear caches: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async clearInvalidatedCaches(): Promise<void> {
    const response = await this.post(`/_action/cache-delayed`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to clear invalidated caches: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Log Entries **/

  /**
   * @throws {Error} if the request failed
   */
  public async getLogEntries(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<LogEntryListResponse> {
    const response = await this.get(`/log-entry`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogEntryListResponse;

    throw new Error(
      `Failed to fetch log entry list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogEntryCreateResponse;

    throw new Error(`Failed to create log entry: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchLogEntries(
    request: LogEntryListSearchRequest
  ): Promise<LogEntryListSearchResponse> {
    const response = await this.get(`/search/log-entry`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogEntryListSearchResponse;

    throw new Error(
      `Failed to search for log entries: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLogEntry(id: string): Promise<LogEntrySingleResponse> {
    const response = await this.get(`/log-entry/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogEntrySingleResponse;

    throw new Error(`Failed to fetch log entry: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteLogEntry(id: string): Promise<void> {
    const response = await this.delete(`/log-entry/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete log entry: ${response.statusCode} ${response.statusMessage}`);
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogEntryUpdateResponse;

    throw new Error(`Failed to update log entry: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLogEntryAggregate(
    request: LogEntryAggregationRequest
  ): Promise<LogEntryAggregationResponse> {
    const response = await this.post(`/aggregate/log-entry`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LogEntryAggregationResponse;

    throw new Error(
      `Failed to aggregate log entry: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Notifications **/

  /**
   * @throws {Error} if the request failed
   */
  public async getNotifications(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<NotificationListResponse> {
    const response = await this.get(`/notification`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NotificationListResponse;

    throw new Error(
      `Failed to fetch notification list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NotificationCreateResponse;

    throw new Error(
      `Failed to create notification: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchNotifications(
    request: NotificationListSearchRequest
  ): Promise<NotificationListSearchResponse> {
    const response = await this.get(`/search/notification`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NotificationListSearchResponse;

    throw new Error(
      `Failed to search for notifications: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getNotification(id: string): Promise<NotificationSingleResponse> {
    const response = await this.get(`/notification/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NotificationSingleResponse;

    throw new Error(
      `Failed to fetch notification: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteNotification(id: string): Promise<void> {
    const response = await this.delete(`/notification/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete notification: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NotificationUpdateResponse;

    throw new Error(
      `Failed to update notification: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getNotificationAggregate(
    request: NotificationAggregationRequest
  ): Promise<NotificationAggregationResponse> {
    const response = await this.post(`/aggregate/notification`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NotificationAggregationResponse;

    throw new Error(
      `Failed to aggregate notification: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Config Entries **/

  /**
   * @throws {Error} if the request failed
   */
  public async getConfigEntries(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ConfigEntryListResponse> {
    const response = await this.get(`/system-config`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigEntryListResponse;

    throw new Error(
      `Failed to fetch config entry list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigEntryCreateResponse;

    throw new Error(
      `Failed to create config entry: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchConfigEntries(
    request: ConfigEntryListSearchRequest
  ): Promise<ConfigEntryListSearchResponse> {
    const response = await this.get(`/search/system-config`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigEntryListSearchResponse;

    throw new Error(
      `Failed to search for config entries: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getConfigEntry(id: string): Promise<ConfigEntrySingleResponse> {
    const response = await this.get(`/system-config/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigEntrySingleResponse;

    throw new Error(
      `Failed to fetch config entry: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteConfigEntry(id: string): Promise<void> {
    const response = await this.delete(`/system-config/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete config entry: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigEntryUpdateResponse;

    throw new Error(
      `Failed to update config entry: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getConfigEntryAggregate(
    request: ConfigEntryAggregationRequest
  ): Promise<ConfigEntryAggregationResponse> {
    const response = await this.post(`/aggregate/system-config`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConfigEntryAggregationResponse;

    throw new Error(
      `Failed to aggregate config entry: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Scheduled Tasks **/

  /**
   * @throws {Error} if the request failed
   */
  public async getScheduledTasks(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ScheduledTaskListResponse> {
    const response = await this.get(`/scheduled-task`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskListResponse;

    throw new Error(
      `Failed to fetch scheduled task list: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskCreateResponse;

    throw new Error(
      `Failed to create scheduled task: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchScheduledTasks(
    request: ScheduledTaskListSearchRequest
  ): Promise<ScheduledTaskListSearchResponse> {
    const response = await this.get(`/search/scheduled-task`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskListSearchResponse;

    throw new Error(
      `Failed to search for scheduled tasks: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getScheduledTask(id: string): Promise<ScheduledTaskSingleResponse> {
    const response = await this.get(`/scheduled-task/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskSingleResponse;

    throw new Error(
      `Failed to fetch scheduled task: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteScheduledTask(id: string): Promise<void> {
    const response = await this.delete(`/scheduled-task/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete scheduled task: ${response.statusCode} ${response.statusMessage}`
    );
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
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskUpdateResponse;

    throw new Error(
      `Failed to update scheduled task: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getScheduledTaskAggregate(
    request: ScheduledTaskAggregationRequest
  ): Promise<ScheduledTaskAggregationResponse> {
    const response = await this.post(`/aggregate/scheduled-task`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScheduledTaskAggregationResponse;

    throw new Error(
      `Failed to aggregate scheduled task: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default SystemClient;
