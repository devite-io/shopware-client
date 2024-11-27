import { Client } from "#clients";
import {
  NewsletterConfirmRequest,
  NewsletterUnsubscribeRequest,
  NewsletterUpdateRequest
} from "#types";
import { JsonPayload } from "#payloads";

class NewsletterClient extends Client {
  /**
   * @throws {Error} if the request fails
   */
  public async confirmSubscription(request: NewsletterConfirmRequest): Promise<undefined> {
    const response = await this.post(`/newsletter/confirm`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) return undefined;

    throw new Error(
      `Failed to confirm newsletter subscription: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
   */
  public async updateSubscription(request: NewsletterUpdateRequest): Promise<undefined> {
    const response = await this.post(`/newsletter/subscribe`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) return undefined;

    throw new Error(
      `Failed to update newsletter subscription: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
   */
  public async unsubscribe(request: NewsletterUnsubscribeRequest): Promise<undefined> {
    const response = await this.post(`/newsletter/unsubscribe`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) return undefined;

    throw new Error(
      `Failed to unsubscribe newsletter subscription: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default NewsletterClient;
