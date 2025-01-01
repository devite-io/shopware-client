import { SalesChannel } from "../salesChannel/SalesChannel";
import { Product } from "./Product";

export interface ProductVisibility {
  id: string;
  productId: string;
  productVersionId?: string;
  salesChannelId: string;
  visibility: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  salesChannel?: SalesChannel;
  product?: Product;
}
