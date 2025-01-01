import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
import {
  SalutationAggregationRequest,
  SalutationAggregationResponse,
  SalutationCreateRequest,
  SalutationCreateResponse,
  SalutationListResponse,
  SalutationListSearchRequest,
  SalutationListSearchResponse,
  SalutationSingleResponse,
  SalutationUpdateRequest,
  SalutationUpdateResponse
} from "#types/clients/admin/SalutationClient";

class SalutationClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async getSalutations(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<SalutationListResponse> {
    const response = await this.get(`/salutation`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalutationListResponse;

    throw new Error(
      `Failed to fetch salutation list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createSalutation(
    request: SalutationCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SalutationCreateResponse> {
    const response = await this.post(`/salutation`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalutationCreateResponse;

    throw new Error(
      `Failed to create salutation: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchSalutations(
    request: SalutationListSearchRequest
  ): Promise<SalutationListSearchResponse> {
    const response = await this.get(`/search/salutation`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalutationListSearchResponse;

    throw new Error(
      `Failed to search for salutations: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSalutation(id: string): Promise<SalutationSingleResponse> {
    const response = await this.get(`/salutation/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalutationSingleResponse;

    throw new Error(`Failed to fetch salutation: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSalutation(id: string): Promise<void> {
    const response = await this.delete(`/salutation/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete salutation: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateSalutation(
    id: string,
    request: SalutationUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SalutationUpdateResponse> {
    const response = await this.patch(`/salutation/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalutationUpdateResponse;

    throw new Error(
      `Failed to update salutation: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSalutationAggregate(
    request: SalutationAggregationRequest
  ): Promise<SalutationAggregationResponse> {
    const response = await this.post(`/aggregate/salutation`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalutationAggregationResponse;

    throw new Error(
      `Failed to aggregate salutation: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default SalutationClient;
