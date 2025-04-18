import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  PluginAggregationRequest,
  PluginAggregationResponse,
  PluginCreateRequest,
  PluginCreateResponse,
  PluginListResponse,
  PluginListSearchRequest,
  PluginListSearchResponse,
  PluginSingleResponse,
  PluginUpdateRequest,
  PluginUpdateResponse
} from "#types/clients/admin/PluginClient";

class PluginClient extends Client {
  /**
   * Requires `plugin:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getPlugins(query?: Criteria): Promise<PluginListResponse> {
    const response = await this.get(`/plugin` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PluginListResponse;

    throw new ShopwareError("Failed to fetch plugin list", response);
  }

  /**
   * Requires `plugin:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createPlugin(
    request: PluginCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PluginCreateResponse> {
    const response = await this.post(`/plugin`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as PluginCreateResponse;

    throw new ShopwareError("Failed to create plugin", response);
  }

  /**
   * Requires `plugin:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchPlugins(request: PluginListSearchRequest): Promise<PluginListSearchResponse> {
    const response = await this.post(`/search/plugin`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PluginListSearchResponse;

    throw new ShopwareError("Failed to search for plugins", response);
  }

  /**
   * Requires `plugin:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getPlugin(id: string, query?: Criteria): Promise<PluginSingleResponse> {
    const response = await this.get(`/plugin/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PluginSingleResponse;

    throw new ShopwareError("Failed to fetch plugin", response);
  }

  /**
   * Requires `plugin:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deletePlugin(id: string): Promise<void> {
    const response = await this.delete(`/plugin/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete plugin", response);
  }

  /**
   * Requires `plugin:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updatePlugin(
    id: string,
    request: PluginUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PluginUpdateResponse> {
    const response = await this.patch(`/plugin/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as PluginUpdateResponse;

    throw new ShopwareError("Failed to update plugin", response);
  }

  /**
   * Requires `plugin:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getPluginAggregate(
    request: PluginAggregationRequest
  ): Promise<PluginAggregationResponse> {
    const response = await this.post(`/aggregate/plugin`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PluginAggregationResponse;

    throw new ShopwareError("Failed to aggregate plugin", response);
  }
}

export default PluginClient;
