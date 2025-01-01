import { ProductListingResult } from "#types/api/store/product/ProductListingResult";
import { Criteria } from "#types/api/global/query/Criteria";

export type WishlistGetRequest = Criteria;
export interface WishlistGetResponse {
  wishlist?: {
    customerId?: string;
    salesChannelId?: string;
  };
  products?: ProductListingResult;
}

export interface WishlistMergeOrCreateRequest {
  productIds?: Array<string>;
}
export interface WishlistMergeOrCreateResponse {
  success?: boolean;
}

export interface WishlistProductAddResponse {
  success?: boolean;
}

export interface WishlistProductRemoveResponse {
  success?: boolean;
}
