import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
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
  public async getShippingMethods(query?: Criteria): Promise<ShippingMethodListResponse> {
    const response = await this.get(`/shipping-method` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodListResponse;

    throw new ShopwareError("Failed to fetch shipping method list", response);
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

    throw new ShopwareError("Failed to create shipping method", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchShippingMethods(
    request: ShippingMethodListSearchRequest
  ): Promise<ShippingMethodListSearchResponse> {
    const response = await this.post(`/search/shipping-method`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodListSearchResponse;

    throw new ShopwareError("Failed to search for shipping methods", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getShippingMethod(
    id: string,
    query?: Criteria
  ): Promise<ShippingMethodSingleResponse> {
    const response = await this.get(`/shipping-method/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodSingleResponse;

    throw new ShopwareError("Failed to fetch shipping method", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteShippingMethod(id: string): Promise<void> {
    const response = await this.delete(`/shipping-method/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete shipping method", response);
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

    throw new ShopwareError("Failed to update shipping method", response);
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

    throw new ShopwareError("Failed to aggregate shipping method", response);
  }

  /** Prices **/

  /**
   * @throws {Error} if the request failed
   */
  public async getPrices(query?: Criteria): Promise<PriceListResponse> {
    const response = await this.get(`/shipping-method-price` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceListResponse;

    throw new ShopwareError("Failed to fetch shipping method list", response);
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

    throw new ShopwareError("Failed to create shipping method", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchPrices(request: PriceListSearchRequest): Promise<PriceListSearchResponse> {
    const response = await this.post(`/search/shipping-method-price`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceListSearchResponse;

    throw new ShopwareError("Failed to search for prices", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPrice(id: string, query?: Criteria): Promise<PriceSingleResponse> {
    const response = await this.get(`/shipping-method-price/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PriceSingleResponse;

    throw new ShopwareError("Failed to fetch price", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deletePrice(id: string): Promise<void> {
    const response = await this.delete(`/shipping-method-price/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete price", response);
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

    throw new ShopwareError("Failed to update price", response);
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

    throw new ShopwareError("Failed to aggregate price", response);
  }
}

export default ShippingMethodClient;
