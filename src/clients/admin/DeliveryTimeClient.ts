import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  DeliveryTimeAggregationRequest,
  DeliveryTimeAggregationResponse,
  DeliveryTimeCreateRequest,
  DeliveryTimeCreateResponse,
  DeliveryTimeListResponse,
  DeliveryTimeListSearchRequest,
  DeliveryTimeListSearchResponse,
  DeliveryTimeSingleResponse,
  DeliveryTimeUpdateRequest,
  DeliveryTimeUpdateResponse
} from "#types/clients/admin/DeliveryTimeClient";

class DeliveryTimeClient extends Client {
  /**
   * Requires `delivery-time:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getDeliveryTimes(query?: Criteria): Promise<DeliveryTimeListResponse> {
    const response = await this.get(`/delivery-time` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryTimeListResponse;

    throw new ShopwareError("Failed to fetch delivery time list", response);
  }

  /**
   * Requires `delivery-time:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createDeliveryTime(
    request: DeliveryTimeCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DeliveryTimeCreateResponse> {
    const response = await this.post(`/delivery-time`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as DeliveryTimeCreateResponse;

    throw new ShopwareError("Failed to create delivery time", response);
  }

  /**
   * Requires `delivery-time:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchDeliveryTimes(
    request: DeliveryTimeListSearchRequest
  ): Promise<DeliveryTimeListSearchResponse> {
    const response = await this.post(`/search/delivery-time`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryTimeListSearchResponse;

    throw new ShopwareError("Failed to search for delivery times", response);
  }

  /**
   * Requires `delivery-time:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getDeliveryTime(id: string, query?: Criteria): Promise<DeliveryTimeSingleResponse> {
    const response = await this.get(`/delivery-time/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryTimeSingleResponse;

    throw new ShopwareError("Failed to fetch delivery time", response);
  }

  /**
   * Requires `delivery-time:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteDeliveryTime(id: string): Promise<void> {
    const response = await this.delete(`/delivery-time/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete delivery time", response);
  }

  /**
   * Requires `delivery-time:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateDeliveryTime(
    id: string,
    request: DeliveryTimeUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DeliveryTimeUpdateResponse> {
    const response = await this.patch(`/delivery-time/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as DeliveryTimeUpdateResponse;

    throw new ShopwareError("Failed to update delivery time", response);
  }

  /**
   * Requires `delivery-time:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getDeliveryTimeAggregate(
    request: DeliveryTimeAggregationRequest
  ): Promise<DeliveryTimeAggregationResponse> {
    const response = await this.post(`/aggregate/delivery-time`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryTimeAggregationResponse;

    throw new ShopwareError("Failed to aggregate delivery time", response);
  }
}

export default DeliveryTimeClient;
