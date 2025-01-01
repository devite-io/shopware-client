import { ProductCrossSelling } from "./ProductCrossSelling";
import { Product } from "../Product";

export interface CrossSellingElement {
  apiAlias: "cross_selling_element";
  crossSelling: Array<ProductCrossSelling>;
  products: Array<Product>;
  total: number;
  streamId: string;
}
