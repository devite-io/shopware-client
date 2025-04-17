import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  EventLogAggregationRequest,
  EventLogAggregationResponse,
  EventLogCreateRequest,
  EventLogCreateResponse,
  EventLogListResponse,
  EventLogListSearchRequest,
  EventLogListSearchResponse,
  EventLogSingleResponse,
  EventLogUpdateRequest,
  EventLogUpdateResponse,
  WebhookAggregationRequest,
  WebhookAggregationResponse,
  WebhookCreateRequest,
  WebhookCreateResponse,
  WebhookListResponse,
  WebhookListSearchRequest,
  WebhookListSearchResponse,
  WebhookSingleResponse,
  WebhookUpdateRequest,
  WebhookUpdateResponse
} from "#types/clients/admin/WebhookClient";

class WebhookClient extends Client {
  /** Webhooks **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getWebhooks(query?: Criteria): Promise<WebhookListResponse> {
    const response = await this.get(`/webhook` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WebhookListResponse;

    throw new ShopwareError("Failed to fetch webhook li1st", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createWebhook(
    request: WebhookCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<WebhookCreateResponse> {
    const response = await this.post(`/webhook`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WebhookCreateResponse;

    throw new ShopwareError("Failed to create webhook", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchWebhooks(
    request: WebhookListSearchRequest
  ): Promise<WebhookListSearchResponse> {
    const response = await this.post(`/search/webhook`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WebhookListSearchResponse;

    throw new ShopwareError("Failed to search for webhooks", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getWebhook(id: string, query?: Criteria): Promise<WebhookSingleResponse> {
    const response = await this.get(`/webhook/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WebhookSingleResponse;

    throw new ShopwareError("Failed to fetch webhook", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteWebhook(id: string): Promise<void> {
    const response = await this.delete(`/webhook/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete webhook", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateWebhook(
    id: string,
    request: WebhookUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<WebhookUpdateResponse> {
    const response = await this.patch(`/webhook/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as WebhookUpdateResponse;

    throw new ShopwareError("Failed to update webhook", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getWebhookAggregate(
    request: WebhookAggregationRequest
  ): Promise<WebhookAggregationResponse> {
    const response = await this.post(`/aggregate/webhook`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WebhookAggregationResponse;

    throw new ShopwareError("Failed to aggregate webhook", response);
  }

  /** Event Logs **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getEventLogs(query?: Criteria): Promise<EventLogListResponse> {
    const response = await this.get(`/webhook-event-log` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as EventLogListResponse;

    throw new ShopwareError("Failed to fetch event log li1st", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createEventLog(
    request: EventLogCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<EventLogCreateResponse> {
    const response = await this.post(`/webhook-event-log`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as EventLogCreateResponse;

    throw new ShopwareError("Failed to create event log", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchEventLogs(
    request: EventLogListSearchRequest
  ): Promise<EventLogListSearchResponse> {
    const response = await this.post(`/search/webhook-event-log`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as EventLogListSearchResponse;

    throw new ShopwareError("Failed to search for event logs", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getEventLog(id: string, query?: Criteria): Promise<EventLogSingleResponse> {
    const response = await this.get(`/webhook-event-log/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as EventLogSingleResponse;

    throw new ShopwareError("Failed to fetch event log", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteEventLog(id: string): Promise<void> {
    const response = await this.delete(`/webhook-event-log/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete event log", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateEventLog(
    id: string,
    request: EventLogUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<EventLogUpdateResponse> {
    const response = await this.patch(`/webhook-event-log/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as EventLogUpdateResponse;

    throw new ShopwareError("Failed to update event log", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getEventLogAggregate(
    request: EventLogAggregationRequest
  ): Promise<EventLogAggregationResponse> {
    const response = await this.post(`/aggregate/webhook-event-log`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as EventLogAggregationResponse;

    throw new ShopwareError("Failed to aggregate event log", response);
  }
}

export default WebhookClient;
