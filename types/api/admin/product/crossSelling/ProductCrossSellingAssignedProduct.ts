import { Product } from "../Product";
import { ProductCrossSelling } from "./ProductCrossSelling";

export interface ProductCrossSellingAssignedProduct {
  id: string;
  crossSellingId: string;
  productId: string;
  productVersionId?: string;
  position?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  product?: Product;
  crossSelling?: ProductCrossSelling;
}
