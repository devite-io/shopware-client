import { CustomerGroup } from "./CustomerGroup";
import { SalesChannel } from "../../salesChannel/SalesChannel";

export interface CustomerGroupRegistrationSalesChannels {
  id?: string;
  readonly createdAt?: string;
  customerGroupId: string;
  customerGroup?: CustomerGroup;
  salesChannelId: string;
  salesChannel?: SalesChannel;
}
