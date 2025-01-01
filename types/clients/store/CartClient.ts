import { LineItem } from "#types/api/store/lineItem/LineItem";
import { Cart } from "#types/api/store/cart/Cart";

export interface CartAddItemsRequest {
  items?: Array<LineItem>;
}
export type CartAddItemsResponse = Cart;

export interface CartRemoveItemsRequest {
  ids: Array<string>;
}
export type CartRemoveItemsResponse = Cart;

export interface CartUpdateItemsRequest {
  items?: Array<LineItem>;
}
export type CartUpdateItemsResponse = Cart;

export interface CartDeleteResponse {
  success?: boolean;
}
export type CartGetOrCreateResponse = Cart;
