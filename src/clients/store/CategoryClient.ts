import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import {
  CategoryListRequest,
  CategoryListResponse,
  CategorySingleRequest,
  CategorySingleResponse,
  NavigationMenuRequest,
  NavigationMenuResponse
} from "#types/clients/store/CategoryClient";

class CategoryClient extends Client {
  /**
   * @throws {Error} if the request failed
   */
  public async getCategories(request: CategoryListRequest = {}): Promise<CategoryListResponse> {
    const response = await this.post("/category", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategoryListResponse;

    throw new ShopwareError("Failed to fetch category list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCategory(
    categoryId: string,
    includeSeoUrls: boolean,
    request: CategorySingleRequest
  ): Promise<CategorySingleResponse> {
    const response = await this.post(`/category/${categoryId}`, {
      headers: { "sw-include-seo-urls": includeSeoUrls.toString() },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategorySingleResponse;

    throw new ShopwareError("Failed to fetch category", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getNavigationMenu(
    activeId: string,
    rootId: string,
    includeSeoUrls: boolean,
    request: NavigationMenuRequest = {}
  ): Promise<NavigationMenuResponse> {
    const response = await this.post(`/navigation/${activeId}/${rootId}`, {
      headers: { "sw-include-seo-urls": includeSeoUrls.toString() },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as NavigationMenuResponse;

    throw new ShopwareError("Failed to fetch navigation menu", response);
  }
}

export default CategoryClient;
