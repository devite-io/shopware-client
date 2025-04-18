import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
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
   * Requires `unit:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getUnits(query?: Criteria): Promise<UnitListResponse> {
    const response = await this.get(`/unit` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as UnitListResponse;

    throw new ShopwareError("Failed to fetch unit list", response);
  }

  /**
   * Requires `unit:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as UnitCreateResponse;

    throw new ShopwareError("Failed to create unit", response);
  }

  /**
   * Requires `unit:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchUnits(request: UnitListSearchRequest): Promise<UnitListSearchResponse> {
    const response = await this.post(`/search/unit`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UnitListSearchResponse;

    throw new ShopwareError("Failed to search for units", response);
  }

  /**
   * Requires `unit:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getUnit(id: string, query?: Criteria): Promise<UnitSingleResponse> {
    const response = await this.get(`/unit/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UnitSingleResponse;

    throw new ShopwareError("Failed to fetch unit", response);
  }

  /**
   * Requires `unit:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteUnit(id: string): Promise<void> {
    const response = await this.delete(`/unit/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete unit", response);
  }

  /**
   * Requires `unit:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as UnitUpdateResponse;

    throw new ShopwareError("Failed to update unit", response);
  }

  /**
   * Requires `unit:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getUnitAggregate(request: UnitAggregationRequest): Promise<UnitAggregationResponse> {
    const response = await this.post(`/aggregate/unit`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UnitAggregationResponse;

    throw new ShopwareError("Failed to aggregate unit", response);
  }
}

export default UnitClient;
