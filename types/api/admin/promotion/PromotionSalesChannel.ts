import { Promotion } from "./Promotion";
import { SalesChannel } from "../salesChannel/SalesChannel";

export interface PromotionSalesChannel {
  id: string;
  promotionId: string;
  salesChannelId: string;
  priority: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  promotion?: Promotion;
  salesChannel?: SalesChannel;
}
