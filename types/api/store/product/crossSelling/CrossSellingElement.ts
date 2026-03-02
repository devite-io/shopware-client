import { ProductCrossSelling } from "./ProductCrossSelling";
import { Product } from "../Product";

export interface CrossSellingElement {
  apiAlias: "cross_selling_element";
  total: number;
  streamId: string;
  products: Array<Product>;
  crossSelling: Array<ProductCrossSelling>;
}
