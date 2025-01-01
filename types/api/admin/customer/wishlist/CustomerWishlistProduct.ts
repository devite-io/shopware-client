import { CustomerWishlist } from "./CustomerWishlist";
import { Product } from "../../product/Product";

export interface CustomerWishlistProduct {
  id: string;
  productId: string;
  productVersionId?: string;
  wishlistId: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  wishlist?: CustomerWishlist;
  product?: Product;
}
