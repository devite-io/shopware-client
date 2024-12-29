import Client from "#clients/Client";
import JsonPayload from "#payloads/JsonPayload";
import {
  WishlistGetRequest,
  WishlistGetResponse,
  WishlistMergeOrCreateRequest,
  WishlistMergeOrCreateResponse,
  WishlistProductAddResponse,
  WishlistProductRemoveResponse
} from "#types/clients/WishlistClient";

class WishlistClient extends Client {
  /**
   * @throws {Error} if the request fails
   */
  public async addProductToWishlist(productId: string): Promise<WishlistProductAddResponse> {
    const response = await this.post(
      `/customer/wishlist/add/${productId}`,
      this.withContextToken()
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistProductAddResponse;

    throw new Error(
      `Failed to add product to wishlist: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
   */
  public async getWishlist(request: WishlistGetRequest = {}): Promise<WishlistGetResponse> {
    const response = await this.post(
      "/customer/wishlist",
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistGetResponse;

    throw new Error(`Failed to fetch wishlist: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
   */
  public async mergeOrCreateWishlist(
    request: WishlistMergeOrCreateRequest
  ): Promise<WishlistMergeOrCreateResponse> {
    const response = await this.post(
      "/customer/wishlist/merge",
      this.withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistMergeOrCreateResponse;

    throw new Error(
      `Failed to merge or create wishlist: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
   */
  public async removeProductFromWishlist(
    productId: string
  ): Promise<WishlistProductRemoveResponse> {
    const response = await this.delete(
      `/customer/wishlist/delete/${productId}`,
      this.withContextToken()
    );

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as WishlistProductRemoveResponse;

    throw new Error(
      `Failed to remove product from wishlist: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default WishlistClient;
