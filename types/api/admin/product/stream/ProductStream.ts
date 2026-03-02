import { ProductStream as StoreApiProductStream } from "#types/api/store/product/ProductStream";
import { ProductStreamFilter } from "./ProductStreamFilter";
import { Category } from "../../category/Category";

export type ProductStream = StoreApiProductStream & {
  readonly apiFilter?: string;
  readonly invalid?: boolean;
  filters?: Array<ProductStreamFilter>;
  categories?: Category;
};
