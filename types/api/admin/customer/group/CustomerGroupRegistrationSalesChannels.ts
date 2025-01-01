import { CustomerGroup } from "./CustomerGroup";
import { SalesChannel } from "../../salesChannel/SalesChannel";

export interface CustomerGroupRegistrationSalesChannels {
  id?: string;
  customerGroupId: string;
  salesChannelId: string;
  readonly createdAt?: string;
  customerGroup?: CustomerGroup;
  salesChannel?: SalesChannel;
}
