import JsonPayload from "#payloads/JsonPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
import {
  ProviderAggregationRequest,
  ProviderAggregationResponse,
  ProviderCreateRequest,
  ProviderCreateResponse,
  ProviderListResponse,
  ProviderListSearchRequest,
  ProviderListSearchResponse,
  ProviderSingleResponse,
  ProviderUpdateRequest,
  ProviderUpdateResponse,
  RuleAggregationRequest,
  RuleAggregationResponse,
  RuleCreateRequest,
  RuleCreateResponse,
  RuleListResponse,
  RuleListSearchRequest,
  RuleListSearchResponse,
  RuleSingleResponse,
  RuleTypeAggregationRequest,
  RuleTypeAggregationResponse,
  RuleTypeCreateRequest,
  RuleTypeCreateResponse,
  RuleTypeListResponse,
  RuleTypeListSearchRequest,
  RuleTypeListSearchResponse,
  RuleTypeSingleResponse,
  RuleTypeUpdateRequest,
  RuleTypeUpdateResponse,
  RuleUpdateRequest,
  RuleUpdateResponse,
  TaxAggregationRequest,
  TaxAggregationResponse,
  TaxCreateRequest,
  TaxCreateResponse,
  TaxListResponse,
  TaxListSearchRequest,
  TaxListSearchResponse,
  TaxSingleResponse,
  TaxUpdateRequest,
  TaxUpdateResponse
} from "#types/clients/admin/TaxClient";

class TaxClient extends Client {
  /** Taxes **/

  /**
   * @throws {Error} if the request failed
   */
  public async getTaxes(query?: Criteria): Promise<TaxListResponse> {
    const response = await this.get(`/tax` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as TaxListResponse;

    throw new ShopwareError("Failed to fetch tax list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createTax(
    request: TaxCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TaxCreateResponse> {
    const response = await this.post(`/tax`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TaxCreateResponse;

    throw new ShopwareError("Failed to create tax", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchTaxes(request: TaxListSearchRequest): Promise<TaxListSearchResponse> {
    const response = await this.get(`/search/tax`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TaxListSearchResponse;

    throw new ShopwareError("Failed to search for taxes", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTax(id: string, query?: Criteria): Promise<TaxSingleResponse> {
    const response = await this.get(`/tax/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TaxSingleResponse;

    throw new ShopwareError("Failed to fetch tax", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTax(id: string): Promise<void> {
    const response = await this.delete(`/tax/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete tax", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateTax(
    id: string,
    request: TaxUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TaxUpdateResponse> {
    const response = await this.patch(`/tax/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TaxUpdateResponse;

    throw new ShopwareError("Failed to update tax", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTaxAggregate(request: TaxAggregationRequest): Promise<TaxAggregationResponse> {
    const response = await this.post(`/aggregate/tax`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TaxAggregationResponse;

    throw new ShopwareError("Failed to aggregate tax", response);
  }

  /** Providers **/

  /**
   * @throws {Error} if the request failed
   */
  public async getProviders(query?: Criteria): Promise<ProviderListResponse> {
    const response = await this.get(`/tax-provider` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProviderListResponse;

    throw new ShopwareError("Failed to fetch provider list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createProvider(
    request: ProviderCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ProviderCreateResponse> {
    const response = await this.post(`/tax-provider`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProviderCreateResponse;

    throw new ShopwareError("Failed to create provider", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchProviders(
    request: ProviderListSearchRequest
  ): Promise<ProviderListSearchResponse> {
    const response = await this.get(`/search/tax-provider`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProviderListSearchResponse;

    throw new ShopwareError("Failed to search for providers", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getProvider(id: string, query?: Criteria): Promise<ProviderSingleResponse> {
    const response = await this.get(`/tax-provider/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProviderSingleResponse;

    throw new ShopwareError("Failed to fetch provider", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteProvider(id: string): Promise<void> {
    const response = await this.delete(`/tax-provider/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete provider", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateProvider(
    id: string,
    request: ProviderUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ProviderUpdateResponse> {
    const response = await this.patch(`/tax-provider/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProviderUpdateResponse;

    throw new ShopwareError("Failed to update provider", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getProviderAggregate(
    request: ProviderAggregationRequest
  ): Promise<ProviderAggregationResponse> {
    const response = await this.post(`/aggregate/tax-provider`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProviderAggregationResponse;

    throw new ShopwareError("Failed to aggregate provider", response);
  }

  /** Rules **/

  /**
   * @throws {Error} if the request failed
   */
  public async getRules(query?: Criteria): Promise<RuleListResponse> {
    const response = await this.get(`/tax-rule` + buildQuery(query), {
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
    const response = await this.post(`/tax-rule`, {
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
    const response = await this.get(`/search/tax-rule`, {
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
    const response = await this.get(`/tax-rule/${id}` + buildQuery(query), {
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
    const response = await this.delete(`/tax-rule/${id}`);

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
    const response = await this.patch(`/tax-rule/${id}`, {
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
    const response = await this.post(`/aggregate/tax-rule`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleAggregationResponse;

    throw new ShopwareError("Failed to aggregate rule", response);
  }

  /** Rule Types **/

  /**
   * @throws {Error} if the request failed
   */
  public async getRuleTypes(query?: Criteria): Promise<RuleTypeListResponse> {
    const response = await this.get(`/tax-rule-type` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleTypeListResponse;

    throw new ShopwareError("Failed to fetch rule type list", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createRuleType(
    request: RuleTypeCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<RuleTypeCreateResponse> {
    const response = await this.post(`/tax-rule-type`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleTypeCreateResponse;

    throw new ShopwareError("Failed to create rule type", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchRuleTypes(
    request: RuleTypeListSearchRequest
  ): Promise<RuleTypeListSearchResponse> {
    const response = await this.get(`/search/tax-rule-type`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleTypeListSearchResponse;

    throw new ShopwareError("Failed to search for rule types", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getRuleType(id: string, query?: Criteria): Promise<RuleTypeSingleResponse> {
    const response = await this.get(`/tax-rule-type/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleTypeSingleResponse;

    throw new ShopwareError("Failed to fetch rule type", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteRuleType(id: string): Promise<void> {
    const response = await this.delete(`/tax-rule-type/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete rule type", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateRuleType(
    id: string,
    request: RuleTypeUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<RuleTypeUpdateResponse> {
    const response = await this.patch(`/tax-rule-type/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleTypeUpdateResponse;

    throw new ShopwareError("Failed to update rule type", response);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getRuleTypeAggregate(
    request: RuleTypeAggregationRequest
  ): Promise<RuleTypeAggregationResponse> {
    const response = await this.post(`/aggregate/tax-rule-type`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleTypeAggregationResponse;

    throw new ShopwareError("Failed to aggregate rule type", response);
  }
}

export default TaxClient;
