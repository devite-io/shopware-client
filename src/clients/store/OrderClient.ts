import Client from "../Client";
import type StoreShopwareClient from "../StoreShopwareClient";
import {
  OrderCancelRequest,
  OrderCancelResponse,
  OrderDownloadFileResponse,
  OrderFromCartRequest,
  OrderFromCartResponse,
  OrderListRequest,
  OrderListResponse,
  OrderPaymentInitiateRequest,
  OrderPaymentInitiateResponse,
  OrderUpdatePaymentMethodRequest,
  OrderUpdatePaymentMethodResponse
} from "#types/clients/store/OrderClient";
import JsonPayload from "#payloads/JsonPayload";
import BinaryPayload from "#payloads/BinaryPayload";

class OrderClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async initiatePayment(
    request: OrderPaymentInitiateRequest
  ): Promise<OrderPaymentInitiateResponse> {
    const response = await this.post("/handle-payment", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderPaymentInitiateResponse;

    throw new Error(
      `Failed to initiate order payment: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async cancel(request: OrderCancelRequest): Promise<OrderCancelResponse> {
    const response = await this.post(
      "/order/state/cancel",
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderCancelResponse;

    throw new Error(`Failed to cancel order: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getOrders(request: OrderListRequest = {}): Promise<OrderListResponse> {
    const response = await this.post(
      "/order",
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderListResponse;

    throw new Error(`Failed to fetch order list: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updatePaymentMethod(
    request: OrderUpdatePaymentMethodRequest
  ): Promise<OrderUpdatePaymentMethodResponse> {
    const response = await this.post(
      "/order/payment",
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderUpdatePaymentMethodResponse;

    throw new Error(
      `Failed to update order payment method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async downloadPurchasedFile(
    downloadId: string,
    orderId: string
  ): Promise<OrderDownloadFileResponse> {
    const response = await this.get(
      `/order/download/${orderId}/${downloadId}`,
      (this.client as StoreShopwareClient).withContextToken()
    );

    if (response.statusCode === 200)
      return (response.body as BinaryPayload).data as OrderDownloadFileResponse;

    throw new Error(
      `Failed to download purchased file: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createFromCart(request: OrderFromCartRequest = {}): Promise<OrderFromCartResponse> {
    const response = await this.post(
      "/checkout/order",
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderFromCartResponse;

    throw new Error(
      `Failed to create order from cart: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default OrderClient;
