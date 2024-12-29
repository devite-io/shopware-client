import { Criteria } from "../storeApi/query/Criteria";
import { EntitySearchResult } from "../storeApi/EntitySearchResult";
import { Category } from "../storeApi/category/Category";

export type CategoryListRequest = Criteria;
export type CategoryListResponse = EntitySearchResult & { elements?: Array<Category> };

export type CategorySingleRequest = Criteria;
export type CategorySingleResponse = Category;

export type NavigationMenuRequest = Criteria & {
  depth?: number;
  buildTree?: Array<object>;
};
export type NavigationMenuResponse = Array<Category>;
