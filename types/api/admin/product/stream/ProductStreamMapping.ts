import { Product } from "../Product";
import { ProductStream } from "./ProductStream";

export interface ProductStreamMapping {
  id?: string;
  productId: string;
  productVersionId?: string;
  product?: Product;
  productStreamId: string;
  productStream?: ProductStream;
}
