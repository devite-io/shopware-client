import { ClientRequestOptions, ClientResponse, HTTPRequestMethod } from "#types";
import { ProductsClient } from "#clients";
import { BinaryPayload, JsonPayload, Payload } from "#payloads";
import { FetchResponse, ofetch } from "ofetch";

class ShopwareClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }

  public forProducts(): ProductsClient {
    return new ProductsClient(this);
  }

  /**
   * Sends a request to the Shopware API.
   * @throws {import('ofetch').FetchError} if the request is invalid
   */
  public doRequest(path: string, options?: ClientRequestOptions): Promise<ClientResponse> {
    return new Promise(async (resolve, reject) =>
      ofetch(this.baseUrl + path, {
        method: options?.method || HTTPRequestMethod.GET,
        headers: {
          "sw-access-key": this.apiKey,
          ...(options?.body ? { "Content-Type": options.body.contentType() } : {}),
          ...options?.headers
        },
        body: options?.body?.serialize() || undefined,
        responseType: "stream",
        onResponse: async ({ response }) => {
          resolve({
            statusCode: response.status,
            statusMessage: response.statusText,
            headers: response.headers,
            body: await this.parseBody(response)
          });
        },
        onRequestError: ({ error }) => reject(error),
        onResponseError: async ({ response }) => {
          resolve({
            statusCode: response.status,
            statusMessage: response.statusText,
            headers: response.headers,
            body: await this.parseBody(response)
          });
        }
      })
    );
  }

  private async parseBody(response: FetchResponse<Blob>): Promise<Payload<any> | undefined> {
    let body = undefined;

    switch (response.headers.get("Content-Type")) {
      case BinaryPayload.CONTENT_TYPE:
        body = new BinaryPayload();
        break;
      case JsonPayload.CONTENT_TYPE:
        body = new JsonPayload();
        break;
    }

    if (body && response.body) await body.deserialize(await response.blob());

    return body;
  }
}

export default ShopwareClient;
