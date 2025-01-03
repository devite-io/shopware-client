import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
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
  public async getIntegrations(query?: Criteria): Promise<IntegrationListResponse> {
    const response = await this.get(`/integration` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IntegrationListResponse;

    throw new ShopwareError("Failed to fetch integration list", response);
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
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IntegrationCreateResponse;

    throw new ShopwareError("Failed to create integration", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchIntegrations(
    request: IntegrationListSearchRequest
  ): Promise<IntegrationListSearchResponse> {
    const response = await this.get(`/search/integration`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IntegrationListSearchResponse;

    throw new ShopwareError("Failed to search for integrations", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getIntegration(id: string, query?: Criteria): Promise<IntegrationSingleResponse> {
    const response = await this.get(`/integration/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IntegrationSingleResponse;

    throw new ShopwareError("Failed to fetch integration", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteIntegration(id: string): Promise<void> {
    const response = await this.delete(`/integration/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete integration", response);
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
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IntegrationUpdateResponse;

    throw new ShopwareError("Failed to update integration", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getIntegrationAggregate(
    request: IntegrationAggregationRequest
  ): Promise<IntegrationAggregationResponse> {
    const response = await this.post(`/aggregate/integration`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as IntegrationAggregationResponse;

    throw new ShopwareError("Failed to aggregate integration", response);
  }
}

export default IntegrationClient;
