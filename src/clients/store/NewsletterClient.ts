import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import {
  NewsletterConfirmRequest,
  NewsletterUnsubscribeRequest,
  NewsletterUpdateRequest
} from "#types/clients/store/NewsletterClient";

class NewsletterClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async confirmSubscription(request: NewsletterConfirmRequest): Promise<void> {
    const response = await this.post(`/newsletter/confirm`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to confirm newsletter subscription", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateSubscription(request: NewsletterUpdateRequest): Promise<void> {
    const response = await this.post(`/newsletter/subscribe`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to update newsletter subscription", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSubscription(request: NewsletterUnsubscribeRequest): Promise<void> {
    const response = await this.post(`/newsletter/unsubscribe`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to unsubscribe newsletter subscription", response);
  }
}

export default NewsletterClient;
