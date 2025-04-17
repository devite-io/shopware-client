import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  SalutationAggregationRequest,
  SalutationAggregationResponse,
  SalutationCreateRequest,
  SalutationCreateResponse,
  SalutationListResponse,
  SalutationListSearchRequest,
  SalutationListSearchResponse,
  SalutationSingleResponse,
  SalutationUpdateRequest,
  SalutationUpdateResponse
} from "#types/clients/admin/SalutationClient";

class SalutationClient extends Client {
  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSalutations(query?: Criteria): Promise<SalutationListResponse> {
    const response = await this.get(`/salutation` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalutationListResponse;

    throw new ShopwareError("Failed to fetch salutation list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createSalutation(
    request: SalutationCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SalutationCreateResponse> {
    const response = await this.post(`/salutation`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalutationCreateResponse;

    throw new ShopwareError("Failed to create salutation", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchSalutations(
    request: SalutationListSearchRequest
  ): Promise<SalutationListSearchResponse> {
    const response = await this.post(`/search/salutation`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalutationListSearchResponse;

    throw new ShopwareError("Failed to search for salutations", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSalutation(id: string, query?: Criteria): Promise<SalutationSingleResponse> {
    const response = await this.get(`/salutation/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalutationSingleResponse;

    throw new ShopwareError("Failed to fetch salutation", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteSalutation(id: string): Promise<void> {
    const response = await this.delete(`/salutation/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete salutation", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateSalutation(
    id: string,
    request: SalutationUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<SalutationUpdateResponse> {
    const response = await this.patch(`/salutation/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as SalutationUpdateResponse;

    throw new ShopwareError("Failed to update salutation", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getSalutationAggregate(
    request: SalutationAggregationRequest
  ): Promise<SalutationAggregationResponse> {
    const response = await this.post(`/aggregate/salutation`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as SalutationAggregationResponse;

    throw new ShopwareError("Failed to aggregate salutation", response);
  }
}

export default SalutationClient;
