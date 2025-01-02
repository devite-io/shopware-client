import Client from "../Client";
import {
  NewsletterConfirmRequest,
  NewsletterUnsubscribeRequest,
  NewsletterUpdateRequest
} from "#types/clients/store/NewsletterClient";
import JsonPayload from "#payloads/JsonPayload";

class NewsletterClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async confirmSubscription(request: NewsletterConfirmRequest): Promise<void> {
    const response = await this.post(`/newsletter/confirm`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) return;

    throw new Error(
      `Failed to confirm newsletter subscription: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateSubscription(request: NewsletterUpdateRequest): Promise<void> {
    const response = await this.post(`/newsletter/subscribe`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) return;

    throw new Error(
      `Failed to update newsletter subscription: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSubscription(request: NewsletterUnsubscribeRequest): Promise<void> {
    const response = await this.post(`/newsletter/unsubscribe`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) return;

    throw new Error(
      `Failed to unsubscribe newsletter subscription: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default NewsletterClient;
