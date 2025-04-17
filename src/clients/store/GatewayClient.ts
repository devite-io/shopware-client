import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import { GatewayCheckoutResponse } from "#types/clients/store/GatewayClient";

class GatewayClient extends Client {
  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async checkout(): Promise<GatewayCheckoutResponse> {
    const response = await this.post("/checkout/gateway");

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as GatewayCheckoutResponse;

    throw new ShopwareError("Failed to checkout", response);
  }
}

export default GatewayClient;
