import { ClientRequestOptions, ClientResponse, HTTPRequestMethod, RequestCacheEntry } from "#types";
import {
  AccountClient,
  AddressClient,
  CartClient,
  CategoryClient,
  ContentClient,
  ContextClient,
  CustomerAuthenticationClient,
  DocumentClient,
  GatewayClient,
  NewsletterClient,
  OrderClient,
  PaymentClient,
  ProductClient,
  SeoClient,
  SystemClient,
  WishlistClient
} from "#clients";
import { BinaryPayload, JsonPayload, Payload } from "#payloads";
import { FetchResponse, ofetch } from "ofetch";
import * as crypto from "node:crypto";
import { AuthenticationEntry, AuthenticationStore, AuthenticationType, ExpiredError } from "#auth";

export *  from '#types';

class ShopwareClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  public readonly authStore: AuthenticationStore = new AuthenticationStore();
  public readonly cache: Map<string, RequestCacheEntry> = new Map<string, RequestCacheEntry>();

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
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
        crypto
          .createHash("md5")
          .update(JSON.stringify({ ...options?.headers, body: serializedBody }))
          .digest("hex");

      const cacheEntry = this.cache.get(cacheKey);

      if (cacheEntry && Date.now() - cacheEntry.cachedAt <= options.maxAge) {
        return Promise.resolve(cacheEntry.response);
      }
    }

    return new Promise(async (resolve, reject) =>
      ofetch(this.baseUrl + path, {
        method: options?.method || HTTPRequestMethod.GET,
        headers: {
          "sw-access-key": this.apiKey,
          ...(options?.body ? { "Content-Type": options.body.contentType() } : {}),
          ...options?.headers
        },
        body: serializedBody,
        responseType: "stream",
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

  public withContextToken(options: ClientRequestOptions): ClientRequestOptions {
    const entry: AuthenticationEntry | undefined = this.authStore.getEntry(
      AuthenticationType.CONTEXT_TOKEN
    );

    if (!entry) throw new Error("Not authenticated");

    return { ...options, ...entry.load() };
  }

  public async withOAuth(options: ClientRequestOptions): Promise<ClientRequestOptions> {
    const entry: AuthenticationEntry | undefined = this.authStore.getEntry(
      AuthenticationType.OAUTH
    );

    if (!entry) throw new Error("Not authenticated");

    try {
      return { ...options, ...entry.load() };
    } catch (error) {
      if (error instanceof ExpiredError) {
        // TODO: Refresh token

        return { ...options, ...entry.load() };
      }

      throw error;
    }
  }

  public forAccount(): AccountClient {
    return new AccountClient(this);
  }

  public forAddress(): AddressClient {
    return new AddressClient(this);
  }

  public forCart(): CartClient {
    return new CartClient(this);
  }

  public forCategory(): CategoryClient {
    return new CategoryClient(this);
  }

  public forContent(): ContentClient {
    return new ContentClient(this);
  }

  public forContext(): ContextClient {
    return new ContextClient(this);
  }

  public forCustomerAuthentication(): CustomerAuthenticationClient {
    return new CustomerAuthenticationClient(this);
  }

  public forDocument(): DocumentClient {
    return new DocumentClient(this);
  }

  public forGateway(): GatewayClient {
    return new GatewayClient(this);
  }

  public forNewsletter(): NewsletterClient {
    return new NewsletterClient(this);
  }

  public forOrder(): OrderClient {
    return new OrderClient(this);
  }

  public forPayment(): PaymentClient {
    return new PaymentClient(this);
  }

  public forProduct(): ProductClient {
    return new ProductClient(this);
  }

  public forSeo(): SeoClient {
    return new SeoClient(this);
  }

  public forSystem(): SystemClient {
    return new SystemClient(this);
  }

  public forWishlist(): WishlistClient {
    return new WishlistClient(this);
  }
}

export default ShopwareClient;
