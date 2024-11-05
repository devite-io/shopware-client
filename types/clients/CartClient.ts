import { Cart, LineItem } from "../storeApi";

export type CartAddItemsRequest = { items?: Array<LineItem> };
export type CartAddItemsResponse = Cart;

export type CartRemoveItemsRequest = { ids: Array<string> };
export type CartRemoveItemsResponse = Cart;

export type CartUpdateItemsRequest = { items?: Array<LineItem> };
export type CartUpdateItemsResponse = Cart;

export type CartDeleteResponse = { success?: boolean };
export type CartGetOrCreateResponse = Cart;
