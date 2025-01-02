import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
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
   * @throws {Error} if the request failed
   */
  public async getFlows(limit?: number, page?: number, query?: string): Promise<FlowListResponse> {
    const response = await this.get(`/flow`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as FlowListResponse;

    throw new Error(`Failed to fetch flow list: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowCreateResponse;

    throw new Error(`Failed to create flow: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchFlows(request: FlowListSearchRequest): Promise<FlowListSearchResponse> {
    const response = await this.get(`/search/flow`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowListSearchResponse;

    throw new Error(`Failed to search for flows: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFlow(id: string): Promise<FlowSingleResponse> {
    const response = await this.get(`/flow/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowSingleResponse;

    throw new Error(`Failed to fetch flow: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteFlow(id: string): Promise<void> {
    const response = await this.delete(`/flow/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete flow: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowUpdateResponse;

    throw new Error(`Failed to update flow: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFlowAggregate(request: FlowAggregationRequest): Promise<FlowAggregationResponse> {
    const response = await this.post(`/aggregate/flow`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowAggregationResponse;

    throw new Error(`Failed to aggregate flow: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Flow Sequences **/

  /**
   * @throws {Error} if the request failed
   */
  public async getFlowSequences(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<FlowSequenceListResponse> {
    const response = await this.get(`/flow-sequence`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowSequenceListResponse;

    throw new Error(
      `Failed to fetch flow sequence list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowSequenceCreateResponse;

    throw new Error(
      `Failed to create flow sequence: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchFlowSequences(
    request: FlowSequenceListSearchRequest
  ): Promise<FlowSequenceListSearchResponse> {
    const response = await this.get(`/search/flow-sequence`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowSequenceListSearchResponse;

    throw new Error(
      `Failed to search for flow sequences: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFlowSequence(id: string): Promise<FlowSequenceSingleResponse> {
    const response = await this.get(`/flow-sequence/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowSequenceSingleResponse;

    throw new Error(
      `Failed to fetch flow sequence: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteFlowSequence(id: string): Promise<void> {
    const response = await this.delete(`/flow-sequence/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete flow sequence: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowSequenceUpdateResponse;

    throw new Error(
      `Failed to update flow sequence: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to aggregate flow sequence: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Flow Templates **/

  /**
   * @throws {Error} if the request failed
   */
  public async getFlowTemplates(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<FlowTemplateListResponse> {
    const response = await this.get(`/flow-template`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowTemplateListResponse;

    throw new Error(
      `Failed to fetch flow template list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowTemplateCreateResponse;

    throw new Error(
      `Failed to create flow template: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchFlowTemplates(
    request: FlowTemplateListSearchRequest
  ): Promise<FlowTemplateListSearchResponse> {
    const response = await this.get(`/search/flow-template`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowTemplateListSearchResponse;

    throw new Error(
      `Failed to search for flow templates: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFlowTemplate(id: string): Promise<FlowTemplateSingleResponse> {
    const response = await this.get(`/flow-template/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowTemplateSingleResponse;

    throw new Error(
      `Failed to fetch flow template: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteFlowTemplate(id: string): Promise<void> {
    const response = await this.delete(`/flow-template/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete flow template: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowTemplateUpdateResponse;

    throw new Error(
      `Failed to update flow template: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
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

    throw new Error(
      `Failed to aggregate flow template: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default FlowClient;
