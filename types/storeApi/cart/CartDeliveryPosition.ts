import { CartDeliveryDate } from ".";
import { LineItem } from "../lineItem";
import { CalculatedPrice } from "../price";

export type CartDeliveryPosition = {
  deliveryDate?: CartDeliveryDate;
  identifier?: string;
  lineItem?: LineItem;
  price?: CalculatedPrice;
};
