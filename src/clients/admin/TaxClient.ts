import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
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
  public async getTaxes(limit?: number, page?: number, query?: string): Promise<TaxListResponse> {
    const response = await this.get(`/tax`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as TaxListResponse;

    throw new Error(`Failed to fetch tax list: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to create tax: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to search for taxes: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTax(id: string): Promise<TaxSingleResponse> {
    const response = await this.get(`/tax/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TaxSingleResponse;

    throw new Error(`Failed to fetch tax: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTax(id: string): Promise<void> {
    const response = await this.delete(`/tax/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete tax: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update tax: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to aggregate tax: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Providers **/

  /**
   * @throws {Error} if the request failed
   */
  public async getProviders(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ProviderListResponse> {
    const response = await this.get(`/tax-provider`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProviderListResponse;

    throw new Error(
      `Failed to fetch provider list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(`Failed to create provider: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to search for providers: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getProvider(id: string): Promise<ProviderSingleResponse> {
    const response = await this.get(`/tax-provider/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ProviderSingleResponse;

    throw new Error(`Failed to fetch provider: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteProvider(id: string): Promise<void> {
    const response = await this.delete(`/tax-provider/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete provider: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update provider: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to aggregate provider: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Rules **/

  /**
   * @throws {Error} if the request failed
   */
  public async getRules(limit?: number, page?: number, query?: string): Promise<RuleListResponse> {
    const response = await this.get(`/tax-rule`, {
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
    const response = await this.post(`/tax-rule`, {
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
    const response = await this.get(`/search/tax-rule`, {
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
    const response = await this.get(`/tax-rule/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleSingleResponse;

    throw new Error(`Failed to fetch rule: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteRule(id: string): Promise<void> {
    const response = await this.delete(`/tax-rule/${id}`);

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
    const response = await this.patch(`/tax-rule/${id}`, {
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
    const response = await this.post(`/aggregate/tax-rule`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleAggregationResponse;

    throw new Error(`Failed to aggregate rule: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Rule Types **/

  /**
   * @throws {Error} if the request failed
   */
  public async getRuleTypes(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<RuleTypeListResponse> {
    const response = await this.get(`/tax-rule-type`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleTypeListResponse;

    throw new Error(
      `Failed to fetch rule type list: ${response.statusCode} ${response.statusMessage}`
    );
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

    throw new Error(`Failed to create rule type: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to search for rule types: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getRuleType(id: string): Promise<RuleTypeSingleResponse> {
    const response = await this.get(`/tax-rule-type/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as RuleTypeSingleResponse;

    throw new Error(`Failed to fetch rule type: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteRuleType(id: string): Promise<void> {
    const response = await this.delete(`/tax-rule-type/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete rule type: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(`Failed to update rule type: ${response.statusCode} ${response.statusMessage}`);
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

    throw new Error(
      `Failed to aggregate rule type: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default TaxClient;
