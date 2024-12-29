import Client from "#clients/Client";
import JsonPayload from "#payloads/JsonPayload";
import {
  CategoryListRequest,
  CategoryListResponse,
  CategorySingleRequest,
  CategorySingleResponse,
  NavigationMenuRequest,
  NavigationMenuResponse
} from "#types/clients/CategoryClient";

class CategoryClient extends Client {
  /**
   * @throws {Error} if the request fails
   */
  public async getCategoryList(request: CategoryListRequest = {}): Promise<CategoryListResponse> {
    const response = await this.post("/category", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CategoryListResponse;

    throw new Error(
      `Failed to fetch category list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
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

    throw new Error(`Failed to fetch category: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request fails
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

    throw new Error(
      `Failed to fetch navigation menu: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default CategoryClient;
