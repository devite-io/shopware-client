import { ProductManufacturer as StoreApiProductManufacturer } from "#types/api/store/product/ProductManufacturer";
import { Media } from "../media/Media";
import { Product } from "./Product";

export type ProductManufacturer = StoreApiProductManufacturer & {
  media?: Media;
  products?: Array<Product>;
};
