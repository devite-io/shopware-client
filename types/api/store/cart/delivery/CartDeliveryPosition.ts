import { CartDeliveryDate } from "./CartDeliveryDate";
import { CartLineItem } from "#types/api/store/cart/lineItem/CartLineItem";
import { CalculatedPrice } from "../../price/CalculatedPrice";

export interface CartDeliveryPosition {
  identifier?: string;
  lineItem?: CartLineItem;
  price?: CalculatedPrice;
  deliveryDate?: CartDeliveryDate;
}
