import ShopwareClient from "../ShopwareClient";
import { ClientRequestOptions } from "#types";

class Client {
  private readonly client: ShopwareClient;

  constructor(client: ShopwareClient) {
    this.client = client;
  }

  protected doRequest(path: string, options: ClientRequestOptions) {
    return this.client.doRequest(path, options);
  }
}

export default Client;
