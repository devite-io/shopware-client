import { Promotion } from "./Promotion";
import { SalesChannel } from "../salesChannel/SalesChannel";

export interface PromotionSalesChannel {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  priority: number;
  promotionId: string;
  promotion?: Promotion;
  salesChannelId: string;
  salesChannel?: SalesChannel;
}
