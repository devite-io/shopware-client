import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
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
   * @throws {Error} if the request failed
   */
  public async getPaymentMethods(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<PaymentMethodListResponse> {
    const response = await this.get(`/payment-method`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodListResponse;

    throw new Error(
      `Failed to fetch payment method list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodCreateResponse;

    throw new Error(
      `Failed to create payment method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchPaymentMethods(
    request: PaymentMethodListSearchRequest
  ): Promise<PaymentMethodListSearchResponse> {
    const response = await this.get(`/search/payment-method`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodListSearchResponse;

    throw new Error(
      `Failed to search for payment methods: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPaymentMethod(id: string): Promise<PaymentMethodSingleResponse> {
    const response = await this.get(`/payment-method/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodSingleResponse;

    throw new Error(
      `Failed to fetch payment method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deletePaymentMethod(id: string): Promise<void> {
    const response = await this.delete(`/payment-method/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete payment method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodUpdateResponse;

    throw new Error(
      `Failed to update payment method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to aggregate payment method: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default PaymentMethodClient;
