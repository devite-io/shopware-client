import { ProductCrossSelling as StoreApiProductCrossSelling } from "#types/api/store/product/crossSelling/ProductCrossSelling";
import { ProductStream } from "../stream/ProductStream";
import { ProductCrossSellingAssignedProduct } from "./ProductCrossSellingAssignedProduct";

export type ProductCrossSelling = StoreApiProductCrossSelling & {
  productStreamId?: string;
  productStream?: ProductStream;
  assignedProducts?: Array<ProductCrossSellingAssignedProduct>;
};
