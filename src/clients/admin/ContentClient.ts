import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
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
  public async getCmsBlocks(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<CmsBlockListResponse> {
    const response = await this.get(`/cms-block`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsBlockListResponse;

    throw new Error(
      `Failed to fetch cms block list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(`Failed to create cms block: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to search for cms blocks: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsBlock(id: string): Promise<CmsBlockSingleResponse> {
    const response = await this.get(`/cms-block/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsBlockSingleResponse;

    throw new Error(`Failed to fetch cms block: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCmsBlock(id: string): Promise<void> {
    const response = await this.delete(`/cms-block/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete cms block: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update cms block: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to aggregate cms block: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Cms Pages **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsPages(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<CmsPageListResponse> {
    const response = await this.get(`/cms-page`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsPageListResponse;

    throw new Error(
      `Failed to fetch cms page list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(`Failed to create cms page: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to search for cms pages: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsPage(id: string): Promise<CmsPageSingleResponse> {
    const response = await this.get(`/cms-page/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsPageSingleResponse;

    throw new Error(`Failed to fetch cms page: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCmsPage(id: string): Promise<void> {
    const response = await this.delete(`/cms-page/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete cms page: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update cms page: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to aggregate cms page: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Cms Sections **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsSections(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<CmsSectionListResponse> {
    const response = await this.get(`/cms-section`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSectionListResponse;

    throw new Error(
      `Failed to fetch cms section list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to create cms section: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to search for cms sections: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsSection(id: string): Promise<CmsSectionSingleResponse> {
    const response = await this.get(`/cms-section/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSectionSingleResponse;

    throw new Error(
      `Failed to fetch cms section: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCmsSection(id: string): Promise<void> {
    const response = await this.delete(`/cms-section/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete cms section: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to update cms section: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to aggregate cms section: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Cms Slots **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsSlots(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<CmsSlotListResponse> {
    const response = await this.get(`/cms-slot`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSlotListResponse;

    throw new Error(
      `Failed to fetch cms slot list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(`Failed to create cms slot: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to search for cms slots: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsSlot(id: string): Promise<CmsSlotSingleResponse> {
    const response = await this.get(`/cms-slot/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsSlotSingleResponse;

    throw new Error(`Failed to fetch cms slot: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCmsSlot(id: string): Promise<void> {
    const response = await this.delete(`/cms-slot/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete cms slot: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update cms slot: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to aggregate cms slot: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Landing Pages **/

  /**
   * @throws {Error} if the request failed
   */
  public async getLandingPages(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<LandingPageListResponse> {
    const response = await this.get(`/landing-page`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LandingPageListResponse;

    throw new Error(
      `Failed to fetch landing page list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to create landing page: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to search for landing pages: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLandingPage(id: string): Promise<LandingPageSingleResponse> {
    const response = await this.get(`/landing-page/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LandingPageSingleResponse;

    throw new Error(
      `Failed to fetch landing page: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteLandingPage(id: string): Promise<void> {
    const response = await this.delete(`/landing-page/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete landing page: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to update landing page: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(
      `Failed to aggregate landing page: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Themes **/

  /**
   * @throws {Error} if the request failed
   */
  public async getThemes(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ThemeListResponse> {
    const response = await this.get(`/theme`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThemeListResponse;

    throw new Error(`Failed to fetch theme list: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to create theme: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to search for themes: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTheme(id: string): Promise<ThemeSingleResponse> {
    const response = await this.get(`/theme/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ThemeSingleResponse;

    throw new Error(`Failed to fetch theme: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTheme(id: string): Promise<void> {
    const response = await this.delete(`/theme/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete theme: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update theme: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to aggregate theme: ${response.statusCode} ${response.statusMessage}`);
  }
}
export default ContentClient;
