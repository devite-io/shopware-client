import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
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
   * @throws {Error} if the request failed
   */
  public async getScripts(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ScriptListResponse> {
    const response = await this.get(`/script`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptListResponse;

    throw new Error(
      `Failed to fetch script list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createScript(
    request: ScriptCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ScriptCreateResponse> {
    const response = await this.post(`/script`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptCreateResponse;

    throw new Error(`Failed to create script: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchScripts(request: ScriptListSearchRequest): Promise<ScriptListSearchResponse> {
    const response = await this.get(`/search/script`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptListSearchResponse;

    throw new Error(
      `Failed to search for scripts: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getScript(id: string): Promise<ScriptSingleResponse> {
    const response = await this.get(`/script/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptSingleResponse;

    throw new Error(`Failed to fetch script: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteScript(id: string): Promise<void> {
    const response = await this.delete(`/script/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete script: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateScript(
    id: string,
    request: ScriptUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ScriptUpdateResponse> {
    const response = await this.patch(`/script/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptUpdateResponse;

    throw new Error(`Failed to update script: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getScriptAggregate(
    request: ScriptAggregationRequest
  ): Promise<ScriptAggregationResponse> {
    const response = await this.post(`/aggregate/script`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptAggregationResponse;

    throw new Error(`Failed to aggregate script: ${response.statusCode} ${response.statusMessage}`);
  }
}

export default ScriptClient;
