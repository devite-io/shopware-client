import Client from "#clients/Client";
import JsonPayload from "#payloads/JsonPayload";
import BinaryPayload from "#payloads/BinaryPayload";
import {
  OrderCancelRequest,
  OrderCancelResponse,
  OrderDownloadFileResponse,
  OrderFromCartRequest,
  OrderFromCartResponse,
  OrderListRequest,
  OrderListResponse,
  OrderUpdatePaymentMethodRequest,
  OrderUpdatePaymentMethodResponse
} from "#types/clients/OrderClient";

class OrderClient extends Client {
  /**
   * @throws {Error} if the request fails
   */
  public async cancelOrder(request: OrderCancelRequest): Promise<OrderCancelResponse> {
    const response = await this.post(
      "/order/state/cancel",
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderCancelResponse;

    throw new Error(`Failed to cancel order: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
   */
  public async getOrderList(request: OrderListRequest = {}): Promise<OrderListResponse> {
    const response = await this.post(
      "/order",
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OrderListResponse;

    throw new Error(`Failed to fetch order list: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
   */
  public async updateOrderPaymentMethod(
    request: OrderUpdatePaymentMethodRequest
  ): Promise<OrderUpdatePaymentMethodResponse> {
    const response = await this.post(
      "/order/payment",
      this.withContextToken({
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
   * @throws {Error} if the request fails
   */
  public async downloadPurchasedFile(
    downloadId: string,
    orderId: string
  ): Promise<OrderDownloadFileResponse> {
    const response = await this.get(
      `/order/download/${orderId}/${downloadId}`,
      this.withContextToken()
    );

    if (response.statusCode === 200)
      return (response.body as BinaryPayload).data as OrderDownloadFileResponse;

    throw new Error(
      `Failed to download purchased file: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
   */
  public async createOrderFromCart(
    request: OrderFromCartRequest = {}
  ): Promise<OrderFromCartResponse> {
    const response = await this.post(
      "/checkout/order",
      this.withContextToken({
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
