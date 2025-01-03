import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
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
  public async getRules(query?: Criteria): Promise<RuleListResponse> {
    const response = await this.get(`/rule` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as RuleListResponse;

    throw new ShopwareError("Failed to fetch rule list", response);
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

    throw new ShopwareError("Failed to create rule", response);
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

    throw new ShopwareError("Failed to search for rules", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getRule(id: string, query?: Criteria): Promise<RuleSingleResponse> {
    const response = await this.get(`/rule/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleSingleResponse;

    throw new ShopwareError("Failed to fetch rule", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteRule(id: string): Promise<void> {
    const response = await this.delete(`/rule/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete rule", response);
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

    throw new ShopwareError("Failed to update rule", response);
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

    throw new ShopwareError("Failed to aggregate rule", response);
  }

  /** Conditions **/

  /**
   * @throws {Error} if the request failed
   */
  public async getConditions(query?: Criteria): Promise<ConditionListResponse> {
    const response = await this.get(`/rule-condition` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConditionListResponse;

    throw new ShopwareError("Failed to fetch condition list", response);
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

    throw new ShopwareError("Failed to create condition", response);
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

    throw new ShopwareError("Failed to search for conditions", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCondition(id: string, query?: Criteria): Promise<ConditionSingleResponse> {
    const response = await this.get(`/rule-condition/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ConditionSingleResponse;

    throw new ShopwareError("Failed to fetch condition", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCondition(id: string): Promise<void> {
    const response = await this.delete(`/rule-condition/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete condition", response);
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

    throw new ShopwareError("Failed to update condition", response);
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

    throw new ShopwareError("Failed to aggregate condition", response);
  }
}

export default RuleClient;
