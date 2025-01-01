import { MainCategory as StoreApiMainCategory } from "#types/api/store/category/MainCategory";
import { Product } from "../product/Product";
import { Category } from "./Category";
import { SalesChannel } from "../salesChannel/SalesChannel";

export type MainCategory = StoreApiMainCategory & {
  product?: Product;
  category?: Category;
  salesChannel?: SalesChannel;
};
