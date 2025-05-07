import { Media } from "../../media/Media";
import { CartDeliveryInformation } from "../delivery/CartDeliveryInformation";
import { CartLineItemPayload } from "./CartLineItemPayload";
import { CalculatedPrice } from "../../price/CalculatedPrice";
import { CartPriceQuantity } from "../../price/cart/CartPriceQuantity";
import { CartLineItemType } from "./CartLineItemType";

export interface CartLineItem {
  apiAlias: "cart_line_item";
  children?: Array<CartLineItem>;
  cover?: Media;
  dataContextHash?: string;
  dataTimestamp?: string;
  deliveryInformation?: CartDeliveryInformation;
  description?: string;
  good?: boolean;
  id: string;
  label?: string;
  modified?: string;
  modifiedByApp?: boolean;
  payload?: CartLineItemPayload;
  price?: CalculatedPrice;
  priceDefinition?: CartPriceQuantity;
  quantity?: number;
  quantityInformation?: {
    maxPurchase?: number;
    minPurchase?: number;
    purchaseSteps?: number;
  };
  referencedId?: string;
  removable?: boolean;
  stackable?: boolean;
  states?: Array<"is-physical" | "is-download">;
  type: CartLineItemType;
  uniqueIdentifier?: string;
}
