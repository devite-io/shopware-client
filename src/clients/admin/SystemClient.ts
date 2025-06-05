import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import {
  ApiConfigResponse,
  BusinessEventsResponse,
  CacheInfoResponse,
  FlowBuilderActionsResponse,
  HealthReportResponse,
  IndexIterationRequest,
  IndexIterationResponse,
  IndexRequest,
  MessageQueueConsumptionRequest,
  MessageQueueConsumptionResponse,
  ScheduledTaskMinIntervalResponse,
  ScheduledTaskRunResponse,
  ShopwareVersionResponse
} from "#types/clients/admin/SystemClient";
import { LogEntry } from "#types/api/admin/LogEntry";
import { Notification } from "#types/api/admin/Notification";
import { SystemConfigEntry } from "#types/api/admin/SystemConfigEntry";
import { ScheduledTask } from "#types/api/admin/ScheduledTask";
import createRestEndpoint from "../../utils/createRestEndpoint";

class SystemClient extends Client {
  /** Info & Health **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getShopwareVersion(): Promise<ShopwareVersionResponse> {
    const response = await this.get(`/_info/version`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShopwareVersionResponse;

    throw new ShopwareError("Failed to fetch Shopware version", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async checkApiHealth(): Promise<void> {
    const response = await this.get(`/_info/health-check`);

    if (response.statusCode === 200) return;

    throw new ShopwareError("Failed to verify API health", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getApiConfig(): Promise<ApiConfigResponse> {
    const response = await this.get(`/_info/config`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ApiConfigResponse;

    throw new ShopwareError("Failed to fetch API config", response);
  }

  /** Operations **/

  /**
   * Requires `api_action_cache_index` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async index(request: IndexRequest): Promise<void> {
    const response = await this.post(`/_action/index`, { body: new JsonPayload(request) });

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to start indexing", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async clearOldCacheFolders(): Promise<void> {
    const response = await this.delete(`/_action/cleanup`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to clear old cache folders", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async indexProducts(): Promise<void> {
    const response = await this.post(`/_action/index-products`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to start product indexing", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async clearContainerCaches(): Promise<void> {
    const response = await this.post(`/_action/container-cache`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to clear container caches", response);
  }

  /**
   * Requires `system:clear:cache` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async clearCaches(): Promise<void> {
    const response = await this.post(`/_action/cache`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to clear caches", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async clearInvalidatedCaches(): Promise<void> {
    const response = await this.post(`/_action/cache-delayed`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to clear invalidated caches", response);
  }

  /** Rest Endpoints **/

  public logsEntries = createRestEndpoint<LogEntry>(this, "/log-entry", "log entry");
  public notifications = createRestEndpoint<Notification>(this, "/notification", "notification");
  public configEntries = createRestEndpoint<SystemConfigEntry>(
    this,
    "system-config",
    "config entry"
  );
  public scheduledTasks = createRestEndpoint<ScheduledTask>(
    this,
    "scheduled-task",
    "scheduled task"
  );
}

export default SystemClient;
