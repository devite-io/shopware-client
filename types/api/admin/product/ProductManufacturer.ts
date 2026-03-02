import { ProductManufacturer as StoreApiProductManufacturer } from "#types/api/store/product/ProductManufacturer";
import { Media } from "../media/Media";

export type ProductManufacturer = StoreApiProductManufacturer & {
  media?: Media;
};
