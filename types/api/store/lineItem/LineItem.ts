import { Media } from "../media/Media";
import { CartDeliveryInformation } from "../cart/delivery/CartDeliveryInformation";
import { LineItemPayload } from "./LineItemPayload";
import { CalculatedPrice } from "../price/CalculatedPrice";
import { CartPriceQuantity } from "../price/cart/CartPriceQuantity";
import { LineItemType } from "./LineItemType";

export interface LineItem {
  children?: Array<LineItem>;
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
  payload?: LineItemPayload;
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
  type: LineItemType;
  uniqueIdentifier?: string;
}
