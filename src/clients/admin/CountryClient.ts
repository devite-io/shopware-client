import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
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
  public async getCountries(query?: Criteria): Promise<CountryListResponse> {
    const response = await this.get(`/country` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryListResponse;

    throw new ShopwareError("Failed to fetch country list", response);
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

    throw new ShopwareError("Failed to create country", response);
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

    throw new ShopwareError("Failed to search for countries", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCountry(id: string, query?: Criteria): Promise<CountrySingleResponse> {
    const response = await this.get(`/country/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountrySingleResponse;

    throw new ShopwareError("Failed to fetch country", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCountry(id: string): Promise<void> {
    const response = await this.delete(`/country/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete country", response);
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

    throw new ShopwareError("Failed to update country", response);
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

    throw new ShopwareError("Failed to aggregate cms block", response);
  }

  /** States **/

  /**
   * @throws {Error} if the request failed
   */
  public async getStates(query?: Criteria): Promise<StateListResponse> {
    const response = await this.get(`/country-state` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateListResponse;

    throw new ShopwareError("Failed to fetch state list", response);
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

    throw new ShopwareError("Failed to create state", response);
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

    throw new ShopwareError("Failed to search for states", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getState(id: string, query?: Criteria): Promise<StateSingleResponse> {
    const response = await this.get(`/country-state/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as StateSingleResponse;

    throw new ShopwareError("Failed to fetch state", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteState(id: string): Promise<void> {
    const response = await this.delete(`/country-state/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete state", response);
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

    throw new ShopwareError("Failed to update state", response);
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

    throw new ShopwareError("Failed to aggregate state", response);
  }
}

export default CountryClient;
