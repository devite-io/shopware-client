import { ProductCrossSelling } from "./ProductCrossSelling";

export interface ProductCrossSellingAssignedProduct {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  position?: number;
  crossSelling?: ProductCrossSelling;
}
