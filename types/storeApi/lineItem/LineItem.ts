import { ProductMedia } from "../media";
import { CartDeliveryInformation } from "../cart";
import { LineItemPayload, LineItemType } from ".";
import { CalculatedPrice, CartPriceQuantity } from "../price";

export type LineItem = {
  children?: Array<LineItem>;
  cover?: ProductMedia;
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
};
