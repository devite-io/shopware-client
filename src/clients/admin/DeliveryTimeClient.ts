import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
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
   * @throws {Error} if the request failed
   */
  public async getDeliveryTimes(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<DeliveryTimeListResponse> {
    const response = await this.get(`/delivery-time`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryTimeListResponse;

    throw new Error(
      `Failed to fetch delivery time list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createDeliveryTime(
    request: DeliveryTimeCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DeliveryTimeCreateResponse> {
    const response = await this.post(`/delivery-time`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryTimeCreateResponse;

    throw new Error(
      `Failed to create delivery time: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchDeliveryTimes(
    request: DeliveryTimeListSearchRequest
  ): Promise<DeliveryTimeListSearchResponse> {
    const response = await this.get(`/search/delivery-time`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryTimeListSearchResponse;

    throw new Error(
      `Failed to search for delivery times: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDeliveryTime(id: string): Promise<DeliveryTimeSingleResponse> {
    const response = await this.get(`/delivery-time/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryTimeSingleResponse;

    throw new Error(
      `Failed to fetch delivery time: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteDeliveryTime(id: string): Promise<void> {
    const response = await this.delete(`/delivery-time/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete delivery time: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateDeliveryTime(
    id: string,
    request: DeliveryTimeUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DeliveryTimeUpdateResponse> {
    const response = await this.patch(`/delivery-time/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryTimeUpdateResponse;

    throw new Error(
      `Failed to update delivery time: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDeliveryTimeAggregate(
    request: DeliveryTimeAggregationRequest
  ): Promise<DeliveryTimeAggregationResponse> {
    const response = await this.post(`/aggregate/delivery-time`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DeliveryTimeAggregationResponse;

    throw new Error(
      `Failed to aggregate delivery time: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default DeliveryTimeClient;
