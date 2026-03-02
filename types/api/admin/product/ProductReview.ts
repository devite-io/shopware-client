import { ProductReview as StoreApiProductReview } from "#types/api/store/product/ProductReview";

export type ProductReview = StoreApiProductReview & {
  externalUser?: string;
  externalEmail?: string;
};
