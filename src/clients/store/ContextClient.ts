import Client from "#clients/Client";
import {
  ContextGetResponse,
  ContextUpdateRequest,
  ContextUpdateResponse
} from "#types/clients/store/ContextClient";
import JsonPayload from "#payloads/JsonPayload";

class ContextClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async getContext(): Promise<ContextGetResponse> {
    const response = await this.get("/context");

    if (response.statusCode === 200) return response.body as ContextGetResponse;

    throw new Error(`Failed to fetch context: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update context: ${response.statusCode} ${response.statusMessage}`);
  }
}

export default ContextClient;
