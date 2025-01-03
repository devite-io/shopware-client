import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import {
  LanguageAggregationRequest,
  LanguageAggregationResponse,
  LanguageCreateRequest,
  LanguageCreateResponse,
  LanguageListResponse,
  LanguageListSearchRequest,
  LanguageListSearchResponse,
  LanguageSingleResponse,
  LanguageUpdateRequest,
  LanguageUpdateResponse,
  LocaleAggregationRequest,
  LocaleAggregationResponse,
  LocaleCreateRequest,
  LocaleCreateResponse,
  LocaleListResponse,
  LocaleListSearchRequest,
  LocaleListSearchResponse,
  LocaleSingleResponse,
  LocaleUpdateRequest,
  LocaleUpdateResponse
} from "#types/clients/admin/LocaleClient";

class LocaleClient extends Client {
  /** Locales **/

  /**
   * @throws {Error} if the request failed
   */
  public async getLocales(query?: Criteria): Promise<LocaleListResponse> {
    const response = await this.get(`/locale` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LocaleListResponse;

    throw new Error(
      `Failed to fetch locale list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createLocale(
    request: LocaleCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<LocaleCreateResponse> {
    const response = await this.post(`/locale`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LocaleCreateResponse;

    throw new Error(`Failed to create locale: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchLocales(request: LocaleListSearchRequest): Promise<LocaleListSearchResponse> {
    const response = await this.get(`/search/locale`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LocaleListSearchResponse;

    throw new Error(
      `Failed to search for locales: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLocale(id: string, query?: Criteria): Promise<LocaleSingleResponse> {
    const response = await this.get(`/locale/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LocaleSingleResponse;

    throw new Error(`Failed to fetch locale: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteLocale(id: string): Promise<void> {
    const response = await this.delete(`/locale/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete locale: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateLocale(
    id: string,
    request: LocaleUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<LocaleUpdateResponse> {
    const response = await this.patch(`/locale/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LocaleUpdateResponse;

    throw new Error(`Failed to update locale: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLocaleAggregate(
    request: LocaleAggregationRequest
  ): Promise<LocaleAggregationResponse> {
    const response = await this.post(`/aggregate/locale`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LocaleAggregationResponse;

    throw new Error(`Failed to aggregate locale: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Languages **/

  /**
   * @throws {Error} if the request failed
   */
  public async getLanguages(query?: Criteria): Promise<LanguageListResponse> {
    const response = await this.get(`/language` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LanguageListResponse;

    throw new Error(
      `Failed to fetch language list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createLanguage(
    request: LanguageCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<LanguageCreateResponse> {
    const response = await this.post(`/language`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LanguageCreateResponse;

    throw new Error(`Failed to create language: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchLanguages(
    request: LanguageListSearchRequest
  ): Promise<LanguageListSearchResponse> {
    const response = await this.get(`/search/language`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LanguageListSearchResponse;

    throw new Error(
      `Failed to search for languages: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLanguage(id: string, query?: Criteria): Promise<LanguageSingleResponse> {
    const response = await this.get(`/language/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LanguageSingleResponse;

    throw new Error(`Failed to fetch language: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteLanguage(id: string): Promise<void> {
    const response = await this.delete(`/language/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete language: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateLanguage(
    id: string,
    request: LanguageUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<LanguageUpdateResponse> {
    const response = await this.patch(`/language/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LanguageUpdateResponse;

    throw new Error(`Failed to update language: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getLanguageAggregate(
    request: LanguageAggregationRequest
  ): Promise<LanguageAggregationResponse> {
    const response = await this.post(`/aggregate/language`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as LanguageAggregationResponse;

    throw new Error(
      `Failed to aggregate language: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default LocaleClient;
