import Client from "../Client";
import { NewsletterRecipient } from "#types/api/admin/newsletterRecipient/NewsletterRecipient";
import createRestEndpoint from "../../utils/createRestEndpoint";

class NewsletterClient extends Client {
  public recipients = createRestEndpoint<NewsletterRecipient>(
    this,
    "newsletter-recipient",
    "newsletter recipient"
  );
}

export default NewsletterClient;
