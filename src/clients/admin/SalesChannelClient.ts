import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
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
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSalesChannels(query?: Criteria): Promise<SalesChannelListResponse> {
    const response = await this.get(`/sales-channel` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelListResponse;

    throw new ShopwareError("Failed to fetch sales channel list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createSalesChannel(
    request: SalesChannelCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SalesChannelCreateResponse> {
    const response = await this.post(`/sales-channel`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelCreateResponse;

    throw new ShopwareError("Failed to create sales channel", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchSalesChannels(
    request: SalesChannelListSearchRequest
  ): Promise<SalesChannelListSearchResponse> {
    const response = await this.post(`/search/sales-channel`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelListSearchResponse;

    throw new ShopwareError("Failed to search for sales channels", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSalesChannel(id: string, query?: Criteria): Promise<SalesChannelSingleResponse> {
    const response = await this.get(`/sales-channel/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelSingleResponse;

    throw new ShopwareError("Failed to fetch sales channel", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteSalesChannel(id: string): Promise<void> {
    const response = await this.delete(`/sales-channel/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete sales channel", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateSalesChannel(
    id: string,
    request: SalesChannelUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SalesChannelUpdateResponse> {
    const response = await this.patch(`/sales-channel/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as SalesChannelUpdateResponse;

    throw new ShopwareError("Failed to update sales channel", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSalesChannelAggregate(
    request: SalesChannelAggregationRequest
  ): Promise<SalesChannelAggregationResponse> {
    const response = await this.post(`/aggregate/sales-channel`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelAggregationResponse;

    throw new ShopwareError("Failed to aggregate sales channel", response);
  }

  /** Analytics **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getAnalyticsList(query?: Criteria): Promise<AnalyticsListResponse> {
    const response = await this.get(`/sales-channel-analytics` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AnalyticsListResponse;

    throw new ShopwareError("Failed to fetch analytics list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createAnalytics(
    request: AnalyticsCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AnalyticsCreateResponse> {
    const response = await this.post(`/sales-channel-analytics`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AnalyticsCreateResponse;

    throw new ShopwareError("Failed to create analytics", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchAnalytics(
    request: AnalyticsListSearchRequest
  ): Promise<AnalyticsListSearchResponse> {
    const response = await this.post(`/search/sales-channel-analytics`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AnalyticsListSearchResponse;

    throw new ShopwareError("Failed to search for analytics", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getAnalytics(id: string, query?: Criteria): Promise<AnalyticsSingleResponse> {
    const response = await this.get(`/sales-channel-analytics/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AnalyticsSingleResponse;

    throw new ShopwareError("Failed to fetch analytics", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteAnalytics(id: string): Promise<void> {
    const response = await this.delete(`/sales-channel-analytics/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete analytics", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateAnalytics(
    id: string,
    request: AnalyticsUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AnalyticsUpdateResponse> {
    const response = await this.patch(`/sales-channel-analytics/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as AnalyticsUpdateResponse;

    throw new ShopwareError("Failed to update analytics", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getAnalyticsAggregate(
    request: AnalyticsAggregationRequest
  ): Promise<AnalyticsAggregationResponse> {
    const response = await this.post(`/aggregate/sales-channel-analytics`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AnalyticsAggregationResponse;

    throw new ShopwareError("Failed to aggregate analytics", response);
  }

  /** Domains **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getDomains(query?: Criteria): Promise<DomainListResponse> {
    const response = await this.get(`/sales-channel-domain` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DomainListResponse;

    throw new ShopwareError("Failed to fetch domain list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createDomain(
    request: DomainCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DomainCreateResponse> {
    const response = await this.post(`/sales-channel-domain`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DomainCreateResponse;

    throw new ShopwareError("Failed to create domain", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchDomains(request: DomainListSearchRequest): Promise<DomainListSearchResponse> {
    const response = await this.post(`/search/sales-channel-domain`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DomainListSearchResponse;

    throw new ShopwareError("Failed to search for domains", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getDomain(id: string, query?: Criteria): Promise<DomainSingleResponse> {
    const response = await this.get(`/sales-channel-domain/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DomainSingleResponse;

    throw new ShopwareError("Failed to fetch domain", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteDomain(id: string): Promise<void> {
    const response = await this.delete(`/sales-channel-domain/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete domain", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateDomain(
    id: string,
    request: DomainUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<DomainUpdateResponse> {
    const response = await this.patch(`/sales-channel-domain/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as DomainUpdateResponse;

    throw new ShopwareError("Failed to update domain", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getDomainAggregate(
    request: DomainAggregationRequest
  ): Promise<DomainAggregationResponse> {
    const response = await this.post(`/aggregate/sales-channel-domain`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as DomainAggregationResponse;

    throw new ShopwareError("Failed to aggregate domain", response);
  }

  /** Types **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTypes(query?: Criteria): Promise<TypeListResponse> {
    const response = await this.get(`/sales-channel-type` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as TypeListResponse;

    throw new ShopwareError("Failed to fetch type list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createType(
    request: TypeCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TypeCreateResponse> {
    const response = await this.post(`/sales-channel-type`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TypeCreateResponse;

    throw new ShopwareError("Failed to create type", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchTypes(request: TypeListSearchRequest): Promise<TypeListSearchResponse> {
    const response = await this.post(`/search/sales-channel-type`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TypeListSearchResponse;

    throw new ShopwareError("Failed to search for types", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getType(id: string, query?: Criteria): Promise<TypeSingleResponse> {
    const response = await this.get(`/sales-channel-type/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TypeSingleResponse;

    throw new ShopwareError("Failed to fetch type", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteType(id: string): Promise<void> {
    const response = await this.delete(`/sales-channel-type/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete type", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateType(
    id: string,
    request: TypeUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TypeUpdateResponse> {
    const response = await this.patch(`/sales-channel-type/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as TypeUpdateResponse;

    throw new ShopwareError("Failed to update type", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTypeAggregate(request: TypeAggregationRequest): Promise<TypeAggregationResponse> {
    const response = await this.post(`/aggregate/sales-channel-type`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TypeAggregationResponse;

    throw new ShopwareError("Failed to aggregate type", response);
  }
}

export default SalesChannelClient;
