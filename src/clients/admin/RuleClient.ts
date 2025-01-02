import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import {
  ConditionAggregationRequest,
  ConditionAggregationResponse,
  ConditionCreateRequest,
  ConditionCreateResponse,
  ConditionListResponse,
  ConditionListSearchRequest,
  ConditionListSearchResponse,
  ConditionSingleResponse,
  ConditionUpdateRequest,
  ConditionUpdateResponse,
  RuleAggregationRequest,
  RuleAggregationResponse,
  RuleCreateRequest,
  RuleCreateResponse,
  RuleListResponse,
  RuleListSearchRequest,
  RuleListSearchResponse,
  RuleSingleResponse,
  RuleUpdateRequest,
  RuleUpdateResponse
} from "#types/clients/admin/RuleClient";

class RuleClient extends Client {
  /** Rules **/

  /**
   * @throws {Error} if the request failed
   */
  public async getRules(limit?: number, page?: number, query?: string): Promise<RuleListResponse> {
    const response = await this.get(`/rule`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as RuleListResponse;

    throw new Error(`Failed to fetch rule list: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createRule(
    request: RuleCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<RuleCreateResponse> {
    const response = await this.post(`/rule`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleCreateResponse;

    throw new Error(`Failed to create rule: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchRules(request: RuleListSearchRequest): Promise<RuleListSearchResponse> {
    const response = await this.get(`/search/rule`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleListSearchResponse;

    throw new Error(`Failed to search for rules: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getRule(id: string): Promise<RuleSingleResponse> {
    const response = await this.get(`/rule/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleSingleResponse;

    throw new Error(`Failed to fetch rule: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteRule(id: string): Promise<void> {
    const response = await this.delete(`/rule/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete rule: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateRule(
    id: string,
    request: RuleUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<RuleUpdateResponse> {
    const response = await this.patch(`/rule/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleUpdateResponse;

    throw new Error(`Failed to update rule: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getRuleAggregate(request: RuleAggregationRequest): Promise<RuleAggregationResponse> {
    const response = await this.post(`/aggregate/rule`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleAggregationResponse;

    throw new Error(`Failed to aggregate rule: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Conditions **/

  /**
   * @throws {Error} if the request failed
   */
  public async getConditions(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ConditionListResponse> {
    const response = await this.get(`/rule-condition`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConditionListResponse;

    throw new Error(
      `Failed to fetch condition list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCondition(
    request: ConditionCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ConditionCreateResponse> {
    const response = await this.post(`/rule-condition`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConditionCreateResponse;

    throw new Error(`Failed to create condition: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchConditions(
    request: ConditionListSearchRequest
  ): Promise<ConditionListSearchResponse> {
    const response = await this.get(`/search/rule-condition`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConditionListSearchResponse;

    throw new Error(
      `Failed to search for conditions: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCondition(id: string): Promise<ConditionSingleResponse> {
    const response = await this.get(`/rule-condition/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConditionSingleResponse;

    throw new Error(`Failed to fetch condition: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCondition(id: string): Promise<void> {
    const response = await this.delete(`/rule-condition/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete condition: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCondition(
    id: string,
    request: ConditionUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ConditionUpdateResponse> {
    const response = await this.patch(`/rule-condition/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConditionUpdateResponse;

    throw new Error(`Failed to update condition: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getConditionAggregate(
    request: ConditionAggregationRequest
  ): Promise<ConditionAggregationResponse> {
    const response = await this.post(`/aggregate/rule-condition`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConditionAggregationResponse;

    throw new Error(
      `Failed to aggregate condition: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default RuleClient;
