import { DeliveryTime as StoreApiDeliveryTime } from "#types/api/store/DeliveryTime";
import { Product } from "./product/Product";

export type DeliveryTime = StoreApiDeliveryTime & {
  products?: Array<Product>;
};
