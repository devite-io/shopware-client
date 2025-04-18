import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  FlowAggregationRequest,
  FlowAggregationResponse,
  FlowCreateRequest,
  FlowCreateResponse,
  FlowListResponse,
  FlowListSearchRequest,
  FlowListSearchResponse,
  FlowSequenceAggregationRequest,
  FlowSequenceAggregationResponse,
  FlowSequenceCreateRequest,
  FlowSequenceCreateResponse,
  FlowSequenceListResponse,
  FlowSequenceListSearchRequest,
  FlowSequenceListSearchResponse,
  FlowSequenceSingleResponse,
  FlowSequenceUpdateRequest,
  FlowSequenceUpdateResponse,
  FlowSingleResponse,
  FlowTemplateAggregationRequest,
  FlowTemplateAggregationResponse,
  FlowTemplateCreateRequest,
  FlowTemplateCreateResponse,
  FlowTemplateListResponse,
  FlowTemplateListSearchRequest,
  FlowTemplateListSearchResponse,
  FlowTemplateSingleResponse,
  FlowTemplateUpdateRequest,
  FlowTemplateUpdateResponse,
  FlowUpdateRequest,
  FlowUpdateResponse
} from "#types/clients/admin/FlowClient";

class FlowClient extends Client {
  /** Flows **/

  /**
   * Requires `flow:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getFlows(query?: Criteria): Promise<FlowListResponse> {
    const response = await this.get(`/flow` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as FlowListResponse;

    throw new ShopwareError("Failed to fetch flow list", response);
  }

  /**
   * Requires `flow:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createFlow(
    request: FlowCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FlowCreateResponse> {
    const response = await this.post(`/flow`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as FlowCreateResponse;

    throw new ShopwareError("Failed to create flow", response);
  }

  /**
   * Requires `flow:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchFlows(request: FlowListSearchRequest): Promise<FlowListSearchResponse> {
    const response = await this.post(`/search/flow`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowListSearchResponse;

    throw new ShopwareError("Failed to search for flows", response);
  }

  /**
   * Requires `flow:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getFlow(id: string, query?: Criteria): Promise<FlowSingleResponse> {
    const response = await this.get(`/flow/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowSingleResponse;

    throw new ShopwareError("Failed to fetch flow", response);
  }

  /**
   * Requires `flow:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteFlow(id: string): Promise<void> {
    const response = await this.delete(`/flow/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete flow", response);
  }

  /**
   * Requires `flow:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateFlow(
    id: string,
    request: FlowUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FlowUpdateResponse> {
    const response = await this.patch(`/flow/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as FlowUpdateResponse;

    throw new ShopwareError("Failed to update flow", response);
  }

  /**
   * Requires `flow:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getFlowAggregate(request: FlowAggregationRequest): Promise<FlowAggregationResponse> {
    const response = await this.post(`/aggregate/flow`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowAggregationResponse;

    throw new ShopwareError("Failed to aggregate flow", response);
  }

  /** Flow Sequences **/

  /**
   * Requires `flow-sequence:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getFlowSequences(query?: Criteria): Promise<FlowSequenceListResponse> {
    const response = await this.get(`/flow-sequence` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowSequenceListResponse;

    throw new ShopwareError("Failed to fetch flow sequence list", response);
  }

  /**
   * Requires `flow-sequence:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createFlowSequence(
    request: FlowSequenceCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FlowSequenceCreateResponse> {
    const response = await this.post(`/flow-sequence`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as FlowSequenceCreateResponse;

    throw new ShopwareError("Failed to create flow sequence", response);
  }

  /**
   * Requires `flow-sequence:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchFlowSequences(
    request: FlowSequenceListSearchRequest
  ): Promise<FlowSequenceListSearchResponse> {
    const response = await this.post(`/search/flow-sequence`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowSequenceListSearchResponse;

    throw new ShopwareError("Failed to search for flow sequences", response);
  }

  /**
   * Requires `flow-sequence:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getFlowSequence(id: string, query?: Criteria): Promise<FlowSequenceSingleResponse> {
    const response = await this.get(`/flow-sequence/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowSequenceSingleResponse;

    throw new ShopwareError("Failed to fetch flow sequence", response);
  }

  /**
   * Requires `flow-sequence:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteFlowSequence(id: string): Promise<void> {
    const response = await this.delete(`/flow-sequence/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete flow sequence", response);
  }

  /**
   * Requires `flow-sequence:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateFlowSequence(
    id: string,
    request: FlowSequenceUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FlowSequenceUpdateResponse> {
    const response = await this.patch(`/flow-sequence/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as FlowSequenceUpdateResponse;

    throw new ShopwareError("Failed to update flow sequence", response);
  }

  /**
   * Requires `flow-sequence:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getFlowSequenceAggregate(
    request: FlowSequenceAggregationRequest
  ): Promise<FlowSequenceAggregationResponse> {
    const response = await this.post(`/aggregate/flow-sequence`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowSequenceAggregationResponse;

    throw new ShopwareError("Failed to aggregate flow sequence", response);
  }

  /** Flow Templates **/

  /**
   * Requires `flow-template:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getFlowTemplates(query?: Criteria): Promise<FlowTemplateListResponse> {
    const response = await this.get(`/flow-template` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowTemplateListResponse;

    throw new ShopwareError("Failed to fetch flow template list", response);
  }

  /**
   * Requires `flow-template:create` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createFlowTemplate(
    request: FlowTemplateCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FlowTemplateCreateResponse> {
    const response = await this.post(`/flow-template`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as FlowTemplateCreateResponse;

    throw new ShopwareError("Failed to create flow template", response);
  }

  /**
   * Requires `flow-template:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchFlowTemplates(
    request: FlowTemplateListSearchRequest
  ): Promise<FlowTemplateListSearchResponse> {
    const response = await this.post(`/search/flow-template`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowTemplateListSearchResponse;

    throw new ShopwareError("Failed to search for flow templates", response);
  }

  /**
   * Requires `flow-template:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getFlowTemplate(id: string, query?: Criteria): Promise<FlowTemplateSingleResponse> {
    const response = await this.get(`/flow-template/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowTemplateSingleResponse;

    throw new ShopwareError("Failed to fetch flow template", response);
  }

  /**
   * Requires `flow-template:delete` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteFlowTemplate(id: string): Promise<void> {
    const response = await this.delete(`/flow-template/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete flow template", response);
  }

  /**
   * Requires `flow-template:update` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateFlowTemplate(
    id: string,
    request: FlowTemplateUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FlowTemplateUpdateResponse> {
    const response = await this.patch(`/flow-template/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as FlowTemplateUpdateResponse;

    throw new ShopwareError("Failed to update flow template", response);
  }

  /**
   * Requires `flow-template:read` permission.
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getFlowTemplateAggregate(
    request: FlowTemplateAggregationRequest
  ): Promise<FlowTemplateAggregationResponse> {
    const response = await this.post(`/aggregate/flow-template`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowTemplateAggregationResponse;

    throw new ShopwareError("Failed to aggregate flow template", response);
  }
}

export default FlowClient;
