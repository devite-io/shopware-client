import { CartDeliveryTime } from "./CartDeliveryTime";

export interface CartDeliveryInformation {
  apiAlias: "cart_delivery_information";
  deliveryTime?: CartDeliveryTime;
  length?: number;
  width?: number;
  height?: number;
  weight?: number;
  stock?: number;
  restockTime?: number;
}
