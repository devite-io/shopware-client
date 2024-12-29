import { CartDeliveryDate } from "./CartDeliveryDate";
import { CalculatedPrice } from "#types/storeApi/price/CalculatedPrice";
import { LineItem } from "#types/storeApi/lineItem/LineItem";

export type CartDeliveryPosition = {
  deliveryDate?: CartDeliveryDate;
  identifier?: string;
  lineItem?: LineItem;
  price?: CalculatedPrice;
};
