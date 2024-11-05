import { ClientRequestOptions, ClientResponse } from "#types";
import { ProductsClient } from "#clients";
import { BinaryPayload, JsonPayload, Payload } from "#payloads";

class ShopwareClient {
  public forProducts(): ProductsClient {
    return new ProductsClient(this);
  }

  /**
   * Sends a request to the Shopware API.
   * @throws {Error} if the request fails
   */
  public async doRequest(path: string, options: ClientRequestOptions): Promise<ClientResponse> {
    const requestBody = options.body?.serialize() || undefined;
    const response = await fetch(path, {
      method: options.method,
      headers: {
        ...(options.body ? { "Content-Type": options.body.contentType() } : {}),
        ...options.headers
      },
      body: requestBody
    });

    return {
      statusCode: response.status,
      statusMessage: response.statusText,
      headers: response.headers,
      body: await this.parseBody(response)
    };
  }

  private async parseBody(response: Response): Promise<Payload<any> | undefined> {
    let body = undefined;

    switch (response.headers.get("Content-Type")) {
      case BinaryPayload.CONTENT_TYPE:
        body = new BinaryPayload();
        break;
      case JsonPayload.CONTENT_TYPE:
        body = new JsonPayload();
        break;
    }

    if (body) body.deserialize(await response.arrayBuffer());

    return body;
  }
}

export default ShopwareClient;
