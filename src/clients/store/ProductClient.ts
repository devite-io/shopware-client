import Client from "../Client";
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
import JsonPayload from "#payloads/JsonPayload";

class ProductClient extends Client {
  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to fetch product listing by category: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCrossSellingGroupsForProduct(
    id: string
  ): Promise<ProductCrossSellingGroupListResponse> {
    const response = await this.post(`/product/${id}/cross-selling`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductCrossSellingGroupListResponse;

    throw new Error(
      `Failed to fetch cross selling groups for product: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(`Failed to fetch product: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getProducts(request: ProductListRequest = {}): Promise<ProductListResponse> {
    const response = await this.post("/product", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductListResponse;

    throw new Error(
      `Failed to fetch product list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to fetch reviews for product: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async saveReviewForProduct(id: string, request: ProductReviewSaveRequest): Promise<void> {
    const response = await this.post(`/product/${id}/review`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) return;

    throw new Error(
      `Failed to save review for product: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to find product variant: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchProducts(request: ProductSearchRequest): Promise<ProductSearchResponse> {
    const response = await this.post("/search", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductSearchResponse;

    throw new Error(
      `Failed to search for products: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSearchSuggestions(
    request: ProductSearchSuggestionListRequest
  ): Promise<ProductSearchSuggestionListResponse> {
    const response = await this.post("/search-suggest", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProductSearchSuggestionListResponse;

    throw new Error(
      `Failed to fetch search suggestions: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default ProductClient;
