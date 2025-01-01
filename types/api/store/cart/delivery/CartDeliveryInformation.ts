import { CartDeliveryTime } from "./CartDeliveryTime";

export interface CartDeliveryInformation {
  apiAlias: "cart_delivery_information";
  freeDelivery?: boolean;
  deliveryTime?: CartDeliveryTime;
  height?: number;
  length?: number;
  restockTime?: number;
  stock?: number;
  weight?: number;
  width?: number;
}
