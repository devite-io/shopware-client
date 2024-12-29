import { ProductListingResult } from "#types/storeApi/product/ProductListingResult";
import { Criteria } from "#types/storeApi/query/Criteria";

export type WishlistGetRequest = Criteria;
export type WishlistGetResponse = {
  wishlist?: {
    customerId?: string;
    salesChannelId?: string;
  };
  products?: ProductListingResult;
};

export type WishlistMergeOrCreateRequest = { productIds?: Array<string> };
export type WishlistMergeOrCreateResponse = { success?: boolean };

export type WishlistProductAddResponse = { success?: boolean };
export type WishlistProductRemoveResponse = { success?: boolean };
