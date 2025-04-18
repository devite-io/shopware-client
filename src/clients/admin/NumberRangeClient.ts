import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  RangeAggregationRequest,
  RangeAggregationResponse,
  RangeCreateRequest,
  RangeCreateResponse,
  RangeListResponse,
  RangeListSearchRequest,
  RangeListSearchResponse,
  RangeSingleResponse,
  RangeUpdateRequest,
  RangeUpdateResponse,
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
  StateAggregationRequest,
  StateAggregationResponse,
  StateCreateRequest,
  StateCreateResponse,
  StateListResponse,
  StateListSearchRequest,
  StateListSearchResponse,
  StateSingleResponse,
  StateUpdateRequest,
  StateUpdateResponse,
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
} from "#types/clients/admin/NumberRangeClient";

class NumberRangeClient extends Client {
  /** Ranges **/

  /**
   * Requires `number-range:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getRanges(query?: Criteria): Promise<RangeListResponse> {
    const response = await this.get(`/number-range` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RangeListResponse;

    throw new ShopwareError("Failed to fetch range list", response);
  }

  /**
   * Requires `number-range:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createRange(
    request: RangeCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<RangeCreateResponse> {
    const response = await this.post(`/number-range`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as RangeCreateResponse;

    throw new ShopwareError("Failed to create range", response);
  }

  /**
   * Requires `number-range:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchRanges(request: RangeListSearchRequest): Promise<RangeListSearchResponse> {
    const response = await this.post(`/search/number-range`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RangeListSearchResponse;

    throw new ShopwareError("Failed to search for ranges", response);
  }

  /**
   * Requires `number-range:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getRange(id: string, query?: Criteria): Promise<RangeSingleResponse> {
    const response = await this.get(`/number-range/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RangeSingleResponse;

    throw new ShopwareError("Failed to fetch range", response);
  }

  /**
   * Requires `number-range:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteRange(id: string): Promise<void> {
    const response = await this.delete(`/number-range/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete range", response);
  }

  /**
   * Requires `number-range:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateRange(
    id: string,
    request: RangeUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<RangeUpdateResponse> {
    const response = await this.patch(`/number-range/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as RangeUpdateResponse;

    throw new ShopwareError("Failed to update range", response);
  }

  /**
   * Requires `number-range:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getRangeAggregate(
    request: RangeAggregationRequest
  ): Promise<RangeAggregationResponse> {
    const response = await this.post(`/aggregate/number-range`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RangeAggregationResponse;

    throw new ShopwareError("Failed to aggregate range", response);
  }

  /** Sales Channels **/

  /**
   * Requires `number-range-sales-channel:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSalesChannels(query?: Criteria): Promise<SalesChannelListResponse> {
    const response = await this.get(`/number-range-sales-channel` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelListResponse;

    throw new ShopwareError("Failed to fetch sales channel list", response);
  }

  /**
   * Requires `number-range-sales-channel:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createSalesChannel(
    request: SalesChannelCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SalesChannelCreateResponse> {
    const response = await this.post(`/number-range-sales-channel`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as SalesChannelCreateResponse;

    throw new ShopwareError("Failed to create sales channel", response);
  }

  /**
   * Requires `number-range-sales-channel:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchSalesChannels(
    request: SalesChannelListSearchRequest
  ): Promise<SalesChannelListSearchResponse> {
    const response = await this.post(`/search/number-range-sales-channel`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelListSearchResponse;

    throw new ShopwareError("Failed to search for sales channels", response);
  }

  /**
   * Requires `number-range-sales-channel:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSalesChannel(id: string, query?: Criteria): Promise<SalesChannelSingleResponse> {
    const response = await this.get(`/number-range-sales-channel/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelSingleResponse;

    throw new ShopwareError("Failed to fetch sales channel", response);
  }

  /**
   * Requires `number-range-sales-channel:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteSalesChannel(id: string): Promise<void> {
    const response = await this.delete(`/number-range-sales-channel/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete sales channel", response);
  }

  /**
   * Requires `number-range-sales-channel:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateSalesChannel(
    id: string,
    request: SalesChannelUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SalesChannelUpdateResponse> {
    const response = await this.patch(`/number-range-sales-channel/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as SalesChannelUpdateResponse;

    throw new ShopwareError("Failed to update sales channel", response);
  }

  /**
   * Requires `number-range-sales-channel:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSalesChannelAggregate(
    request: SalesChannelAggregationRequest
  ): Promise<SalesChannelAggregationResponse> {
    const response = await this.post(`/aggregate/number-range-sales-channel`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalesChannelAggregationResponse;

    throw new ShopwareError("Failed to aggregate sales channel", response);
  }

  /** States **/

  /**
   * Requires `number-range-state:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getStates(query?: Criteria): Promise<StateListResponse> {
    const response = await this.get(`/number-range-state` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateListResponse;

    throw new ShopwareError("Failed to fetch state list", response);
  }

  /**
   * Requires `number-range-state:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createState(
    request: StateCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StateCreateResponse> {
    const response = await this.post(`/number-range-state`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as StateCreateResponse;

    throw new ShopwareError("Failed to create state", response);
  }

  /**
   * Requires `number-range-state:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchStates(request: StateListSearchRequest): Promise<StateListSearchResponse> {
    const response = await this.post(`/search/number-range-state`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateListSearchResponse;

    throw new ShopwareError("Failed to search for states", response);
  }

  /**
   * Requires `number-range-state:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getState(id: string, query?: Criteria): Promise<StateSingleResponse> {
    const response = await this.get(`/number-range-state/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateSingleResponse;

    throw new ShopwareError("Failed to fetch state", response);
  }

  /**
   * Requires `number-range-state:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteState(id: string): Promise<void> {
    const response = await this.delete(`/number-range-state/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete state", response);
  }

  /**
   * Requires `number-range-state:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateState(
    id: string,
    request: StateUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StateUpdateResponse> {
    const response = await this.patch(`/number-range-state/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as StateUpdateResponse;

    throw new ShopwareError("Failed to update state", response);
  }

  /**
   * Requires `number-range-state:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getStateAggregate(
    request: StateAggregationRequest
  ): Promise<StateAggregationResponse> {
    const response = await this.post(`/aggregate/number-range-state`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateAggregationResponse;

    throw new ShopwareError("Failed to aggregate state", response);
  }

  /** Types **/

  /**
   * Requires `number-range-type:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTypes(query?: Criteria): Promise<TypeListResponse> {
    const response = await this.get(`/number-range-type` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as TypeListResponse;

    throw new ShopwareError("Failed to fetch type list", response);
  }

  /**
   * Requires `number-range-type:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createType(
    request: TypeCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TypeCreateResponse> {
    const response = await this.post(`/number-range-type`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as TypeCreateResponse;

    throw new ShopwareError("Failed to create type", response);
  }

  /**
   * Requires `number-range-type:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchTypes(request: TypeListSearchRequest): Promise<TypeListSearchResponse> {
    const response = await this.post(`/search/number-range-type`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TypeListSearchResponse;

    throw new ShopwareError("Failed to search for types", response);
  }

  /**
   * Requires `number-range-type:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getType(id: string, query?: Criteria): Promise<TypeSingleResponse> {
    const response = await this.get(`/number-range-type/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TypeSingleResponse;

    throw new ShopwareError("Failed to fetch type", response);
  }

  /**
   * Requires `number-range-type:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteType(id: string): Promise<void> {
    const response = await this.delete(`/number-range-type/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete type", response);
  }

  /**
   * Requires `number-range-type:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateType(
    id: string,
    request: TypeUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TypeUpdateResponse> {
    const response = await this.patch(`/number-range-type/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as TypeUpdateResponse;

    throw new ShopwareError("Failed to update type", response);
  }

  /**
   * Requires `number-range-type:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTypeAggregate(request: TypeAggregationRequest): Promise<TypeAggregationResponse> {
    const response = await this.post(`/aggregate/number-range-type`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TypeAggregationResponse;

    throw new ShopwareError("Failed to aggregate type", response);
  }
}

export default NumberRangeClient;
