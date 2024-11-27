import { ClientRequestOptions, ClientResponse, HTTPRequestMethod } from "#types";
import { ProductClient } from "#clients";
import { BinaryPayload, JsonPayload, Payload } from "#payloads";
import { FetchResponse, ofetch } from "ofetch";
import AccountClient from "./clients/AccountClient";
import AddressClient from "./clients/AddressClient";
import CartClient from "./clients/CartClient";
import CategoryClient from "./clients/CategoryClient";
import ContentClient from "./clients/ContentClient";
import ContextClient from "./clients/ContextClient";
import CustomerAuthenticationClient from "./clients/CustomerAuthenticationClient";
import DocumentClient from "./clients/DocumentClient";
import GatewayClient from "./clients/GatewayClient";
import NewsletterClient from "./clients/NewsletterClient";
import OrderClient from "./clients/OrderClient";
import PaymentClient from "./clients/PaymentClient";
import SeoClient from "./clients/SeoClient";
import SystemClient from "./clients/SystemClient";
import WishlistClient from "./clients/WishlistClient";

class ShopwareClient {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(baseUrl: string, apiKey: string) {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
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
