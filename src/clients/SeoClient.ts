import { Client } from "#clients";
import {
  SeoRouteListRequest,
  SeoRouteListResponse,
  SitemapDownloadResponse,
  SitemapListResponse
} from "#types";
import { JsonPayload } from "#payloads";

class SeoClient extends Client {
  /**
   * @throws {Error} if the request fails
   */
  public async getSeoRouteList(request: SeoRouteListRequest = {}): Promise<SeoRouteListResponse> {
    const response = await this.post("/seo-url", {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SeoRouteListResponse;

    throw new Error(
      `Failed to fetch SEO route list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
   */
  public async fetchSitemapList(): Promise<SitemapListResponse> {
    const response = await this.get("/sitemap");

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SitemapListResponse;

    throw new Error(
      `Failed to fetch sitemap list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request fails
   */
  public async downloadSitemap(filePath: string): Promise<SitemapDownloadResponse> {
    const response = await this.get(`/sitemap/${filePath}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SitemapDownloadResponse;

    throw new Error(`Failed to download sitemap: ${response.statusCode} ${response.statusMessage}`);
  }
}

export default SeoClient;
