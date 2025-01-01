import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
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
   * @throws {Error} if the request failed
   */
  public async getPlugins(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<PluginListResponse> {
    const response = await this.get(`/plugin`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PluginListResponse;

    throw new Error(
      `Failed to fetch plugin list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createPlugin(
    request: PluginCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PluginCreateResponse> {
    const response = await this.post(`/plugin`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PluginCreateResponse;

    throw new Error(`Failed to create plugin: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchPlugins(request: PluginListSearchRequest): Promise<PluginListSearchResponse> {
    const response = await this.get(`/search/plugin`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PluginListSearchResponse;

    throw new Error(
      `Failed to search for plugins: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPlugin(id: string): Promise<PluginSingleResponse> {
    const response = await this.get(`/plugin/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PluginSingleResponse;

    throw new Error(`Failed to fetch plugin: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deletePlugin(id: string): Promise<void> {
    const response = await this.delete(`/plugin/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete plugin: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updatePlugin(
    id: string,
    request: PluginUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PluginUpdateResponse> {
    const response = await this.patch(`/plugin/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PluginUpdateResponse;

    throw new Error(`Failed to update plugin: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPluginAggregate(
    request: PluginAggregationRequest
  ): Promise<PluginAggregationResponse> {
    const response = await this.post(`/aggregate/plugin`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PluginAggregationResponse;

    throw new Error(`Failed to aggregate plugin: ${response.statusCode} ${response.statusMessage}`);
  }
}

export default PluginClient;
