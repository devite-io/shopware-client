import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
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
  public async getCategories(query?: Criteria): Promise<CategoryListResponse> {
    const response = await this.get(`/category` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategoryListResponse;

    throw new ShopwareError("Failed to fetch category list", response);
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
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategoryCreateResponse;

    throw new ShopwareError("Failed to create category", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCategories(
    request: CategoryListSearchRequest
  ): Promise<CategoryListSearchResponse> {
    const response = await this.post(`/search/category`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategoryListSearchResponse;

    throw new ShopwareError("Failed to search for categories", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCategory(id: string, query?: Criteria): Promise<CategorySingleResponse> {
    const response = await this.get(`/category/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategorySingleResponse;

    throw new ShopwareError("Failed to fetch category", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCategory(id: string): Promise<void> {
    const response = await this.delete(`/category/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete category", response);
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
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategoryUpdateResponse;

    throw new ShopwareError("Failed to update category", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCategoryAggregate(
    request: CategoryAggregationRequest
  ): Promise<CategoryAggregationResponse> {
    const response = await this.post(`/aggregate/category`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategoryAggregationResponse;

    throw new ShopwareError("Failed to aggregate category", response);
  }

  /** Main Categories **/

  /**
   * @throws {Error} if the request failed
   */
  public async getMainCategories(query?: Criteria): Promise<MainCategoryListResponse> {
    const response = await this.get(`/main-category` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MainCategoryListResponse;

    throw new ShopwareError("Failed to fetch main category list", response);
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
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MainCategoryCreateResponse;

    throw new ShopwareError("Failed to create main category", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchMainCategories(
    request: MainCategoryListSearchRequest
  ): Promise<MainCategoryListSearchResponse> {
    const response = await this.post(`/search/main-category`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MainCategoryListSearchResponse;

    throw new ShopwareError("Failed to search for main categories", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getMainCategory(id: string, query?: Criteria): Promise<MainCategorySingleResponse> {
    const response = await this.get(`/main-category/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MainCategorySingleResponse;

    throw new ShopwareError("Failed to fetch main category", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteMainCategory(id: string): Promise<void> {
    const response = await this.delete(`/main-category/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete main category", response);
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
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MainCategoryUpdateResponse;

    throw new ShopwareError("Failed to update main category", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getMainCategoryAggregate(
    request: MainCategoryAggregationRequest
  ): Promise<MainCategoryAggregationResponse> {
    const response = await this.post(`/aggregate/main-category`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as MainCategoryAggregationResponse;

    throw new ShopwareError("Failed to aggregate main category", response);
  }
}

export default CategoryClient;
