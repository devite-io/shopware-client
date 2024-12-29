import { CartDeliveryTime } from "./CartDeliveryTime";

export type CartDeliveryInformation = {
  apiAlias: "cart_delivery_information";
  freeDelivery?: boolean;
  deliveryTime?: CartDeliveryTime;
  height?: number;
  length?: number;
  restockTime?: number;
  stock?: number;
  weight?: number;
  width?: number;
};
