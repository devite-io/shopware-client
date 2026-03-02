import { EntitySearchResult } from "#types/api/store/EntitySearchResult";
import { Criteria } from "#types/api/global/query/Criteria";
import { Product } from "#types/api/store/product/Product";
import { ProductReview } from "#types/api/store/product/ProductReview";
import { ProductListingCriteria } from "#types/api/global/query/product/ProductListingCriteria";
import { ProductListingResult } from "#types/api/store/product/ProductListingResult";
import { PropertyGroup } from "#types/api/store/propertyGroup/PropertyGroup";
import { CrossSellingElement } from "#types/api/store/product/crossSelling/CrossSellingElement";

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

export interface ProductSearchRequest extends ProductListingCriteria {
  search: string;
}
export type ProductSearchResponse = ProductListingResult;

export interface ProductSearchSuggestionListRequest {
  search: string;
}
export type ProductSearchSuggestionListResponse = ProductListingResult;

export type ProductSingleRequest = Criteria;
export interface ProductSingleResponse {
  product: Product;
  configurator?: Array<PropertyGroup>;
  id?: any;
  available?: any;
  isCloseout?: any;
  displayGroup?: any;
  manufacturerNumber?: any;
  stock?: any;
  sortedProperties?: any;
}

export interface ProductVariantWithOptionsRequest {
  options: Array<string>;
  switchedGroup?: string;
}
export interface ProductVariantWithOptionsResponse {
  foundCombination?: {
    variantId?: string;
    options: Array<string>;
  };
}

export type ProductListingListWithCategoryRequest = ProductListingCriteria;
export type ProductListingListWithCategoryResponse = ProductListingResult;

export type ProductCrossSellingGroupListResponse = Array<CrossSellingElement>;
