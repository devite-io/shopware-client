import { LineItemPayload } from "./LineItemPayload";
import { LineItemType } from "./LineItemType";
import { CartPriceQuantity } from "#types/storeApi/price/CartPriceQuantity";
import { ProductMedia } from "#types/storeApi/media/ProductMedia";
import { CartDeliveryInformation } from "#types/storeApi/cart/CartDeliveryInformation";
import { CalculatedPrice } from "#types/storeApi/price/CalculatedPrice";

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
