import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import {
  PriceAggregationRequest,
  PriceAggregationResponse,
  PriceCreateRequest,
  PriceCreateResponse,
  PriceListResponse,
  PriceListSearchRequest,
  PriceListSearchResponse,
  PriceSingleResponse,
  PriceUpdateRequest,
  PriceUpdateResponse,
  ShippingMethodAggregationRequest,
  ShippingMethodAggregationResponse,
  ShippingMethodCreateRequest,
  ShippingMethodCreateResponse,
  ShippingMethodListResponse,
  ShippingMethodListSearchRequest,
  ShippingMethodListSearchResponse,
  ShippingMethodSingleResponse,
  ShippingMethodUpdateRequest,
  ShippingMethodUpdateResponse
} from "#types/clients/admin/ShippingMethodClient";

class ShippingMethodClient extends Client {
  /** Shipping Methods **/

  /**
   * @throws {Error} if the request failed
   */
  public async getShippingMethods(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ShippingMethodListResponse> {
    const response = await this.get(`/shipping-method`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodListResponse;

    throw new Error(
      `Failed to fetch shipping method list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createShippingMethod(
    request: ShippingMethodCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ShippingMethodCreateResponse> {
    const response = await this.post(`/shipping-method`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodCreateResponse;

    throw new Error(
      `Failed to create shipping method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchShippingMethods(
    request: ShippingMethodListSearchRequest
  ): Promise<ShippingMethodListSearchResponse> {
    const response = await this.get(`/search/shipping-method`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodListSearchResponse;

    throw new Error(
      `Failed to search for shipping methods: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getShippingMethod(id: string): Promise<ShippingMethodSingleResponse> {
    const response = await this.get(`/shipping-method/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodSingleResponse;

    throw new Error(
      `Failed to fetch shipping method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteShippingMethod(id: string): Promise<void> {
    const response = await this.delete(`/shipping-method/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete shipping method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateShippingMethod(
    id: string,
    request: ShippingMethodUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ShippingMethodUpdateResponse> {
    const response = await this.patch(`/shipping-method/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodUpdateResponse;

    throw new Error(
      `Failed to update shipping method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getShippingMethodAggregate(
    request: ShippingMethodAggregationRequest
  ): Promise<ShippingMethodAggregationResponse> {
    const response = await this.post(`/aggregate/shipping-method`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodAggregationResponse;

    throw new Error(
      `Failed to aggregate shipping method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Prices **/

  /**
   * @throws {Error} if the request failed
   */
  public async getPrices(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<PriceListResponse> {
    const response = await this.get(`/shipping-method-price`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceListResponse;

    throw new Error(
      `Failed to fetch shipping method list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createPrice(
    request: PriceCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PriceCreateResponse> {
    const response = await this.post(`/shipping-method-price`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceCreateResponse;

    throw new Error(
      `Failed to create shipping method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchPrices(request: PriceListSearchRequest): Promise<PriceListSearchResponse> {
    const response = await this.get(`/search/shipping-method-price`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceListSearchResponse;

    throw new Error(
      `Failed to search for prices: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPrice(id: string): Promise<PriceSingleResponse> {
    const response = await this.get(`/shipping-method-price/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceSingleResponse;

    throw new Error(`Failed to fetch price: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deletePrice(id: string): Promise<void> {
    const response = await this.delete(`/shipping-method-price/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete price: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updatePrice(
    id: string,
    request: PriceUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PriceUpdateResponse> {
    const response = await this.patch(`/shipping-method-price/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceUpdateResponse;

    throw new Error(`Failed to update price: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPriceAggregate(
    request: PriceAggregationRequest
  ): Promise<PriceAggregationResponse> {
    const response = await this.post(`/aggregate/shipping-method-price`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceAggregationResponse;

    throw new Error(`Failed to aggregate price: ${response.statusCode} ${response.statusMessage}`);
  }
}

export default ShippingMethodClient;
