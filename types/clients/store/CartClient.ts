import { CartLineItem } from "#types/api/store/cart/lineItem/CartLineItem";
import { Cart } from "#types/api/store/cart/Cart";

export interface CartAddItemsRequest {
  items?: Array<CartLineItem>;
}
export type CartAddItemsResponse = Cart;

export interface CartRemoveItemsRequest {
  ids: Array<string>;
}
export type CartRemoveItemsResponse = Cart;

export interface CartUpdateItemsRequest {
  items?: Array<CartLineItem>;
}
export type CartUpdateItemsResponse = Cart;

export type CartGetOrCreateResponse = Cart;
