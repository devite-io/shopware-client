import ShopwareClient from "../ShopwareClient";
import HTTPRequestMethod from "../HTTPRequestMethod";
import { ClientRequestOptions } from "#types/ClientRequestOptions";

class Client {
  protected readonly client: ShopwareClient;

  constructor(client: ShopwareClient) {
    this.client = client;
  }

  protected doRequest(method: HTTPRequestMethod, path: string, options?: ClientRequestOptions) {
    return this.client.doRequest(path, { ...options, method });
  }

  protected get(path: string, options?: ClientRequestOptions) {
    return this.doRequest(HTTPRequestMethod.GET, path, options);
  }

  protected post(path: string, options?: ClientRequestOptions) {
    return this.doRequest(HTTPRequestMethod.POST, path, options);
  }

  protected delete(path: string, options?: ClientRequestOptions) {
    return this.doRequest(HTTPRequestMethod.DELETE, path, options);
  }

  protected patch(path: string, options?: ClientRequestOptions) {
    return this.doRequest(HTTPRequestMethod.PATCH, path, options);
  }

  protected put(path: string, options?: ClientRequestOptions) {
    return this.doRequest(HTTPRequestMethod.PUT, path, options);
  }

  protected options(path: string, options?: ClientRequestOptions) {
    return this.doRequest(HTTPRequestMethod.OPTIONS, path, options);
  }

  protected withContextToken(options: ClientRequestOptions = {}): ClientRequestOptions {
    return this.client.withContextToken(options);
  }

  protected async withOAuth(options: ClientRequestOptions = {}): Promise<ClientRequestOptions> {
    return this.client.withOAuth(options);
  }
}

export default Client;
