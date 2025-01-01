import { Category } from "#types/api/admin/category/Category";
import { MainCategory } from "#types/api/admin/category/MainCategory";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Categories **/

export interface CategoryListResponse {
  total?: number;
  data?: Array<Category>;
}

export type CategoryCreateRequest = Category;
export type CategoryCreateResponse = { data: Category };

export type CategoryListSearchRequest = Criteria;
export interface CategoryListSearchResponse {
  total?: number;
  data?: Array<Category>;
}

export interface CategorySingleResponse {
  data: Category;
}

export type CategoryUpdateRequest = Category;
export type CategoryUpdateResponse = { data: Category };

export interface CategoryAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface CategoryAggregationResponse {
  total?: number;
  data?: Array<Category>;
}

/** Main Categories **/

export interface MainCategoryListResponse {
  total?: number;
  data?: Array<MainCategory>;
}

export type MainCategoryCreateRequest = MainCategory;
export type MainCategoryCreateResponse = { data: MainCategory };

export type MainCategoryListSearchRequest = Criteria;
export interface MainCategoryListSearchResponse {
  total?: number;
  data?: Array<MainCategory>;
}

export interface MainCategorySingleResponse {
  data: MainCategory;
}

export type MainCategoryUpdateRequest = MainCategory;
export type MainCategoryUpdateResponse = { data: MainCategory };

export interface MainCategoryAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface MainCategoryAggregationResponse {
  total?: number;
  data?: Array<MainCategory>;
}
