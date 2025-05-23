import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import {
  CartAddItemsRequest,
  CartAddItemsResponse,
  CartGetOrCreateResponse,
  CartRemoveItemsRequest,
  CartRemoveItemsResponse,
  CartUpdateItemsRequest,
  CartUpdateItemsResponse
} from "#types/clients/store/CartClient";
import type StoreShopwareClient from "../StoreShopwareClient";
import AuthenticationType from "../../auth/AuthenticationType";

class CartClient extends Client {
  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getOrCreateCart(): Promise<CartGetOrCreateResponse> {
    const response = await this.get(
      "/checkout/cart",
      this.client.authStore.getEntry(AuthenticationType.CONTEXT_TOKEN)
        ? (this.client as StoreShopwareClient).withContextToken()
        : undefined
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CartGetOrCreateResponse;

    throw new ShopwareError("Failed to get or create cart", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteCart(): Promise<void> {
    const response = await this.delete(
      "/checkout/cart",
      (this.client as StoreShopwareClient).withContextToken()
    );

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete cart", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async addLineItems(request: CartAddItemsRequest): Promise<CartAddItemsResponse> {
    const response = await this.post(
      "/checkout/cart/line-item",
      this.client.authStore.getEntry(AuthenticationType.CONTEXT_TOKEN)
        ? (this.client as StoreShopwareClient).withContextToken({ body: new JsonPayload(request) })
        : { body: new JsonPayload(request) }
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CartAddItemsResponse;

    throw new ShopwareError("Failed to add line items to cart", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async removeLineItems(request: CartRemoveItemsRequest): Promise<CartRemoveItemsResponse> {
    const response = await this.post(
      "/checkout/cart/line-item/delete",
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CartRemoveItemsResponse;

    throw new ShopwareError("Failed to remove line items from cart", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateLineItems(request: CartUpdateItemsRequest): Promise<CartUpdateItemsResponse> {
    const response = await this.patch(
      "/checkout/cart/line-item",
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CartUpdateItemsResponse;

    throw new ShopwareError("Failed to update line items in cart", response);
  }
}

export default CartClient;
