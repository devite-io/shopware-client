import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
import { GatewayCheckoutResponse } from "#types/clients/GatewayClient";

class GatewayClient extends Client {
  /**
   * @throws {Error} if the request fails
   */
  public async checkout(): Promise<GatewayCheckoutResponse> {
    const response = await this.post("/checkout/gateway");

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as GatewayCheckoutResponse;

    throw new Error(`Failed to checkout: ${response.statusCode} ${response.statusMessage}`);
  }
}

export default GatewayClient;
