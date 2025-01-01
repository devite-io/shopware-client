import { SalesChannel } from "./salesChannel/SalesChannel";

export interface SystemConfig {
  id: string;
  configurationKey: string;
  configurationValue: { _value?: string };
  salesChannelId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  salesChannel?: SalesChannel;
}
