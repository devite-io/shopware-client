import { Unit as StoreApiUnit } from "#types/api/store/Unit";
import { Product } from "./product/Product";

export type Unit = StoreApiUnit & {
  products?: Array<Product>;
};
