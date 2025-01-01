import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
import {
  CategoryAggregationRequest,
  CategoryAggregationResponse,
  CategoryCreateRequest,
  CategoryCreateResponse,
  CategoryListResponse,
  CategoryListSearchRequest,
  CategoryListSearchResponse,
  CategorySingleResponse,
  CategoryUpdateRequest,
  CategoryUpdateResponse,
  MainCategoryAggregationRequest,
  MainCategoryAggregationResponse,
  MainCategoryCreateRequest,
  MainCategoryCreateResponse,
  MainCategoryListResponse,
  MainCategoryListSearchRequest,
  MainCategoryListSearchResponse,
  MainCategorySingleResponse,
  MainCategoryUpdateRequest,
  MainCategoryUpdateResponse
} from "#types/clients/admin/CategoryClient";

class CategoryClient extends Client {
  /** Categories **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCategories(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<CategoryListResponse> {
    const response = await this.get(`/category`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategoryListResponse;

    throw new Error(
      `Failed to fetch category list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCategory(
    request: CategoryCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CategoryCreateResponse> {
    const response = await this.post(`/category`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategoryCreateResponse;

    throw new Error(`Failed to create category: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCategories(
    request: CategoryListSearchRequest
  ): Promise<CategoryListSearchResponse> {
    const response = await this.get(`/search/category`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategoryListSearchResponse;

    throw new Error(
      `Failed to search for categories: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCategory(id: string): Promise<CategorySingleResponse> {
    const response = await this.get(`/category/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategorySingleResponse;

    throw new Error(`Failed to fetch category: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCategory(id: string): Promise<void> {
    const response = await this.delete(`/category/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete category: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCategory(
    id: string,
    request: CategoryUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CategoryUpdateResponse> {
    const response = await this.patch(`/category/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategoryUpdateResponse;

    throw new Error(`Failed to update category: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCategoryAggregate(
    request: CategoryAggregationRequest
  ): Promise<CategoryAggregationResponse> {
    const response = await this.post(`/aggregate/category`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategoryAggregationResponse;

    throw new Error(
      `Failed to aggregate category: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Main Categories **/

  /**
   * @throws {Error} if the request failed
   */
  public async getMainCategories(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<MainCategoryListResponse> {
    const response = await this.get(`/main-category`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MainCategoryListResponse;

    throw new Error(
      `Failed to fetch main category list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createMainCategory(
    request: MainCategoryCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<MainCategoryCreateResponse> {
    const response = await this.post(`/main-category`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MainCategoryCreateResponse;

    throw new Error(
      `Failed to create main category: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchMainCategories(
    request: MainCategoryListSearchRequest
  ): Promise<MainCategoryListSearchResponse> {
    const response = await this.get(`/search/main-category`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MainCategoryListSearchResponse;

    throw new Error(
      `Failed to search for main categories: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getMainCategory(id: string): Promise<MainCategorySingleResponse> {
    const response = await this.get(`/main-category/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MainCategorySingleResponse;

    throw new Error(
      `Failed to fetch main category: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteMainCategory(id: string): Promise<void> {
    const response = await this.delete(`/main-category/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete main category: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateMainCategory(
    id: string,
    request: MainCategoryUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<MainCategoryUpdateResponse> {
    const response = await this.patch(`/main-category/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MainCategoryUpdateResponse;

    throw new Error(
      `Failed to update main category: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getMainCategoryAggregate(
    request: MainCategoryAggregationRequest
  ): Promise<MainCategoryAggregationResponse> {
    const response = await this.post(`/aggregate/main-category`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MainCategoryAggregationResponse;

    throw new Error(
      `Failed to aggregate main category: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default CategoryClient;
