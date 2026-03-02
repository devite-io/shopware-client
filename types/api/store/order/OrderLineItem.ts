import { CartLineItemPayload } from "#types/api/store/cart/lineItem/CartLineItemPayload";
import { CartPriceQuantity } from "../price/cart/CartPriceQuantity";
import { GenericRecord } from "#types/api/global/GenericRecord";
import { Media } from "../media/Media";
import { OrderLineItemDownload } from "./OrderLineItemDownload";

export interface OrderLineItem {
  apiAlias: "order_line_item";
  id: string;
  versionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  parentId?: string;
  parentVersionId?: string;
  parent?: OrderLineItem;
  children: Array<OrderLineItem>;
  referencedId?: string;
  promotionId?: string;
  type?: string;
  quantity: number;
  label: string;
  description?: string;
  good?: boolean;
  removable?: boolean;
  stackable?: boolean;
  position?: number;
  unitPrice?: number;
  totalPrice?: number;
  priceDefinition?: CartPriceQuantity;
  payload?: CartLineItemPayload;
  orderVersionId?: string;
  productId?: string;
  productVersionId?: string;
  coverId?: string;
  cover?: Media;
  downloads?: Array<OrderLineItemDownload>;
  customFields?: GenericRecord;
  translated?: Record<string, string>;
}
