import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  TagAggregationRequest,
  TagAggregationResponse,
  TagCreateRequest,
  TagCreateResponse,
  TagListResponse,
  TagListSearchRequest,
  TagListSearchResponse,
  TagSingleResponse,
  TagUpdateRequest,
  TagUpdateResponse
} from "#types/clients/admin/TagClient";

class TagClient extends Client {
  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTags(query?: Criteria): Promise<TagListResponse> {
    const response = await this.get(`/tag` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as TagListResponse;

    throw new ShopwareError("Failed to fetch tag list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createTag(
    request: TagCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TagCreateResponse> {
    const response = await this.post(`/tag`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TagCreateResponse;

    throw new ShopwareError("Failed to create tag", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchTags(request: TagListSearchRequest): Promise<TagListSearchResponse> {
    const response = await this.post(`/search/tag`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TagListSearchResponse;

    throw new ShopwareError("Failed to search for tags", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTag(id: string, query?: Criteria): Promise<TagSingleResponse> {
    const response = await this.get(`/tag/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TagSingleResponse;

    throw new ShopwareError("Failed to fetch tag", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteTag(id: string): Promise<void> {
    const response = await this.delete(`/tag/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete tag", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateTag(
    id: string,
    request: TagUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TagUpdateResponse> {
    const response = await this.patch(`/tag/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as TagUpdateResponse;

    throw new ShopwareError("Failed to update tag", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTagAggregate(request: TagAggregationRequest): Promise<TagAggregationResponse> {
    const response = await this.post(`/aggregate/tag`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TagAggregationResponse;

    throw new ShopwareError("Failed to aggregate tag", response);
  }
}

export default TagClient;
