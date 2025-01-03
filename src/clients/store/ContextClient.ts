import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import {
  ContextGetResponse,
  ContextUpdateRequest,
  ContextUpdateResponse
} from "#types/clients/store/ContextClient";

class ContextClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async getContext(): Promise<ContextGetResponse> {
    const response = await this.get("/context");

    if (response.statusCode === 200) return response.body as ContextGetResponse;

    throw new ShopwareError("Failed to fetch context", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateContext(context: ContextUpdateRequest): Promise<ContextUpdateResponse> {
    const response = await this.patch("/context", {
      body: new JsonPayload(context)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ContextUpdateResponse;

    throw new ShopwareError("Failed to update context", response);
  }
}

export default ContextClient;
