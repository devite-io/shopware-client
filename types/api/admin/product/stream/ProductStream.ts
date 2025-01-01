import { ProductStream as StoreApiProductStream } from "#types/api/store/product/ProductStream";
import { ProductStreamFilter } from "./ProductStreamFilter";
import { ProductCrossSelling } from "../crossSelling/ProductCrossSelling";
import { ProductExport } from "../ProductExport";
import { Category } from "../../category/Category";

export type ProductStream = StoreApiProductStream & {
  readonly apiFilter?: string;
  readonly invalid?: boolean;
  filters?: Array<ProductStreamFilter>;
  productCrossSelling?: Array<ProductCrossSelling>;
  productExports?: Array<ProductExport>;
  categories?: Category;
};
