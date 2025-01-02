import AuthenticationStore from "#auth/AuthenticationStore";
import { RequestCacheEntry } from "#types/RequestCacheEntry";
import { ClientRequestOptions } from "#types/ClientRequestOptions";
import { ClientResponse } from "#types/ClientResponse";
import HTTPRequestMethod from "#http/HTTPRequestMethod";
import { hash } from "ohash";
import { FetchResponse, ofetch } from "ofetch";
import Payload from "#payloads/Payload";
import BinaryPayload from "#payloads/BinaryPayload";
import JsonPayload from "#payloads/JsonPayload";
import HtmlPayload from "../payloads/HtmlPayload";

class ShopwareClient {
  protected readonly baseUrl: string;

  public readonly authStore: AuthenticationStore = new AuthenticationStore();
  public readonly cache: Map<string, RequestCacheEntry> = new Map<string, RequestCacheEntry>();

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Sends a request to the Shopware API.
   * @throws {import('ofetch').FetchError} if the request is invalid
   */
  public doRequest(path: string, options?: ClientRequestOptions): Promise<ClientResponse> {
    const serializedBody: any | undefined = options?.body?.serialize() || undefined;
    let cacheKey: string | null = null;

    if (options?.maxAge && options.maxAge > 0) {
      cacheKey =
        `${options?.method || HTTPRequestMethod.GET}:${path}$` +
        hash({ ...options?.headers, body: serializedBody });

      const cacheEntry = this.cache.get(cacheKey);

      if (cacheEntry && Date.now() - cacheEntry.cachedAt <= options.maxAge) {
        return Promise.resolve(cacheEntry.response);
      }
    }

    return new Promise(async (resolve, reject) =>
      ofetch(this.baseUrl + path, {
        method: options?.method || HTTPRequestMethod.GET,
        query: options?.query,
        headers: {
          ...(options?.body ? { "Content-Type": options.body.contentType() } : {}),
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

          if (cacheKey) {
            this.cache.set(cacheKey, {
              cachedAt: Date.now(),
              response: clientResponse
            });
          }

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
}

export default ShopwareClient;
