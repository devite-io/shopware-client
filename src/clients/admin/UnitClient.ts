import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
import {
  UnitAggregationRequest,
  UnitAggregationResponse,
  UnitCreateRequest,
  UnitCreateResponse,
  UnitListResponse,
  UnitListSearchRequest,
  UnitListSearchResponse,
  UnitSingleResponse,
  UnitUpdateRequest,
  UnitUpdateResponse
} from "#types/clients/admin/UnitClient";

class UnitClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async getUnits(limit?: number, page?: number, query?: string): Promise<UnitListResponse> {
    const response = await this.get(`/unit`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as UnitListResponse;

    throw new Error(`Failed to fetch unit list: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createUnit(
    request: UnitCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<UnitCreateResponse> {
    const response = await this.post(`/unit`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UnitCreateResponse;

    throw new Error(`Failed to create unit: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchUnits(request: UnitListSearchRequest): Promise<UnitListSearchResponse> {
    const response = await this.get(`/search/unit`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UnitListSearchResponse;

    throw new Error(`Failed to search for units: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getUnit(id: string): Promise<UnitSingleResponse> {
    const response = await this.get(`/unit/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UnitSingleResponse;

    throw new Error(`Failed to fetch unit: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteUnit(id: string): Promise<void> {
    const response = await this.delete(`/unit/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete unit: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateUnit(
    id: string,
    request: UnitUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<UnitUpdateResponse> {
    const response = await this.patch(`/unit/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UnitUpdateResponse;

    throw new Error(`Failed to update unit: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getUnitAggregate(request: UnitAggregationRequest): Promise<UnitAggregationResponse> {
    const response = await this.post(`/aggregate/unit`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UnitAggregationResponse;

    throw new Error(`Failed to aggregate unit: ${response.statusCode} ${response.statusMessage}`);
  }
}

export default UnitClient;
