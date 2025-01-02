import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import {
  CountryAggregationRequest,
  CountryAggregationResponse,
  CountryCreateRequest,
  CountryCreateResponse,
  CountryListResponse,
  CountryListSearchRequest,
  CountryListSearchResponse,
  CountrySingleResponse,
  CountryUpdateRequest,
  CountryUpdateResponse,
  StateAggregationRequest,
  StateAggregationResponse,
  StateCreateRequest,
  StateCreateResponse,
  StateListResponse,
  StateListSearchRequest,
  StateListSearchResponse,
  StateSingleResponse,
  StateUpdateRequest,
  StateUpdateResponse
} from "#types/clients/admin/CountryClient";

class CountryClient extends Client {
  /** Countries **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCountries(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<CountryListResponse> {
    const response = await this.get(`/country`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryListResponse;

    throw new Error(
      `Failed to fetch country list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCountry(
    request: CountryCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CountryCreateResponse> {
    const response = await this.post(`/country`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryCreateResponse;

    throw new Error(`Failed to create country: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCountries(
    request: CountryListSearchRequest
  ): Promise<CountryListSearchResponse> {
    const response = await this.get(`/search/country`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryListSearchResponse;

    throw new Error(
      `Failed to search for countries: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCountry(id: string): Promise<CountrySingleResponse> {
    const response = await this.get(`/country/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountrySingleResponse;

    throw new Error(`Failed to fetch country: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCountry(id: string): Promise<void> {
    const response = await this.delete(`/country/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete country: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCountry(
    id: string,
    request: CountryUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CountryUpdateResponse> {
    const response = await this.patch(`/country/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryUpdateResponse;

    throw new Error(`Failed to update country: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCountryAggregate(
    request: CountryAggregationRequest
  ): Promise<CountryAggregationResponse> {
    const response = await this.post(`/aggregate/cms-block`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryAggregationResponse;

    throw new Error(
      `Failed to aggregate cms block: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** States **/

  /**
   * @throws {Error} if the request failed
   */
  public async getStates(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<StateListResponse> {
    const response = await this.get(`/country-state`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateListResponse;

    throw new Error(`Failed to fetch state list: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createState(
    request: StateCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StateCreateResponse> {
    const response = await this.post(`/country-state`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateCreateResponse;

    throw new Error(`Failed to create state: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchStates(request: StateListSearchRequest): Promise<StateListSearchResponse> {
    const response = await this.get(`/search/country-state`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateListSearchResponse;

    throw new Error(
      `Failed to search for states: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getState(id: string): Promise<StateSingleResponse> {
    const response = await this.get(`/country-state/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateSingleResponse;

    throw new Error(`Failed to fetch state: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteState(id: string): Promise<void> {
    const response = await this.delete(`/country-state/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete state: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateState(
    id: string,
    request: StateUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<StateUpdateResponse> {
    const response = await this.patch(`/country-state/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateUpdateResponse;

    throw new Error(`Failed to update state: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getStateAggregate(
    request: StateAggregationRequest
  ): Promise<StateAggregationResponse> {
    const response = await this.post(`/aggregate/country-state`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateAggregationResponse;

    throw new Error(`Failed to aggregate state: ${response.statusCode} ${response.statusMessage}`);
  }
}

export default CountryClient;
