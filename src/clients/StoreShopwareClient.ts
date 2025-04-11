import ShopwareClient from "./ShopwareClient";
import { ClientRequestOptions } from "#types/ClientRequestOptions";
import { ClientResponse } from "#types/ClientResponse";
import AuthenticationEntry from "#auth/entries/AuthenticationEntry";
import AuthenticationType from "#auth/AuthenticationType";
import AccountClient from "./store/AccountClient";
import AddressClient from "./store/AddressClient";
import CartClient from "./store/CartClient";
import CategoryClient from "./store/CategoryClient";
import ContentClient from "./store/ContentClient";
import ContextClient from "./store/ContextClient";
import CustomerAuthClient from "./store/CustomerAuthClient";
import DocumentClient from "./store/DocumentClient";
import GatewayClient from "./store/GatewayClient";
import NewsletterClient from "./store/NewsletterClient";
import OrderClient from "./store/OrderClient";
import ProductClient from "./store/ProductClient";
import SeoClient from "./store/SeoClient";
import SystemClient from "./store/SystemClient";
import WishlistClient from "./store/WishlistClient";
import ContextTokenEntry from "../auth/entries/ContextTokenEntry";

class StoreShopwareClient extends ShopwareClient {
  private readonly apiKey: string;

  constructor(baseUrl: string, apiKey: string) {
    super(baseUrl + "/store-api");

    if (!apiKey.length) {
      throw new Error("API key is required");
    }

    this.apiKey = apiKey;
  }

  /** @override */
  public doRequest(path: string, options?: ClientRequestOptions): Promise<ClientResponse> {
    return super.doRequest(path, {
      ...options,
      headers: {
        ...options?.headers,
        "sw-access-key": this.apiKey
      }
    });
  }

  public setContextToken(token: string): void {
    (this.authStore.getOrCreateEntry(new ContextTokenEntry()) as ContextTokenEntry).token = token;
  }

  public withContextToken(options: ClientRequestOptions = {}): ClientRequestOptions {
    const entry: AuthenticationEntry | undefined = this.authStore.getEntry(
      AuthenticationType.CONTEXT_TOKEN
    );

    if (!entry) throw new Error("Not authenticated");

    return {
      ...options,
      headers: {
        ...options.headers,
        ...entry.load().headers
      }
    };
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

  public forCustomerAuth(): CustomerAuthClient {
    return new CustomerAuthClient(this);
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

export default StoreShopwareClient;
