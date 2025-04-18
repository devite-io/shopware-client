import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import type StoreShopwareClient from "../StoreShopwareClient";
import ShopwareError from "#http/ShopwareError";
import {
  ProductCrossSellingGroupListResponse,
  ProductListingListWithCategoryRequest,
  ProductListingListWithCategoryResponse,
  ProductListRequest,
  ProductListResponse,
  ProductReviewListRequest,
  ProductReviewListResponse,
  ProductReviewSaveRequest,
  ProductSearchRequest,
  ProductSearchResponse,
  ProductSearchSuggestionListRequest,
  ProductSearchSuggestionListResponse,
  ProductSingleRequest,
  ProductSingleResponse,
  ProductVariantWithOptionsRequest,
  ProductVariantWithOptionsResponse
} from "#types/clients/store/ProductClient";

class ProductClient extends Client {
  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getListingByCategory(
    categoryId: string,
    request: ProductListingListWithCategoryRequest = {}
  ): Promise<ProductListingListWithCategoryResponse> {
    const response = await this.post(`/product-listing/${categoryId}`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductListingListWithCategoryResponse;

    throw new ShopwareError("Failed to fetch product listing by category", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getCrossSellingGroupsForProduct(
    id: string
  ): Promise<ProductCrossSellingGroupListResponse> {
    const response = await this.post(`/product/${id}/cross-selling`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductCrossSellingGroupListResponse;

    throw new ShopwareError("Failed to fetch cross selling groups for product", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getProduct(
    id: string,
    includeSeoUrls: boolean,
    request: ProductSingleRequest = {}
  ): Promise<ProductSingleResponse> {
    const response = await this.post(`/product/${id}`, {
      headers: { "sw-include-seo-urls": includeSeoUrls.toString() },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductSingleResponse;

    throw new ShopwareError("Failed to fetch product", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getProducts(request: ProductListRequest = {}): Promise<ProductListResponse> {
    const response = await this.post("/product", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductListResponse;

    throw new ShopwareError("Failed to fetch product list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getReviewsForProduct(
    id: string,
    request: ProductReviewListRequest = {}
  ): Promise<ProductReviewListResponse> {
    const response = await this.post(`/product/${id}/reviews`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductReviewListResponse;

    throw new ShopwareError("Failed to fetch reviews for product", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async saveReviewForProduct(id: string, request: ProductReviewSaveRequest): Promise<void> {
    const response = await this.post(
      `/product/${id}/review`,
      (this.client as StoreShopwareClient).withContextToken({
        body: new JsonPayload(request)
      })
    );

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to save review for product", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async findVariantWithOptions(
    id: string,
    request: ProductVariantWithOptionsRequest
  ): Promise<ProductVariantWithOptionsResponse> {
    const response = await this.post(`/product/${id}/find-variant`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductVariantWithOptionsResponse;

    throw new ShopwareError("Failed to find product variant", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchProducts(request: ProductSearchRequest): Promise<ProductSearchResponse> {
    const response = await this.post("/search", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductSearchResponse;

    throw new ShopwareError("Failed to search for products", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSearchSuggestions(
    request: ProductSearchSuggestionListRequest
  ): Promise<ProductSearchSuggestionListResponse> {
    const response = await this.post("/search-suggest", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductSearchSuggestionListResponse;

    throw new ShopwareError("Failed to fetch search suggestions", response);
  }
}

export default ProductClient;
