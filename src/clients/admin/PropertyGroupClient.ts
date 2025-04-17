import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  OptionAggregationRequest,
  OptionAggregationResponse,
  OptionCreateRequest,
  OptionCreateResponse,
  OptionListResponse,
  OptionListSearchRequest,
  OptionListSearchResponse,
  OptionSingleResponse,
  OptionUpdateRequest,
  OptionUpdateResponse,
  PropertyGroupAggregationRequest,
  PropertyGroupAggregationResponse,
  PropertyGroupCreateRequest,
  PropertyGroupCreateResponse,
  PropertyGroupListResponse,
  PropertyGroupListSearchRequest,
  PropertyGroupListSearchResponse,
  PropertyGroupSingleResponse,
  PropertyGroupUpdateRequest,
  PropertyGroupUpdateResponse
} from "#types/clients/admin/PropertyGroupClient";

class PropertyGroupClient extends Client {
  /** Property Groups **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getPropertyGroups(query?: Criteria): Promise<PropertyGroupListResponse> {
    const response = await this.get(`/property-group` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PropertyGroupListResponse;

    throw new ShopwareError("Failed to fetch property group list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createPropertyGroup(
    request: PropertyGroupCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PropertyGroupCreateResponse> {
    const response = await this.post(`/property-group`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PropertyGroupCreateResponse;

    throw new ShopwareError("Failed to create property group", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchPropertyGroups(
    request: PropertyGroupListSearchRequest
  ): Promise<PropertyGroupListSearchResponse> {
    const response = await this.post(`/search/property-group`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PropertyGroupListSearchResponse;

    throw new ShopwareError("Failed to search for property groups", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getPropertyGroup(
    id: string,
    query?: Criteria
  ): Promise<PropertyGroupSingleResponse> {
    const response = await this.get(`/property-group/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PropertyGroupSingleResponse;

    throw new ShopwareError("Failed to fetch property group", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deletePropertyGroup(id: string): Promise<void> {
    const response = await this.delete(`/property-group/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete property group", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updatePropertyGroup(
    id: string,
    request: PropertyGroupUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PropertyGroupUpdateResponse> {
    const response = await this.patch(`/property-group/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as PropertyGroupUpdateResponse;

    throw new ShopwareError("Failed to update property group", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getPropertyGroupAggregate(
    request: PropertyGroupAggregationRequest
  ): Promise<PropertyGroupAggregationResponse> {
    const response = await this.post(`/aggregate/property-group`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PropertyGroupAggregationResponse;

    throw new ShopwareError("Failed to aggregate property group", response);
  }

  /** Options **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getOptions(query?: Criteria): Promise<OptionListResponse> {
    const response = await this.get(`/property-group-option` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OptionListResponse;

    throw new ShopwareError("Failed to fetch option list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createOption(
    request: OptionCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<OptionCreateResponse> {
    const response = await this.post(`/property-group-option`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OptionCreateResponse;

    throw new ShopwareError("Failed to create option", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchOptions(request: OptionListSearchRequest): Promise<OptionListSearchResponse> {
    const response = await this.post(`/search/property-group-option`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OptionListSearchResponse;

    throw new ShopwareError("Failed to search for options", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getOption(id: string, query?: Criteria): Promise<OptionSingleResponse> {
    const response = await this.get(`/property-group-option/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OptionSingleResponse;

    throw new ShopwareError("Failed to fetch option", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteOption(id: string): Promise<void> {
    const response = await this.delete(`/property-group-option/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete option", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateOption(
    id: string,
    request: OptionUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<OptionUpdateResponse> {
    const response = await this.patch(`/property-group-option/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as OptionUpdateResponse;

    throw new ShopwareError("Failed to update option", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getOptionAggregate(
    request: OptionAggregationRequest
  ): Promise<OptionAggregationResponse> {
    const response = await this.post(`/aggregate/property-group-option`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OptionAggregationResponse;

    throw new ShopwareError("Failed to aggregate option", response);
  }
}

export default PropertyGroupClient;
