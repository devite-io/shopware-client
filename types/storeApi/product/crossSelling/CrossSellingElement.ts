import { ProductCrossSelling } from ".";
import { Product } from "../Product";

export type CrossSellingElement = {
  apiAlias: "cross_selling_element";
  crossSelling: Array<ProductCrossSelling>;
  products: Array<Product>;
  total: number;
  streamId: string;
};
