import { CartDeliveryDate } from "./CartDeliveryDate";
import { LineItem } from "../../lineItem/LineItem";
import { CalculatedPrice } from "../../price/CalculatedPrice";

export interface CartDeliveryPosition {
  deliveryDate?: CartDeliveryDate;
  identifier?: string;
  lineItem?: LineItem;
  price?: CalculatedPrice;
}
