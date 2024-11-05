import {
  Criteria,
  CrossSellingElement,
  EntitySearchResult,
  Product,
  ProductListingCriteria,
  ProductListingFlags,
  ProductListingResult,
  ProductReview,
  PropertyGroup
} from "../storeApi";

export type ProductListRequest = Criteria;
export type ProductListResponse = EntitySearchResult & { elements?: Array<Product> };

export type ProductReviewListRequest = Criteria;
export type ProductReviewListResponse = EntitySearchResult & { elements?: Array<ProductReview> };

export type ProductReviewSaveRequest = {
  name?: string;
  email?: string;
  title: string;
  content: string;
  points: number;
};

export type ProductSearchRequest = { search: string } & ProductListingCriteria &
  ProductListingFlags;
export type ProductSearchResponse = ProductListingResult;

export type ProductSearchSuggestionListRequest = ProductListingFlags & { search: string };
export type ProductSearchSuggestionListResponse = ProductListingResult;

export type ProductSingleRequest = Criteria;
export type ProductSingleResponse = {
  product: Product;
  configurator?: Array<PropertyGroup>;
  id?: any;
  available?: any;
  isCloseout?: any;
  displayGroup?: any;
  manufacturerNumber?: any;
  stock?: any;
  sortedProperties?: any;
};

export type ProductVariantWithOptionsRequest = {
  options: Array<string>;
  switchedGroup?: string;
};
export type ProductVariantWithOptionsResponse = {
  foundCombination?: {
    variantId?: string;
    options: Array<string>;
  };
};

export type ProductWithCategoryListRequest = ProductListingCriteria & ProductListingFlags;
export type ProductWithCategoryListResponse = ProductListingResult;

export type ProductCrossSellingGroupListResponse = Array<CrossSellingElement>;
