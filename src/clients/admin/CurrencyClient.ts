import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import {
  CountryRoundingAggregationRequest,
  CountryRoundingAggregationResponse,
  CountryRoundingCreateRequest,
  CountryRoundingCreateResponse,
  CountryRoundingListResponse,
  CountryRoundingListSearchRequest,
  CountryRoundingListSearchResponse,
  CountryRoundingSingleResponse,
  CountryRoundingUpdateRequest,
  CountryRoundingUpdateResponse,
  CurrencyAggregationRequest,
  CurrencyAggregationResponse,
  CurrencyCreateRequest,
  CurrencyCreateResponse,
  CurrencyListResponse,
  CurrencyListSearchRequest,
  CurrencyListSearchResponse,
  CurrencySingleResponse,
  CurrencyUpdateRequest,
  CurrencyUpdateResponse
} from "#types/clients/admin/CurrencyClient";

class CountryClient extends Client {
  /** Currencies **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCurrencies(query?: Criteria): Promise<CurrencyListResponse> {
    const response = await this.get(`/currency` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CurrencyListResponse;

    throw new Error(
      `Failed to fetch currency list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCurrency(
    request: CurrencyCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CurrencyCreateResponse> {
    const response = await this.post(`/currency`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CurrencyCreateResponse;

    throw new Error(`Failed to create currency: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCurrencies(
    request: CurrencyListSearchRequest
  ): Promise<CurrencyListSearchResponse> {
    const response = await this.get(`/search/currency`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CurrencyListSearchResponse;

    throw new Error(
      `Failed to search for currencies: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCurrency(id: string, query?: Criteria): Promise<CurrencySingleResponse> {
    const response = await this.get(`/currency/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CurrencySingleResponse;

    throw new Error(`Failed to fetch currency: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCurrency(id: string): Promise<void> {
    const response = await this.delete(`/currency/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete currency: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCurrency(
    id: string,
    request: CurrencyUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CurrencyUpdateResponse> {
    const response = await this.patch(`/currency/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CurrencyUpdateResponse;

    throw new Error(`Failed to update currency: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCurrencyAggregate(
    request: CurrencyAggregationRequest
  ): Promise<CurrencyAggregationResponse> {
    const response = await this.post(`/aggregate/cms-block`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CurrencyAggregationResponse;

    throw new Error(
      `Failed to aggregate cms block: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Country Roundings **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCountryRoundings(query?: Criteria): Promise<CountryRoundingListResponse> {
    const response = await this.get(`/currency-country-rounding` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryRoundingListResponse;

    throw new Error(
      `Failed to fetch country rounding list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCountryRounding(
    request: CountryRoundingCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CountryRoundingCreateResponse> {
    const response = await this.post(`/currency-country-rounding`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryRoundingCreateResponse;

    throw new Error(
      `Failed to create country rounding: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCountryRoundings(
    request: CountryRoundingListSearchRequest
  ): Promise<CountryRoundingListSearchResponse> {
    const response = await this.get(`/search/currency-country-rounding`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryRoundingListSearchResponse;

    throw new Error(
      `Failed to search for country roundings: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCountryRounding(
    id: string,
    query?: Criteria
  ): Promise<CountryRoundingSingleResponse> {
    const response = await this.get(`/currency-country-rounding/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryRoundingSingleResponse;

    throw new Error(
      `Failed to fetch country rounding: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCountryRounding(id: string): Promise<void> {
    const response = await this.delete(`/currency-country-rounding/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete country rounding: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCountryRounding(
    id: string,
    request: CountryRoundingUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CountryRoundingUpdateResponse> {
    const response = await this.patch(`/currency-country-rounding/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryRoundingUpdateResponse;

    throw new Error(
      `Failed to update country rounding: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCountryRoundingAggregate(
    request: CountryRoundingAggregationRequest
  ): Promise<CountryRoundingAggregationResponse> {
    const response = await this.post(`/aggregate/currency-country-rounding`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CountryRoundingAggregationResponse;

    throw new Error(
      `Failed to aggregate country rounding: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default CountryClient;
