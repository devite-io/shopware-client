import { ProductCrossSelling as StoreApiProductCrossSelling } from "#types/api/store/product/crossSelling/ProductCrossSelling";
import { Product } from "../Product";
import { ProductStream } from "../stream/ProductStream";
import { ProductCrossSellingAssignedProduct } from "./ProductCrossSellingAssignedProduct";

export type ProductCrossSelling = StoreApiProductCrossSelling & {
  productId?: string;
  productVersionId?: string;
  productStreamId?: string;
  product?: Product;
  productStream?: ProductStream;
  assignedProducts?: Array<ProductCrossSellingAssignedProduct>;
};
