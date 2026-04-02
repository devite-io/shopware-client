import { ProductReview as StoreApiProductReview } from "#types/api/store/product/ProductReview";

export type ProductReview = StoreApiProductReview & {
  customerId?: string;
  externalUser?: string;
  externalEmail?: string;
};
