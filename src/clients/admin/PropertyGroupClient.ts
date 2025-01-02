import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
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
   * @throws {Error} if the request failed
   */
  public async getPropertyGroups(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<PropertyGroupListResponse> {
    const response = await this.get(`/property-group`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PropertyGroupListResponse;

    throw new Error(
      `Failed to fetch property group list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to create property group: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchPropertyGroups(
    request: PropertyGroupListSearchRequest
  ): Promise<PropertyGroupListSearchResponse> {
    const response = await this.get(`/search/property-group`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PropertyGroupListSearchResponse;

    throw new Error(
      `Failed to search for property groups: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPropertyGroup(id: string): Promise<PropertyGroupSingleResponse> {
    const response = await this.get(`/property-group/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PropertyGroupSingleResponse;

    throw new Error(
      `Failed to fetch property group: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deletePropertyGroup(id: string): Promise<void> {
    const response = await this.delete(`/property-group/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete property group: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PropertyGroupUpdateResponse;

    throw new Error(
      `Failed to update property group: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to aggregate property group: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Options **/

  /**
   * @throws {Error} if the request failed
   */
  public async getOptions(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<OptionListResponse> {
    const response = await this.get(`/property-group-option`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OptionListResponse;

    throw new Error(
      `Failed to fetch option list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(`Failed to create option: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchOptions(request: OptionListSearchRequest): Promise<OptionListSearchResponse> {
    const response = await this.get(`/search/property-group-option`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OptionListSearchResponse;

    throw new Error(
      `Failed to search for options: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getOption(id: string): Promise<OptionSingleResponse> {
    const response = await this.get(`/property-group-option/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OptionSingleResponse;

    throw new Error(`Failed to fetch option: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteOption(id: string): Promise<void> {
    const response = await this.delete(`/property-group-option/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete option: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as OptionUpdateResponse;

    throw new Error(`Failed to update option: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(`Failed to aggregate option: ${response.statusCode} ${response.statusMessage}`);
  }
}

export default PropertyGroupClient;
