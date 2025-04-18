import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  PaymentMethodAggregationRequest,
  PaymentMethodAggregationResponse,
  PaymentMethodCreateRequest,
  PaymentMethodCreateResponse,
  PaymentMethodListResponse,
  PaymentMethodListSearchRequest,
  PaymentMethodListSearchResponse,
  PaymentMethodSingleResponse,
  PaymentMethodUpdateRequest,
  PaymentMethodUpdateResponse
} from "#types/clients/admin/PaymentMethodClient";

class PaymentMethodClient extends Client {
  /**
   * Requires `payment-method:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getPaymentMethods(query?: Criteria): Promise<PaymentMethodListResponse> {
    const response = await this.get(`/payment-method` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodListResponse;

    throw new ShopwareError("Failed to fetch payment method list", response);
  }

  /**
   * Requires `payment-method:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createPaymentMethod(
    request: PaymentMethodCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PaymentMethodCreateResponse> {
    const response = await this.post(`/payment-method`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as PaymentMethodCreateResponse;

    throw new ShopwareError("Failed to create payment method", response);
  }

  /**
   * Requires `payment-method:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchPaymentMethods(
    request: PaymentMethodListSearchRequest
  ): Promise<PaymentMethodListSearchResponse> {
    const response = await this.post(`/search/payment-method`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodListSearchResponse;

    throw new ShopwareError("Failed to search for payment methods", response);
  }

  /**
   * Requires `payment-method:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getPaymentMethod(
    id: string,
    query?: Criteria
  ): Promise<PaymentMethodSingleResponse> {
    const response = await this.get(`/payment-method/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodSingleResponse;

    throw new ShopwareError("Failed to fetch payment method", response);
  }

  /**
   * Requires `payment-method:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deletePaymentMethod(id: string): Promise<void> {
    const response = await this.delete(`/payment-method/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete payment method", response);
  }

  /**
   * Requires `payment-method:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updatePaymentMethod(
    id: string,
    request: PaymentMethodUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PaymentMethodUpdateResponse> {
    const response = await this.patch(`/payment-method/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as PaymentMethodUpdateResponse;

    throw new ShopwareError("Failed to update payment method", response);
  }

  /**
   * Requires `payment-method:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getPaymentMethodAggregate(
    request: PaymentMethodAggregationRequest
  ): Promise<PaymentMethodAggregationResponse> {
    const response = await this.post(`/aggregate/payment-method`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodAggregationResponse;

    throw new ShopwareError("Failed to aggregate payment method", response);
  }
}

export default PaymentMethodClient;
