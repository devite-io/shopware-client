import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import {
  SeoRouteListRequest,
  SeoRouteListResponse,
  SitemapDownloadResponse,
  SitemapListResponse
} from "#types/clients/store/SeoClient";

class SeoClient extends Client {
  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getRoutes(request: SeoRouteListRequest = {}): Promise<SeoRouteListResponse> {
    const response = await this.post("/seo-url", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SeoRouteListResponse;

    throw new ShopwareError("Failed to fetch SEO route list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSitemaps(): Promise<SitemapListResponse> {
    const response = await this.get("/sitemap");

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SitemapListResponse;

    throw new ShopwareError("Failed to fetch sitemap list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSitemap(filePath: string): Promise<SitemapDownloadResponse> {
    const response = await this.get(`/sitemap/${filePath}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SitemapDownloadResponse;

    throw new ShopwareError("Failed to download sitemap", response);
  }
}

export default SeoClient;
