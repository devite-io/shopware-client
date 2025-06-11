import Client from "../Client";
import { SalesChannel } from "#types/api/admin/salesChannel/SalesChannel";
import { SalesChannelAnalytics } from "#types/api/admin/salesChannel/SalesChannelAnalytics";
import { SalesChannelDomain } from "#types/api/admin/salesChannel/SalesChannelDomain";
import { SalesChannelType } from "#types/api/admin/salesChannel/SalesChannelType";
import createRestEndpoint from "../../utils/createRestEndpoint";

class SalesChannelClient extends Client {
  public salesChannels = createRestEndpoint<SalesChannel>(this, "sales-channel", "sales channel");
  public analytics = createRestEndpoint<SalesChannelAnalytics>(
    this,
    "sales-channel-analytics",
    "sales channel analytics"
  );
  public domains = createRestEndpoint<SalesChannelDomain>(
    this,
    "sales-channel-domain",
    "sales channel domain"
  );
  public types = createRestEndpoint<SalesChannelType>(
    this,
    "sales-channel-type",
    "sales channel type"
  );
}

export default SalesChannelClient;
