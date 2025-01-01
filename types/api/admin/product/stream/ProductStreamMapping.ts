import { Product } from "../Product";
import { ProductStream } from "./ProductStream";

export interface ProductStreamMapping {
  id?: string;
  productId: string;
  productVersionId?: string;
  productStreamId: string;
  product?: Product;
  productStream?: ProductStream;
}
