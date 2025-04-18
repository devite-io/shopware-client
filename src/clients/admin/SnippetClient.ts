import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
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
   * Requires `snippet:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSnippets(query?: Criteria): Promise<SnippetListResponse> {
    const response = await this.get(`/snippet` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SnippetListResponse;

    throw new ShopwareError("Failed to fetch snippet list", response);
  }

  /**
   * Requires `snippet:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as SnippetCreateResponse;

    throw new ShopwareError("Failed to create snippet", response);
  }

  /**
   * Requires `snippet:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchSnippets(
    request: SnippetListSearchRequest
  ): Promise<SnippetListSearchResponse> {
    const response = await this.post(`/search/snippet`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SnippetListSearchResponse;

    throw new ShopwareError("Failed to search for snippets", response);
  }

  /**
   * Requires `snippet:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSnippet(id: string, query?: Criteria): Promise<SnippetSingleResponse> {
    const response = await this.get(`/snippet/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SnippetSingleResponse;

    throw new ShopwareError("Failed to fetch snippet", response);
  }

  /**
   * Requires `snippet:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteSnippet(id: string): Promise<void> {
    const response = await this.delete(`/snippet/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete snippet", response);
  }

  /**
   * Requires `snippet:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as SnippetUpdateResponse;

    throw new ShopwareError("Failed to update snippet", response);
  }

  /**
   * Requires `snippet:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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

    throw new ShopwareError("Failed to aggregate snippet", response);
  }

  /** Sets **/

  /**
   * Requires `snippet-set:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSets(query?: Criteria): Promise<SetListResponse> {
    const response = await this.get(`/snippet-set` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as SetListResponse;

    throw new ShopwareError("Failed to fetch snippet set list", response);
  }

  /**
   * Requires `snippet-set:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as SetCreateResponse;

    throw new ShopwareError("Failed to create snippet set", response);
  }

  /**
   * Requires `snippet-set:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchSets(request: SetListSearchRequest): Promise<SetListSearchResponse> {
    const response = await this.post(`/search/snippet-set`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SetListSearchResponse;

    throw new ShopwareError("Failed to search for snippet sets", response);
  }

  /**
   * Requires `snippet-set:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSet(id: string, query?: Criteria): Promise<SetSingleResponse> {
    const response = await this.get(`/snippet-set/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SetSingleResponse;

    throw new ShopwareError("Failed to fetch snippet set", response);
  }

  /**
   * Requires `snippet-set:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteSet(id: string): Promise<void> {
    const response = await this.delete(`/snippet-set/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete snippet set", response);
  }

  /**
   * Requires `snippet-set:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
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

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as SetUpdateResponse;

    throw new ShopwareError("Failed to update snippet set", response);
  }

  /**
   * Requires `snippet-set:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSetAggregate(request: SetAggregationRequest): Promise<SetAggregationResponse> {
    const response = await this.post(`/aggregate/snippet-set`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SetAggregationResponse;

    throw new ShopwareError("Failed to aggregate snippet set", response);
  }
}

export default DeliveryTimeClient;
