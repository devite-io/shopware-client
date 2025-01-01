import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
import {
  IntegrationAggregationRequest,
  IntegrationAggregationResponse,
  IntegrationCreateRequest,
  IntegrationCreateResponse,
  IntegrationListResponse,
  IntegrationListSearchRequest,
  IntegrationListSearchResponse,
  IntegrationSingleResponse,
  IntegrationUpdateRequest,
  IntegrationUpdateResponse
} from "#types/clients/admin/IntegrationClient";

class IntegrationClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async getIntegrations(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<IntegrationListResponse> {
    const response = await this.get(`/integration`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IntegrationListResponse;

    throw new Error(
      `Failed to fetch integration list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createIntegration(
    request: IntegrationCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<IntegrationCreateResponse> {
    const response = await this.post(`/integration`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IntegrationCreateResponse;

    throw new Error(
      `Failed to create integration: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchIntegrations(
    request: IntegrationListSearchRequest
  ): Promise<IntegrationListSearchResponse> {
    const response = await this.get(`/search/integration`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IntegrationListSearchResponse;

    throw new Error(
      `Failed to search for integrations: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getIntegration(id: string): Promise<IntegrationSingleResponse> {
    const response = await this.get(`/integration/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IntegrationSingleResponse;

    throw new Error(
      `Failed to fetch integration: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteIntegration(id: string): Promise<void> {
    const response = await this.delete(`/integration/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete integration: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateIntegration(
    id: string,
    request: IntegrationUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<IntegrationUpdateResponse> {
    const response = await this.patch(`/integration/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IntegrationUpdateResponse;

    throw new Error(
      `Failed to update integration: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getIntegrationAggregate(
    request: IntegrationAggregationRequest
  ): Promise<IntegrationAggregationResponse> {
    const response = await this.post(`/aggregate/integration`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IntegrationAggregationResponse;

    throw new Error(
      `Failed to aggregate integration: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default IntegrationClient;
