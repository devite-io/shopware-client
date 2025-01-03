import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  CmsBlockAggregationRequest,
  CmsBlockAggregationResponse,
  CmsBlockCreateRequest,
  CmsBlockCreateResponse,
  CmsBlockListResponse,
  CmsBlockListSearchRequest,
  CmsBlockListSearchResponse,
  CmsBlockSingleResponse,
  CmsBlockUpdateRequest,
  CmsBlockUpdateResponse,
  CmsPageAggregationRequest,
  CmsPageAggregationResponse,
  CmsPageCreateRequest,
  CmsPageCreateResponse,
  CmsPageListResponse,
  CmsPageListSearchRequest,
  CmsPageListSearchResponse,
  CmsPageSingleResponse,
  CmsPageUpdateRequest,
  CmsPageUpdateResponse,
  CmsSectionAggregationRequest,
  CmsSectionAggregationResponse,
  CmsSectionCreateRequest,
  CmsSectionCreateResponse,
  CmsSectionListResponse,
  CmsSectionListSearchRequest,
  CmsSectionListSearchResponse,
  CmsSectionSingleResponse,
  CmsSectionUpdateRequest,
  CmsSectionUpdateResponse,
  CmsSlotAggregationRequest,
  CmsSlotAggregationResponse,
  CmsSlotCreateRequest,
  CmsSlotCreateResponse,
  CmsSlotListResponse,
  CmsSlotListSearchRequest,
  CmsSlotListSearchResponse,
  CmsSlotSingleResponse,
  CmsSlotUpdateRequest,
  CmsSlotUpdateResponse,
  LandingPageAggregationRequest,
  LandingPageAggregationResponse,
  LandingPageCreateRequest,
  LandingPageCreateResponse,
  LandingPageListResponse,
  LandingPageListSearchRequest,
  LandingPageListSearchResponse,
  LandingPageSingleResponse,
  LandingPageUpdateRequest,
  LandingPageUpdateResponse,
  ThemeAggregationRequest,
  ThemeAggregationResponse,
  ThemeCreateRequest,
  ThemeCreateResponse,
  ThemeListResponse,
  ThemeListSearchRequest,
  ThemeListSearchResponse,
  ThemeSingleResponse,
  ThemeUpdateRequest,
  ThemeUpdateResponse
} from "#types/clients/admin/ContentClient";

class ContentClient extends Client {
  /** Cms Blocks **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsBlocks(query?: Criteria): Promise<CmsBlockListResponse> {
    const response = await this.get(`/cms-block` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsBlockListResponse;

    throw new ShopwareError("Failed to fetch cms block list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCmsBlock(
    request: CmsBlockCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CmsBlockCreateResponse> {
    const response = await this.post(`/cms-block`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsBlockCreateResponse;

    throw new ShopwareError("Failed to create cms block", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCmsBlocks(
    request: CmsBlockListSearchRequest
  ): Promise<CmsBlockListSearchResponse> {
    const response = await this.get(`/search/cms-block`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsBlockListSearchResponse;

    throw new ShopwareError("Failed to search for cms blocks", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsBlock(id: string, query?: Criteria): Promise<CmsBlockSingleResponse> {
    const response = await this.get(`/cms-block/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsBlockSingleResponse;

    throw new ShopwareError("Failed to fetch cms block", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCmsBlock(id: string): Promise<void> {
    const response = await this.delete(`/cms-block/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete cms block", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCmsBlock(
    id: string,
    request: CmsBlockUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CmsBlockUpdateResponse> {
    const response = await this.patch(`/cms-block/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsBlockUpdateResponse;

    throw new ShopwareError("Failed to update cms block", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsBlockAggregate(
    request: CmsBlockAggregationRequest
  ): Promise<CmsBlockAggregationResponse> {
    const response = await this.post(`/aggregate/cms-block`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsBlockAggregationResponse;

    throw new ShopwareError("Failed to aggregate cms block", response);
  }

  /** Cms Pages **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsPages(query?: Criteria): Promise<CmsPageListResponse> {
    const response = await this.get(`/cms-page` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsPageListResponse;

    throw new ShopwareError("Failed to fetch cms page list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCmsPage(
    request: CmsPageCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CmsPageCreateResponse> {
    const response = await this.post(`/cms-page`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsPageCreateResponse;

    throw new ShopwareError("Failed to create cms page", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCmsPages(
    request: CmsPageListSearchRequest
  ): Promise<CmsPageListSearchResponse> {
    const response = await this.get(`/search/cms-page`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsPageListSearchResponse;

    throw new ShopwareError("Failed to search for cms pages", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsPage(id: string, query?: Criteria): Promise<CmsPageSingleResponse> {
    const response = await this.get(`/cms-page/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsPageSingleResponse;

    throw new ShopwareError("Failed to fetch cms page", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCmsPage(id: string): Promise<void> {
    const response = await this.delete(`/cms-page/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete cms page", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCmsPage(
    id: string,
    request: CmsPageUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CmsPageUpdateResponse> {
    const response = await this.patch(`/cms-page/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsPageUpdateResponse;

    throw new ShopwareError("Failed to update cms page", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsPageAggregate(
    request: CmsPageAggregationRequest
  ): Promise<CmsPageAggregationResponse> {
    const response = await this.post(`/aggregate/cms-page`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsPageAggregationResponse;

    throw new ShopwareError("Failed to aggregate cms page", response);
  }

  /** Cms Sections **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsSections(query?: Criteria): Promise<CmsSectionListResponse> {
    const response = await this.get(`/cms-section` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSectionListResponse;

    throw new ShopwareError("Failed to fetch cms section list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCmsSection(
    request: CmsSectionCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CmsSectionCreateResponse> {
    const response = await this.post(`/cms-section`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSectionCreateResponse;

    throw new ShopwareError("Failed to create cms section", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCmsSections(
    request: CmsSectionListSearchRequest
  ): Promise<CmsSectionListSearchResponse> {
    const response = await this.get(`/search/cms-section`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSectionListSearchResponse;

    throw new ShopwareError("Failed to search for cms sections", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsSection(id: string, query?: Criteria): Promise<CmsSectionSingleResponse> {
    const response = await this.get(`/cms-section/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSectionSingleResponse;

    throw new ShopwareError("Failed to fetch cms section", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCmsSection(id: string): Promise<void> {
    const response = await this.delete(`/cms-section/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete cms section", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCmsSection(
    id: string,
    request: CmsSectionUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CmsSectionUpdateResponse> {
    const response = await this.patch(`/cms-section/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSectionUpdateResponse;

    throw new ShopwareError("Failed to update cms section", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsSectionAggregate(
    request: CmsSectionAggregationRequest
  ): Promise<CmsSectionAggregationResponse> {
    const response = await this.post(`/aggregate/cms-section`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSectionAggregationResponse;

    throw new ShopwareError("Failed to aggregate cms section", response);
  }

  /** Cms Slots **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsSlots(query?: Criteria): Promise<CmsSlotListResponse> {
    const response = await this.get(`/cms-slot` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSlotListResponse;

    throw new ShopwareError("Failed to fetch cms slot list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCmsSlot(
    request: CmsSlotCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CmsSlotCreateResponse> {
    const response = await this.post(`/cms-slot`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSlotCreateResponse;

    throw new ShopwareError("Failed to create cms slot", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCmsSlots(
    request: CmsSlotListSearchRequest
  ): Promise<CmsSlotListSearchResponse> {
    const response = await this.get(`/search/cms-slot`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSlotListSearchResponse;

    throw new ShopwareError("Failed to search for cms slots", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsSlot(id: string, query?: Criteria): Promise<CmsSlotSingleResponse> {
    const response = await this.get(`/cms-slot/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSlotSingleResponse;

    throw new ShopwareError("Failed to fetch cms slot", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCmsSlot(id: string): Promise<void> {
    const response = await this.delete(`/cms-slot/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete cms slot", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCmsSlot(
    id: string,
    request: CmsSlotUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CmsSlotUpdateResponse> {
    const response = await this.patch(`/cms-slot/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSlotUpdateResponse;

    throw new ShopwareError("Failed to update cms slot", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsSlotAggregate(
    request: CmsSlotAggregationRequest
  ): Promise<CmsSlotAggregationResponse> {
    const response = await this.post(`/aggregate/cms-slot`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSlotAggregationResponse;

    throw new ShopwareError("Failed to aggregate cms slot", response);
  }

  /** Landing Pages **/

  /**
   * @throws {Error} if the request failed
   */
  public async getLandingPages(query?: Criteria): Promise<LandingPageListResponse> {
    const response = await this.get(`/landing-page` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LandingPageListResponse;

    throw new ShopwareError("Failed to fetch landing page list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createLandingPage(
    request: LandingPageCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<LandingPageCreateResponse> {
    const response = await this.post(`/landing-page`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LandingPageCreateResponse;

    throw new ShopwareError("Failed to create landing page", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchLandingPages(
    request: LandingPageListSearchRequest
  ): Promise<LandingPageListSearchResponse> {
    const response = await this.get(`/search/landing-page`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LandingPageListSearchResponse;

    throw new ShopwareError("Failed to search for landing pages", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLandingPage(id: string, query?: Criteria): Promise<LandingPageSingleResponse> {
    const response = await this.get(`/landing-page/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LandingPageSingleResponse;

    throw new ShopwareError("Failed to fetch landing page", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteLandingPage(id: string): Promise<void> {
    const response = await this.delete(`/landing-page/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete landing page", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateLandingPage(
    id: string,
    request: LandingPageUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<LandingPageUpdateResponse> {
    const response = await this.patch(`/landing-page/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LandingPageUpdateResponse;

    throw new ShopwareError("Failed to update landing page", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLandingPageAggregate(
    request: LandingPageAggregationRequest
  ): Promise<LandingPageAggregationResponse> {
    const response = await this.post(`/aggregate/landing-page`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LandingPageAggregationResponse;

    throw new ShopwareError("Failed to aggregate landing page", response);
  }

  /** Themes **/

  /**
   * @throws {Error} if the request failed
   */
  public async getThemes(query?: Criteria): Promise<ThemeListResponse> {
    const response = await this.get(`/theme` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThemeListResponse;

    throw new ShopwareError("Failed to fetch theme list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createTheme(
    request: ThemeCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ThemeCreateResponse> {
    const response = await this.post(`/theme`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThemeCreateResponse;

    throw new ShopwareError("Failed to create theme", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchThemes(request: ThemeListSearchRequest): Promise<ThemeListSearchResponse> {
    const response = await this.get(`/search/theme`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThemeListSearchResponse;

    throw new ShopwareError("Failed to search for themes", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTheme(id: string, query?: Criteria): Promise<ThemeSingleResponse> {
    const response = await this.get(`/theme/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThemeSingleResponse;

    throw new ShopwareError("Failed to fetch theme", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTheme(id: string): Promise<void> {
    const response = await this.delete(`/theme/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete theme", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateTheme(
    id: string,
    request: ThemeUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ThemeUpdateResponse> {
    const response = await this.patch(`/theme/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThemeUpdateResponse;

    throw new ShopwareError("Failed to update theme", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getThemeAggregate(
    request: ThemeAggregationRequest
  ): Promise<ThemeAggregationResponse> {
    const response = await this.post(`/aggregate/theme`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThemeAggregationResponse;

    throw new ShopwareError("Failed to aggregate theme", response);
  }
}
export default ContentClient;
