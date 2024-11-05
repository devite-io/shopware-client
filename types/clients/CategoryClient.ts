import { Category, Criteria, EntitySearchResult } from "../storeApi";

export type CategoryListRequest = Criteria;
export type CategoryListResponse = EntitySearchResult & { elements?: Array<Category> };

export type CategorySingleRequest = Criteria;
export type CategorySingleResponse = Category;

export type NavigationMenuRequest = Criteria & {
  depth?: number;
  buildTree?: Array<object>;
};
export type NavigationMenuResponse = Array<Category>;
