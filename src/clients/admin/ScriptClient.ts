import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  ScriptAggregationRequest,
  ScriptAggregationResponse,
  ScriptCreateRequest,
  ScriptCreateResponse,
  ScriptListResponse,
  ScriptListSearchRequest,
  ScriptListSearchResponse,
  ScriptSingleResponse,
  ScriptUpdateRequest,
  ScriptUpdateResponse
} from "#types/clients/admin/ScriptClient";

class ScriptClient extends Client {
  /**
   * Requires `script:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getScripts(query?: Criteria): Promise<ScriptListResponse> {
    const response = await this.get(`/script` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptListResponse;

    throw new ShopwareError("Failed to fetch script list", response);
  }

  /**
   * Requires `script:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createScript(
    request: ScriptCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ScriptCreateResponse> {
    const response = await this.post(`/script`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as ScriptCreateResponse;

    throw new ShopwareError("Failed to create script", response);
  }

  /**
   * Requires `script:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchScripts(request: ScriptListSearchRequest): Promise<ScriptListSearchResponse> {
    const response = await this.post(`/search/script`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptListSearchResponse;

    throw new ShopwareError("Failed to search for scripts", response);
  }

  /**
   * Requires `script:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getScript(id: string, query?: Criteria): Promise<ScriptSingleResponse> {
    const response = await this.get(`/script/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptSingleResponse;

    throw new ShopwareError("Failed to fetch script", response);
  }

  /**
   * Requires `script:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteScript(id: string): Promise<void> {
    const response = await this.delete(`/script/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete script", response);
  }

  /**
   * Requires `script:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateScript(
    id: string,
    request: ScriptUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ScriptUpdateResponse> {
    const response = await this.patch(`/script/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as ScriptUpdateResponse;

    throw new ShopwareError("Failed to update script", response);
  }

  /**
   * Requires `script:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getScriptAggregate(
    request: ScriptAggregationRequest
  ): Promise<ScriptAggregationResponse> {
    const response = await this.post(`/aggregate/script`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptAggregationResponse;

    throw new ShopwareError("Failed to aggregate script", response);
  }
}

export default ScriptClient;
