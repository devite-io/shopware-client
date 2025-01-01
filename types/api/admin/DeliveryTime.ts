import { DeliveryTime as StoreApiDeliveryTime } from "#types/api/store/DeliveryTime";
import { ShippingMethod } from "./shippingMethod/ShippingMethod";
import { Product } from "./product/Product";

export type DeliveryTime = StoreApiDeliveryTime & {
  shippingMethods?: Array<ShippingMethod>;
  products?: Array<Product>;
};
