import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import {
  RecipientAggregationRequest,
  RecipientAggregationResponse,
  RecipientCreateRequest,
  RecipientCreateResponse,
  RecipientListResponse,
  RecipientListSearchRequest,
  RecipientListSearchResponse,
  RecipientSingleResponse,
  RecipientUpdateRequest,
  RecipientUpdateResponse
} from "#types/clients/admin/NewsletterClient";

class NewsletterClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async getRecipients(query?: Criteria): Promise<RecipientListResponse> {
    const response = await this.get(`/newsletter-recipient` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecipientListResponse;

    throw new Error(
      `Failed to fetch recipient list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createRecipient(
    request: RecipientCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<RecipientCreateResponse> {
    const response = await this.post(`/newsletter-recipient`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecipientCreateResponse;

    throw new Error(`Failed to create recipient: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchRecipients(
    request: RecipientListSearchRequest
  ): Promise<RecipientListSearchResponse> {
    const response = await this.get(`/search/newsletter-recipient`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecipientListSearchResponse;

    throw new Error(
      `Failed to search for recipients: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getRecipient(id: string, query?: Criteria): Promise<RecipientSingleResponse> {
    const response = await this.get(`/newsletter-recipient/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecipientSingleResponse;

    throw new Error(`Failed to fetch recipient: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteRecipient(id: string): Promise<void> {
    const response = await this.delete(`/newsletter-recipient/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete recipient: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateRecipient(
    id: string,
    request: RecipientUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<RecipientUpdateResponse> {
    const response = await this.patch(`/newsletter-recipient/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecipientUpdateResponse;

    throw new Error(`Failed to update recipient: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getRecipientAggregate(
    request: RecipientAggregationRequest
  ): Promise<RecipientAggregationResponse> {
    const response = await this.post(`/aggregate/newsletter-recipient`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RecipientAggregationResponse;

    throw new Error(
      `Failed to aggregate recipient: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default NewsletterClient;
