import { SalesChannel } from "../salesChannel/SalesChannel";

export interface MainCategory {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  salesChannelId: string;
  salesChannel?: SalesChannel;
  categoryId: string;
  categoryVersionId?: string;
  productId: string;
  productVersionId?: string;
}
