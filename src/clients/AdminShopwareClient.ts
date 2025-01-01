import ShopwareClient from "./ShopwareClient";
import { ClientRequestOptions } from "#types/ClientRequestOptions";
import { ClientResponse } from "#types/ClientResponse";
import { OAuthScope } from "#types/OAuthScope";
import HTTPRequestMethod from "#http/HTTPRequestMethod";
import JsonPayload from "#payloads/JsonPayload";
import OAuthEntry from "#auth/entries/OAuthEntry";
import AuthenticationType from "#auth/AuthenticationType";
import ExpiredError from "#auth/errors/ExpiredError";
import AppClient from "#clients/admin/AppClient";
import CategoryClient from "#clients/admin/CategoryClient";
import ContentClient from "#clients/admin/ContentClient";
import CountryClient from "#clients/admin/CountryClient";
import CurrencyClient from "#clients/admin/CurrencyClient";
import CustomDataClient from "#clients/admin/CustomDataClient";
import CustomerClient from "#clients/admin/CustomerClient";
import DeliveryTimeClient from "#clients/admin/DeliveryTimeClient";
import DocumentClient from "#clients/admin/DocumentClient";
import FlowClient from "#clients/admin/FlowClient";
import ImportExportClient from "#clients/admin/ImportExportClient";
import IntegrationClient from "#clients/admin/IntegrationClient";
import LocaleClient from "#clients/admin/LocaleClient";
import MailClient from "#clients/admin/MailClient";
import MediaClient from "#clients/admin/MediaClient";
import NewsletterClient from "#clients/admin/NewsletterClient";
import NumberRangeClient from "#clients/admin/NumberRangeClient";
import OrderClient from "#clients/admin/OrderClient";
import PaymentMethodClient from "#clients/admin/PaymentMethodClient";
import PluginClient from "#clients/admin/PluginClient";
import ProductClient from "#clients/admin/ProductClient";
import PromotionClient from "#clients/admin/PromotionClient";
import PropertyGroupClient from "#clients/admin/PropertyGroupClient";
import RuleClient from "#clients/admin/RuleClient";
import SalesChannelClient from "#clients/admin/SalesChannelClient";
import SalutationClient from "#clients/admin/SalutationClient";
import ScriptClient from "#clients/admin/ScriptClient";
import SecurityClient from "#clients/admin/SecurityClient";
import SeoClient from "#clients/admin/SeoClient";
import ShippingMethodClient from "#clients/admin/ShippingMethodClient";
import SnippetClient from "#clients/admin/SnippetClient";
import StateMachineClient from "#clients/admin/StateMachineClient";
import SystemClient from "#clients/admin/SystemClient";
import TagClient from "#clients/admin/TagClient";
import TaxClient from "#clients/admin/TaxClient";
import UnitClient from "#clients/admin/UnitClient";
import UserClient from "#clients/admin/UserClient";
import WebhookClient from "#clients/admin/WebhookClient";

class AdminShopwareClient extends ShopwareClient {
  private clientId: string | null = null;

  constructor(baseUrl: string) {
    super(baseUrl + "/api");
  }

  public async doRequest(path: string, options?: ClientRequestOptions): Promise<ClientResponse> {
    return await super.doRequest(path, await this.withOAuth(options));
  }

  public async authenticateAsClient(
    clientId: string,
    clientSecret: string,
    scopes: OAuthScope
  ): Promise<void> {
    this.clientId = clientId;

    const authResponse = await super.doRequest("/oauth/token", {
      method: HTTPRequestMethod.POST,
      body: new JsonPayload({
        grant_type: "client_credentials",
        scopes,
        client_id: clientId,
        client_secret: clientSecret
      })
    });

    this.authStore.getOrCreateEntry(new OAuthEntry()).save(authResponse);
  }

  public async authenticateAsUser(
    username: string,
    password: string,
    scopes: OAuthScope
  ): Promise<void> {
    this.clientId = "administration";

    const authResponse = await super.doRequest("/oauth/token", {
      method: HTTPRequestMethod.POST,
      body: new JsonPayload({
        grant_type: "password",
        client_id: this.clientId,
        scopes,
        username,
        password
      })
    });

    this.authStore.getOrCreateEntry(new OAuthEntry()).save(authResponse);
  }

  private async withOAuth(options: ClientRequestOptions = {}): Promise<ClientRequestOptions> {
    const entry = this.authStore.getEntry(AuthenticationType.OAUTH) as OAuthEntry | undefined;

    if (!entry) throw new Error("Not authenticated");

    try {
      return { ...options, ...entry.load() };
    } catch (error) {
      if (error instanceof ExpiredError && entry.refreshToken) {
        const refreshResponse = await super.doRequest("/oauth/token", {
          method: HTTPRequestMethod.POST,
          body: new JsonPayload({
            grant_type: "refresh_token",
            client_id: this.clientId,
            refresh_token: entry.refreshToken
          })
        });

        entry.save(refreshResponse);

        return { ...options, ...entry.load() };
      }

      throw error;
    }
  }

  public forApp(): AppClient {
    return new AppClient(this);
  }

  public forCategory(): CategoryClient {
    return new CategoryClient(this);
  }

  public forContent(): ContentClient {
    return new ContentClient(this);
  }

  public forCountry(): CountryClient {
    return new CountryClient(this);
  }

  public forCurrency(): CurrencyClient {
    return new CurrencyClient(this);
  }

  public forCustomData(): CustomDataClient {
    return new CustomDataClient(this);
  }

  public forCustomer(): CustomerClient {
    return new CustomerClient(this);
  }

  public forDeliveryTime(): DeliveryTimeClient {
    return new DeliveryTimeClient(this);
  }

  public forDocument(): DocumentClient {
    return new DocumentClient(this);
  }

  public forFlow(): FlowClient {
    return new FlowClient(this);
  }

  public forImportExport(): ImportExportClient {
    return new ImportExportClient(this);
  }

  public forIntegration(): IntegrationClient {
    return new IntegrationClient(this);
  }

  public forLocale(): LocaleClient {
    return new LocaleClient(this);
  }

  public forMail(): MailClient {
    return new MailClient(this);
  }

  public forMedia(): MediaClient {
    return new MediaClient(this);
  }

  public forNewsletter(): NewsletterClient {
    return new NewsletterClient(this);
  }

  public forNumberRange(): NumberRangeClient {
    return new NumberRangeClient(this);
  }

  public forOrder(): OrderClient {
    return new OrderClient(this);
  }

  public forPaymentMethod(): PaymentMethodClient {
    return new PaymentMethodClient(this);
  }

  public forPlugin(): PluginClient {
    return new PluginClient(this);
  }

  public forProduct(): ProductClient {
    return new ProductClient(this);
  }

  public forPromotion(): PromotionClient {
    return new PromotionClient(this);
  }

  public forPropertyGroup(): PropertyGroupClient {
    return new PropertyGroupClient(this);
  }

  public forRule(): RuleClient {
    return new RuleClient(this);
  }

  public forSalesChannel(): SalesChannelClient {
    return new SalesChannelClient(this);
  }

  public forSalutation(): SalutationClient {
    return new SalutationClient(this);
  }

  public forScript(): ScriptClient {
    return new ScriptClient(this);
  }

  public forSecurity(): SecurityClient {
    return new SecurityClient(this);
  }

  public forSeo(): SeoClient {
    return new SeoClient(this);
  }

  public forShippingMethod(): ShippingMethodClient {
    return new ShippingMethodClient(this);
  }

  public forSnippet(): SnippetClient {
    return new SnippetClient(this);
  }

  public forStateMachine(): StateMachineClient {
    return new StateMachineClient(this);
  }

  public forSystem(): SystemClient {
    return new SystemClient(this);
  }

  public forTag(): TagClient {
    return new TagClient(this);
  }

  public forTax(): TaxClient {
    return new TaxClient(this);
  }

  public forUnit(): UnitClient {
    return new UnitClient(this);
  }

  public forUser(): UserClient {
    return new UserClient(this);
  }

  public forWebhook(): WebhookClient {
    return new WebhookClient(this);
  }
}

export default AdminShopwareClient;
