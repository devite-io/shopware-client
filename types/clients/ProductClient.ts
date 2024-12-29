import { EntitySearchResult } from "#types/storeApi/EntitySearchResult";
import { Criteria } from "#types/storeApi/query/Criteria";
import { Product } from "#types/storeApi/product/Product";
import { ProductReview } from "#types/storeApi/product/ProductReview";
import { ProductListingCriteria } from "#types/storeApi/query/product/ProductListingCriteria";
import { ProductListingFlags } from "#types/storeApi/query/product/ProductListingFlags";
import { ProductListingResult } from "#types/storeApi/product/ProductListingResult";
import { PropertyGroup } from "#types/storeApi/propertyGroup/PropertyGroup";
import { CrossSellingElement } from "#types/storeApi/product/crossSelling/CrossSellingElement";

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

export type ProductListingListWithCategoryRequest = ProductListingCriteria & ProductListingFlags;
export type ProductListingListWithCategoryResponse = ProductListingResult;

export type ProductCrossSellingGroupListResponse = Array<CrossSellingElement>;
