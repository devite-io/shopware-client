import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  UrlAggregationRequest,
  UrlAggregationResponse,
  UrlCreateRequest,
  UrlCreateResponse,
  UrlListResponse,
  UrlListSearchRequest,
  UrlListSearchResponse,
  UrlSingleResponse,
  UrlTemplateAggregationRequest,
  UrlTemplateAggregationResponse,
  UrlTemplateCreateRequest,
  UrlTemplateCreateResponse,
  UrlTemplateListResponse,
  UrlTemplateListSearchRequest,
  UrlTemplateListSearchResponse,
  UrlTemplateSingleResponse,
  UrlTemplateUpdateRequest,
  UrlTemplateUpdateResponse,
  UrlUpdateRequest,
  UrlUpdateResponse
} from "#types/clients/admin/SeoClient";

class DeliveryTimeClient extends Client {
  /** Urls **/

  /**
   * Requires `seo-url:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getUrls(query?: Criteria): Promise<UrlListResponse> {
    const response = await this.get(`/seo-url` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as UrlListResponse;

    throw new ShopwareError("Failed to fetch url list", response);
  }

  /**
   * Requires `seo-url:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createUrl(
    request: UrlCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<UrlCreateResponse> {
    const response = await this.post(`/seo-url`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as UrlCreateResponse;

    throw new ShopwareError("Failed to create url", response);
  }

  /**
   * Requires `seo-url:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchUrls(request: UrlListSearchRequest): Promise<UrlListSearchResponse> {
    const response = await this.post(`/search/seo-url`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UrlListSearchResponse;

    throw new ShopwareError("Failed to search for urls", response);
  }

  /**
   * Requires `seo-url:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getUrl(id: string, query?: Criteria): Promise<UrlSingleResponse> {
    const response = await this.get(`/seo-url/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UrlSingleResponse;

    throw new ShopwareError("Failed to fetch url", response);
  }

  /**
   * Requires `seo-url:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteUrl(id: string): Promise<void> {
    const response = await this.delete(`/seo-url/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete url", response);
  }

  /**
   * Requires `seo-url:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateUrl(
    id: string,
    request: UrlUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<UrlUpdateResponse> {
    const response = await this.patch(`/seo-url/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as UrlUpdateResponse;

    throw new ShopwareError("Failed to update url", response);
  }

  /**
   * Requires `seo-url:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getUrlAggregate(request: UrlAggregationRequest): Promise<UrlAggregationResponse> {
    const response = await this.post(`/aggregate/seo-url`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UrlAggregationResponse;

    throw new ShopwareError("Failed to aggregate url", response);
  }

  /** Url Templates **/

  /**
   * Requires `seo-url-template:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getUrlTemplates(query?: Criteria): Promise<UrlTemplateListResponse> {
    const response = await this.get(`/seo-url-template` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UrlTemplateListResponse;

    throw new ShopwareError("Failed to fetch url template list", response);
  }

  /**
   * Requires `seo-url-template:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createUrlTemplate(
    request: UrlTemplateCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<UrlTemplateCreateResponse> {
    const response = await this.post(`/seo-url-template`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as UrlTemplateCreateResponse;

    throw new ShopwareError("Failed to create url template", response);
  }

  /**
   * Requires `seo-url-template:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchUrlTemplates(
    request: UrlTemplateListSearchRequest
  ): Promise<UrlTemplateListSearchResponse> {
    const response = await this.post(`/search/seo-url-template`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UrlTemplateListSearchResponse;

    throw new ShopwareError("Failed to search for url templates", response);
  }

  /**
   * Requires `seo-url-template:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getUrlTemplate(id: string, query?: Criteria): Promise<UrlTemplateSingleResponse> {
    const response = await this.get(`/seo-url-template/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UrlTemplateSingleResponse;

    throw new ShopwareError("Failed to fetch url template", response);
  }

  /**
   * Requires `seo-url-template:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteUrlTemplate(id: string): Promise<void> {
    const response = await this.delete(`/seo-url-template/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete url template", response);
  }

  /**
   * Requires `seo-url-template:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateUrlTemplate(
    id: string,
    request: UrlTemplateUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<UrlTemplateUpdateResponse> {
    const response = await this.patch(`/seo-url-template/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as UrlTemplateUpdateResponse;

    throw new ShopwareError("Failed to update url template", response);
  }

  /**
   * Requires `seo-url-template:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getUrlTemplateAggregate(
    request: UrlTemplateAggregationRequest
  ): Promise<UrlTemplateAggregationResponse> {
    const response = await this.post(`/aggregate/seo-url-template`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as UrlTemplateAggregationResponse;

    throw new ShopwareError("Failed to aggregate url template", response);
  }
}

export default DeliveryTimeClient;
