import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import {
  CartAddItemsRequest,
  CartAddItemsResponse,
  CartDeleteResponse,
  CartGetOrCreateResponse,
  CartRemoveItemsRequest,
  CartRemoveItemsResponse,
  CartUpdateItemsRequest,
  CartUpdateItemsResponse
} from "#types/clients/store/CartClient";

class CartClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async getOrCreateCart(): Promise<CartGetOrCreateResponse> {
    const response = await this.get("/checkout/cart");

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CartGetOrCreateResponse;

    throw new ShopwareError("Failed to get or create cart", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCart(): Promise<CartDeleteResponse> {
    const response = await this.delete("/checkout/cart");

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CartDeleteResponse;

    throw new ShopwareError("Failed to delete cart", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async addLineItems(request: CartAddItemsRequest): Promise<CartAddItemsResponse> {
    const response = await this.post("/checkout/cart/line-item", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CartAddItemsResponse;

    throw new ShopwareError("Failed to add line items to cart", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async removeLineItems(request: CartRemoveItemsRequest): Promise<CartRemoveItemsResponse> {
    const response = await this.post("/checkout/cart/line-item/delete", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CartRemoveItemsResponse;

    throw new ShopwareError("Failed to remove line items from cart", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateLineItems(request: CartUpdateItemsRequest): Promise<CartUpdateItemsResponse> {
    const response = await this.patch("/checkout/cart/line-item", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CartUpdateItemsResponse;

    throw new ShopwareError("Failed to update line items in cart", response);
  }
}

export default CartClient;
