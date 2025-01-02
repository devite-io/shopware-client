import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
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
   * @throws {Error} if the request failed
   */
  public async getWebhooks(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<WebhookListResponse> {
    const response = await this.get(`/webhook`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WebhookListResponse;

    throw new Error(
      `Failed to fetch webhook li1st: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(`Failed to create webhook: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchWebhooks(
    request: WebhookListSearchRequest
  ): Promise<WebhookListSearchResponse> {
    const response = await this.get(`/search/webhook`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WebhookListSearchResponse;

    throw new Error(
      `Failed to search for webhooks: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getWebhook(id: string): Promise<WebhookSingleResponse> {
    const response = await this.get(`/webhook/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WebhookSingleResponse;

    throw new Error(`Failed to fetch webhook: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteWebhook(id: string): Promise<void> {
    const response = await this.delete(`/webhook/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete webhook: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WebhookUpdateResponse;

    throw new Error(`Failed to update webhook: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to aggregate webhook: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Event Logs **/

  /**
   * @throws {Error} if the request failed
   */
  public async getEventLogs(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<EventLogListResponse> {
    const response = await this.get(`/webhook-event-log`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as EventLogListResponse;

    throw new Error(
      `Failed to fetch event log li1st: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(`Failed to create event log: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchEventLogs(
    request: EventLogListSearchRequest
  ): Promise<EventLogListSearchResponse> {
    const response = await this.get(`/search/webhook-event-log`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as EventLogListSearchResponse;

    throw new Error(
      `Failed to search for event logs: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getEventLog(id: string): Promise<EventLogSingleResponse> {
    const response = await this.get(`/webhook-event-log/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as EventLogSingleResponse;

    throw new Error(`Failed to fetch event log: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteEventLog(id: string): Promise<void> {
    const response = await this.delete(`/webhook-event-log/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete event log: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as EventLogUpdateResponse;

    throw new Error(`Failed to update event log: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to aggregate event log: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default WebhookClient;
