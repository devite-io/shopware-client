import { Media } from "../../media/Media";
import { CartLineItemPayload } from "./CartLineItemPayload";
import { CalculatedPrice } from "../../price/CalculatedPrice";
import { CartPriceQuantity } from "../../price/cart/CartPriceQuantity";
import { CartLineItemType } from "./CartLineItemType";

export interface CartLineItem {
  apiAlias: "cart_line_item";
  id: string;
  referencedId?: string;
  type: CartLineItemType;
  label?: string;
  description?: string;
  cover?: Media;
  good?: boolean;
  removable?: boolean;
  stackable?: boolean;
  price?: CalculatedPrice;
  priceDefinition?: CartPriceQuantity;
  quantity?: number;
  quantityInformation?: {
    maxPurchase?: number;
    minPurchase?: number;
    purchaseSteps?: number;
  };
  payload?: CartLineItemPayload;
  states?: Array<"is-physical" | "is-download">;
}
