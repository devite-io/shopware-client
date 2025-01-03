import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import {
  SetAggregationRequest,
  SetAggregationResponse,
  SetCreateRequest,
  SetCreateResponse,
  SetListResponse,
  SetListSearchRequest,
  SetListSearchResponse,
  SetSingleResponse,
  SetUpdateRequest,
  SetUpdateResponse,
  SnippetAggregationRequest,
  SnippetAggregationResponse,
  SnippetCreateRequest,
  SnippetCreateResponse,
  SnippetListResponse,
  SnippetListSearchRequest,
  SnippetListSearchResponse,
  SnippetSingleResponse,
  SnippetUpdateRequest,
  SnippetUpdateResponse
} from "#types/clients/admin/SnippetClient";

class DeliveryTimeClient extends Client {
  /** Snippets **/

  /**
   * @throws {Error} if the request failed
   */
  public async getSnippets(query?: Criteria): Promise<SnippetListResponse> {
    const response = await this.get(`/snippet` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SnippetListResponse;

    throw new Error(
      `Failed to fetch snippet list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createSnippet(
    request: SnippetCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SnippetCreateResponse> {
    const response = await this.post(`/snippet`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SnippetCreateResponse;

    throw new Error(`Failed to create snippet: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchSnippets(
    request: SnippetListSearchRequest
  ): Promise<SnippetListSearchResponse> {
    const response = await this.get(`/search/snippet`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SnippetListSearchResponse;

    throw new Error(
      `Failed to search for snippets: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSnippet(id: string, query?: Criteria): Promise<SnippetSingleResponse> {
    const response = await this.get(`/snippet/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SnippetSingleResponse;

    throw new Error(`Failed to fetch snippet: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSnippet(id: string): Promise<void> {
    const response = await this.delete(`/snippet/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete snippet: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateSnippet(
    id: string,
    request: SnippetUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SnippetUpdateResponse> {
    const response = await this.patch(`/snippet/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SnippetUpdateResponse;

    throw new Error(`Failed to update snippet: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSnippetAggregate(
    request: SnippetAggregationRequest
  ): Promise<SnippetAggregationResponse> {
    const response = await this.post(`/aggregate/snippet`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SnippetAggregationResponse;

    throw new Error(
      `Failed to aggregate snippet: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Sets **/

  /**
   * @throws {Error} if the request failed
   */
  public async getSets(query?: Criteria): Promise<SetListResponse> {
    const response = await this.get(`/snippet-set` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as SetListResponse;

    throw new Error(
      `Failed to fetch snippet set list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createSet(
    request: SetCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SetCreateResponse> {
    const response = await this.post(`/snippet-set`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SetCreateResponse;

    throw new Error(
      `Failed to create snippet set: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchSets(request: SetListSearchRequest): Promise<SetListSearchResponse> {
    const response = await this.get(`/search/snippet-set`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SetListSearchResponse;

    throw new Error(
      `Failed to search for snippet sets: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSet(id: string, query?: Criteria): Promise<SetSingleResponse> {
    const response = await this.get(`/snippet-set/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SetSingleResponse;

    throw new Error(
      `Failed to fetch snippet set: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteSet(id: string): Promise<void> {
    const response = await this.delete(`/snippet-set/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete snippet set: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateSet(
    id: string,
    request: SetUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SetUpdateResponse> {
    const response = await this.patch(`/snippet-set/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SetUpdateResponse;

    throw new Error(
      `Failed to update snippet set: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getSetAggregate(request: SetAggregationRequest): Promise<SetAggregationResponse> {
    const response = await this.post(`/aggregate/snippet-set`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SetAggregationResponse;

    throw new Error(
      `Failed to aggregate snippet set: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default DeliveryTimeClient;
