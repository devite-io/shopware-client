import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
import {
  AnalyticsAggregationRequest,
  AnalyticsAggregationResponse,
  AnalyticsCreateRequest,
  AnalyticsCreateResponse,
  AnalyticsListResponse,
  AnalyticsListSearchRequest,
  AnalyticsListSearchResponse,
  AnalyticsSingleResponse,
  AnalyticsUpdateRequest,
  AnalyticsUpdateResponse,
  DomainAggregationRequest,
  DomainAggregationResponse,
  DomainCreateRequest,
  DomainCreateResponse,
  DomainListResponse,
  DomainListSearchRequest,
  DomainListSearchResponse,
  DomainSingleResponse,
  DomainUpdateRequest,
  DomainUpdateResponse,
  SalesChannelAggregationRequest,
  SalesChannelAggregationResponse,
  SalesChannelCreateRequest,
  SalesChannelCreateResponse,
  SalesChannelListResponse,
  SalesChannelListSearchRequest,
  SalesChannelListSearchResponse,
  SalesChannelSingleResponse,
  SalesChannelUpdateRequest,
  SalesChannelUpdateResponse,
  TypeAggregationRequest,
  TypeAggregationResponse,
  TypeCreateRequest,
  TypeCreateResponse,
  TypeListResponse,
  TypeListSearchRequest,
  TypeListSearchResponse,
  TypeSingleResponse,
  TypeUpdateRequest,
  TypeUpdateResponse
} from "#types/clients/admin/SalesChannelClient";

class SalesChannelClient extends Client {
  /** Sales Channels **/

  /**
   * @throws {Error} if the request failed
   */
  public async getSalesChannels(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<SalesChannelListResponse> {
    const response = await this.get(`/sales-channel`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelListResponse;

    throw new Error(
      `Failed to fetch sales channel list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createSalesChannel(
    request: SalesChannelCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SalesChannelCreateResponse> {
    const response = await this.post(`/sales-channel`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelCreateResponse;

    throw new Error(
      `Failed to create sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchSalesChannels(
    request: SalesChannelListSearchRequest
  ): Promise<SalesChannelListSearchResponse> {
    const response = await this.get(`/search/sales-channel`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelListSearchResponse;

    throw new Error(
      `Failed to search for sales channels: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSalesChannel(id: string): Promise<SalesChannelSingleResponse> {
    const response = await this.get(`/sales-channel/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelSingleResponse;

    throw new Error(
      `Failed to fetch sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSalesChannel(id: string): Promise<void> {
    const response = await this.delete(`/sales-channel/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateSalesChannel(
    id: string,
    request: SalesChannelUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SalesChannelUpdateResponse> {
    const response = await this.patch(`/sales-channel/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelUpdateResponse;

    throw new Error(
      `Failed to update sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSalesChannelAggregate(
    request: SalesChannelAggregationRequest
  ): Promise<SalesChannelAggregationResponse> {
    const response = await this.post(`/aggregate/sales-channel`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelAggregationResponse;

    throw new Error(
      `Failed to aggregate sales channel: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Analytics **/

  /**
   * @throws {Error} if the request failed
   */
  public async getAnalyticsList(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<AnalyticsListResponse> {
    const response = await this.get(`/sales-channel-analytics`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AnalyticsListResponse;

    throw new Error(
      `Failed to fetch analytics list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createAnalytics(
    request: AnalyticsCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AnalyticsCreateResponse> {
    const response = await this.post(`/sales-channel-analytics`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AnalyticsCreateResponse;

    throw new Error(`Failed to create analytics: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchAnalytics(
    request: AnalyticsListSearchRequest
  ): Promise<AnalyticsListSearchResponse> {
    const response = await this.get(`/search/sales-channel-analytics`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AnalyticsListSearchResponse;

    throw new Error(
      `Failed to search for analytics: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getAnalytics(id: string): Promise<AnalyticsSingleResponse> {
    const response = await this.get(`/sales-channel-analytics/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AnalyticsSingleResponse;

    throw new Error(`Failed to fetch analytics: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteAnalytics(id: string): Promise<void> {
    const response = await this.delete(`/sales-channel-analytics/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete analytics: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateAnalytics(
    id: string,
    request: AnalyticsUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AnalyticsUpdateResponse> {
    const response = await this.patch(`/sales-channel-analytics/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AnalyticsUpdateResponse;

    throw new Error(`Failed to update analytics: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getAnalyticsAggregate(
    request: AnalyticsAggregationRequest
  ): Promise<AnalyticsAggregationResponse> {
    const response = await this.post(`/aggregate/sales-channel-analytics`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AnalyticsAggregationResponse;

    throw new Error(
      `Failed to aggregate analytics: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Domains **/

  /**
   * @throws {Error} if the request failed
   */
  public async getDomains(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<DomainListResponse> {
    const response = await this.get(`/sales-channel-domain`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DomainListResponse;

    throw new Error(
      `Failed to fetch domain list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createDomain(
    request: DomainCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DomainCreateResponse> {
    const response = await this.post(`/sales-channel-domain`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DomainCreateResponse;

    throw new Error(`Failed to create domain: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchDomains(request: DomainListSearchRequest): Promise<DomainListSearchResponse> {
    const response = await this.get(`/search/sales-channel-domain`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DomainListSearchResponse;

    throw new Error(
      `Failed to search for domains: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDomain(id: string): Promise<DomainSingleResponse> {
    const response = await this.get(`/sales-channel-domain/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DomainSingleResponse;

    throw new Error(`Failed to fetch domain: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteDomain(id: string): Promise<void> {
    const response = await this.delete(`/sales-channel-domain/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete domain: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateDomain(
    id: string,
    request: DomainUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DomainUpdateResponse> {
    const response = await this.patch(`/sales-channel-domain/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DomainUpdateResponse;

    throw new Error(`Failed to update domain: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getDomainAggregate(
    request: DomainAggregationRequest
  ): Promise<DomainAggregationResponse> {
    const response = await this.post(`/aggregate/sales-channel-domain`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DomainAggregationResponse;

    throw new Error(`Failed to aggregate domain: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Types **/

  /**
   * @throws {Error} if the request failed
   */
  public async getTypes(limit?: number, page?: number, query?: string): Promise<TypeListResponse> {
    const response = await this.get(`/sales-channel-type`, { query: { limit, page, query } });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as TypeListResponse;

    throw new Error(`Failed to fetch type list: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createType(
    request: TypeCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TypeCreateResponse> {
    const response = await this.post(`/sales-channel-type`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TypeCreateResponse;

    throw new Error(`Failed to create type: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchTypes(request: TypeListSearchRequest): Promise<TypeListSearchResponse> {
    const response = await this.get(`/search/sales-channel-type`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TypeListSearchResponse;

    throw new Error(`Failed to search for types: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getType(id: string): Promise<TypeSingleResponse> {
    const response = await this.get(`/sales-channel-type/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TypeSingleResponse;

    throw new Error(`Failed to fetch type: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteType(id: string): Promise<void> {
    const response = await this.delete(`/sales-channel-type/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete type: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateType(
    id: string,
    request: TypeUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TypeUpdateResponse> {
    const response = await this.patch(`/sales-channel-type/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TypeUpdateResponse;

    throw new Error(`Failed to update type: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTypeAggregate(request: TypeAggregationRequest): Promise<TypeAggregationResponse> {
    const response = await this.post(`/aggregate/sales-channel-type`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TypeAggregationResponse;

    throw new Error(`Failed to aggregate type: ${response.statusCode} ${response.statusMessage}`);
  }
}

export default SalesChannelClient;
