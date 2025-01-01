import Client from "#clients/Client";
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
import JsonPayload from "#payloads/JsonPayload";

class CartClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async getOrCreateCart(): Promise<CartGetOrCreateResponse> {
    const response = await this.get("/checkout/cart");

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CartGetOrCreateResponse;

    throw new Error(
      `Failed to get or create cart: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCart(): Promise<CartDeleteResponse> {
    const response = await this.delete("/checkout/cart");

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CartDeleteResponse;

    throw new Error(`Failed to delete cart: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async addLineItemsToCart(request: CartAddItemsRequest): Promise<CartAddItemsResponse> {
    const response = await this.post("/checkout/cart/line-item", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CartAddItemsResponse;

    throw new Error(
      `Failed to add line items to cart: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async removeLineItemsFromCart(
    request: CartRemoveItemsRequest
  ): Promise<CartRemoveItemsResponse> {
    const response = await this.post("/checkout/cart/line-item/delete", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CartRemoveItemsResponse;

    throw new Error(
      `Failed to remove line items from cart: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateLineItemsInCart(
    request: CartUpdateItemsRequest
  ): Promise<CartUpdateItemsResponse> {
    const response = await this.patch("/checkout/cart/line-item", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CartUpdateItemsResponse;

    throw new Error(
      `Failed to update line items in cart: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default CartClient;
