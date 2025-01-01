import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
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
   * @throws {Error} if the request failed
   */
  public async getTags(limit?: number, page?: number, query?: string): Promise<TagListResponse> {
    const response = await this.get(`/tag`, { query: { limit, page, query } });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as TagListResponse;

    throw new Error(`Failed to fetch tag list: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createTag(
    request: TagCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TagCreateResponse> {
    const response = await this.post(`/tag`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TagCreateResponse;

    throw new Error(`Failed to create tag: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchTags(request: TagListSearchRequest): Promise<TagListSearchResponse> {
    const response = await this.get(`/search/tag`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TagListSearchResponse;

    throw new Error(`Failed to search for tags: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTag(id: string): Promise<TagSingleResponse> {
    const response = await this.get(`/tag/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TagSingleResponse;

    throw new Error(`Failed to fetch tag: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTag(id: string): Promise<void> {
    const response = await this.delete(`/tag/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete tag: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateTag(
    id: string,
    request: TagUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TagUpdateResponse> {
    const response = await this.patch(`/tag/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TagUpdateResponse;

    throw new Error(`Failed to update tag: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTagAggregate(request: TagAggregationRequest): Promise<TagAggregationResponse> {
    const response = await this.post(`/aggregate/tag`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TagAggregationResponse;

    throw new Error(`Failed to aggregate tag: ${response.statusCode} ${response.statusMessage}`);
  }
}

export default TagClient;
