import { Product } from "../Product";
import { ProductCrossSelling } from "#types/storeApi/product/crossSelling/ProductCrossSelling";

export type CrossSellingElement = {
  apiAlias: "cross_selling_element";
  crossSelling: Array<ProductCrossSelling>;
  products: Array<Product>;
  total: number;
  streamId: string;
};
