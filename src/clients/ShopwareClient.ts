import AuthenticationStore from "#auth/AuthenticationStore";
import { ClientRequestOptions } from "#types/ClientRequestOptions";
import { ClientResponse } from "#types/ClientResponse";
import HTTPRequestMethod from "#http/HTTPRequestMethod";
import { FetchResponse, ofetch } from "ofetch";
import Payload from "#payloads/Payload";
import BinaryPayload from "#payloads/BinaryPayload";
import JsonPayload from "#payloads/JsonPayload";
import HtmlPayload from "../payloads/HtmlPayload";

class ShopwareClient {
  protected readonly baseUrl: string;

  public readonly authStore: AuthenticationStore = new AuthenticationStore();

  private languageId: string | undefined;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Sends a request to the Shopware API.
   * @throws {import('ofetch').FetchError} if the request is invalid
   */
  public doRequest(path: string, options?: ClientRequestOptions): Promise<ClientResponse> {
    if (path.length > 2048) {
      throw new Error("Path may not exceed 2048 characters");
    }

    const serializedBody: any | undefined = options?.body?.serialize() || undefined;

    return new Promise(async (resolve, reject) =>
      ofetch(this.baseUrl + path, {
        method: options?.method || HTTPRequestMethod.GET,
        query: options?.query,
        headers: {
          ...(options?.body ? { "Content-Type": options.body.contentType() } : {}),
          ...(this.languageId ? { "sw-language-id": this.languageId } : {}),
          ...options?.headers
        },
        body: serializedBody,
        responseType: "blob",
        onResponse: async ({ response }) => {
          const clientResponse: ClientResponse = {
            statusCode: response.status,
            statusMessage: response.statusText,
            headers: response.headers,
            body: await this.parseBody(response)
          };

          resolve(clientResponse);
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
    const contentType = response.headers.get("Content-Type")?.split(";")[0];
    let payload = undefined;

    switch (contentType) {
      case BinaryPayload.CONTENT_TYPE:
        payload = new BinaryPayload();
        break;
      case JsonPayload.CONTENT_TYPE:
        payload = new JsonPayload();
        break;
      case HtmlPayload.CONTENT_TYPE:
        payload = new HtmlPayload();
        break;
    }

    if (payload && response._data) await payload.deserialize(response._data);

    return payload;
  }

  public setLanguageId(id: string | undefined) {
    this.languageId = id;
  }
}

export default ShopwareClient;
