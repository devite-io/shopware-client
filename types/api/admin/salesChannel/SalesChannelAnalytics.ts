import { SalesChannel } from "./SalesChannel";

export interface SalesChannelAnalytics {
  id: string;
  trackingId?: string;
  active?: boolean;
  trackOrders?: boolean;
  anonymizeIp?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  salesChannel?: SalesChannel;
}
