import Client from "#clients/Client";
import JsonPayload from "#payloads/JsonPayload";
import {
  OrderPaymentInitiateRequest,
  OrderPaymentInitiateResponse
} from "#types/clients/PaymentClient";

class PaymentClient extends Client {
  /**
   * @throws {Error} if the request fails
   */
  public async initiateOrderPayment(
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
}

export default PaymentClient;
