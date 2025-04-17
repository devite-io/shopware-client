import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import AuthenticationEntry from "#auth/entries/AuthenticationEntry";
import AuthenticationType from "#auth/AuthenticationType";
import type StoreShopwareClient from "../StoreShopwareClient";
import ShopwareError from "#http/ShopwareError";
import {
  ContextGetResponse,
  ContextUpdateRequest,
  ContextUpdateResponse
} from "#types/clients/store/ContextClient";

class ContextClient extends Client {
  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getContext(): Promise<ContextGetResponse> {
    const entry: AuthenticationEntry | undefined = this.client.authStore.getEntry(
      AuthenticationType.CONTEXT_TOKEN
    );
    const response = await this.get(
      "/context",
      entry ? (this.client as StoreShopwareClient).withContextToken() : undefined
    );

    if (response.statusCode === 200) {
      entry?.save(response);

      return (response.body as JsonPayload).data as ContextGetResponse;
    }

    throw new ShopwareError("Failed to fetch context", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateContext(context: ContextUpdateRequest): Promise<ContextUpdateResponse> {
    const response = await this.patch(
      "/context",
      (this.client as StoreShopwareClient).withContextToken({ body: new JsonPayload(context) })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ContextUpdateResponse;

    throw new ShopwareError("Failed to update context", response);
  }
}

export default ContextClient;
