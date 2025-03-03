import { Criteria } from "#types/api/global/query/Criteria";
import { EntitySearchResult } from "#types/api/store/EntitySearchResult";
import { Category } from "#types/api/store/category/Category";

export type CategoryListRequest = Criteria;
export type CategoryListResponse = EntitySearchResult & { elements?: Array<Category> };

export type CategorySingleRequest = Criteria;
export type CategorySingleResponse = Category;

export type NavigationMenuRequest = Criteria & {
  depth?: number;
  buildTree?: Array<object>;
};
export type NavigationMenuResponse = Array<Category>;
