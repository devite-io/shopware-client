import Client from "../Client";
import { Webhook } from "#types/api/admin/webhook/Webhook";
import { WebhookEventLog } from "#types/api/admin/webhook/WebhookEventLog";
import createRestEndpoint from "../../utils/createRestEndpoint";

class WebhookClient extends Client {
  public webhooks = createRestEndpoint<Webhook>(this, "webhook", "webhook");
  public eventLogs = createRestEndpoint<WebhookEventLog>(
    this,
    "webhook-event-log",
    "webhook event log"
  );
}

export default WebhookClient;
