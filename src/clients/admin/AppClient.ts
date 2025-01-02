import JsonPayload from "#payloads/JsonPayload";
import Client from "#clients/Client";
import {
  ActionButtonAggregationRequest,
  ActionButtonAggregationResponse,
  ActionButtonCreateRequest,
  ActionButtonCreateResponse,
  ActionButtonListResponse,
  ActionButtonListSearchRequest,
  ActionButtonListSearchResponse,
  ActionButtonSingleResponse,
  ActionButtonUpdateRequest,
  ActionButtonUpdateResponse,
  AdminSnippetAggregationRequest,
  AdminSnippetAggregationResponse,
  AdminSnippetCreateRequest,
  AdminSnippetCreateResponse,
  AdminSnippetListResponse,
  AdminSnippetListSearchRequest,
  AdminSnippetListSearchResponse,
  AdminSnippetSingleResponse,
  AdminSnippetUpdateRequest,
  AdminSnippetUpdateResponse,
  AppAggregationRequest,
  AppAggregationResponse,
  AppCreateRequest,
  AppCreateResponse,
  AppListResponse,
  AppListSearchRequest,
  AppListSearchResponse,
  AppSingleResponse,
  AppUpdateRequest,
  AppUpdateResponse,
  CmsBlockAggregationRequest,
  CmsBlockAggregationResponse,
  CmsBlockCreateRequest,
  CmsBlockCreateResponse,
  CmsBlockListResponse,
  CmsBlockListSearchRequest,
  CmsBlockListSearchResponse,
  CmsBlockSingleResponse,
  CmsBlockUpdateRequest,
  CmsBlockUpdateResponse,
  FlowActionAggregationRequest,
  FlowActionAggregationResponse,
  FlowActionCreateRequest,
  FlowActionCreateResponse,
  FlowActionListResponse,
  FlowActionListSearchRequest,
  FlowActionListSearchResponse,
  FlowActionSingleResponse,
  FlowActionUpdateRequest,
  FlowActionUpdateResponse,
  FlowEventAggregationRequest,
  FlowEventAggregationResponse,
  FlowEventCreateRequest,
  FlowEventCreateResponse,
  FlowEventListResponse,
  FlowEventListSearchRequest,
  FlowEventListSearchResponse,
  FlowEventSingleResponse,
  FlowEventUpdateRequest,
  FlowEventUpdateResponse,
  PaymentMethodAggregationRequest,
  PaymentMethodAggregationResponse,
  PaymentMethodCreateRequest,
  PaymentMethodCreateResponse,
  PaymentMethodListResponse,
  PaymentMethodListSearchRequest,
  PaymentMethodListSearchResponse,
  PaymentMethodSingleResponse,
  PaymentMethodUpdateRequest,
  PaymentMethodUpdateResponse,
  ScriptConditionAggregationRequest,
  ScriptConditionAggregationResponse,
  ScriptConditionCreateRequest,
  ScriptConditionCreateResponse,
  ScriptConditionListResponse,
  ScriptConditionListSearchRequest,
  ScriptConditionListSearchResponse,
  ScriptConditionSingleResponse,
  ScriptConditionUpdateRequest,
  ScriptConditionUpdateResponse,
  ShippingMethodAggregationRequest,
  ShippingMethodAggregationResponse,
  ShippingMethodCreateRequest,
  ShippingMethodCreateResponse,
  ShippingMethodListResponse,
  ShippingMethodListSearchRequest,
  ShippingMethodListSearchResponse,
  ShippingMethodSingleResponse,
  ShippingMethodUpdateRequest,
  ShippingMethodUpdateResponse,
  TemplateAggregationRequest,
  TemplateAggregationResponse,
  TemplateCreateRequest,
  TemplateCreateResponse,
  TemplateListResponse,
  TemplateListSearchRequest,
  TemplateListSearchResponse,
  TemplateSingleResponse,
  TemplateUpdateRequest,
  TemplateUpdateResponse
} from "#types/clients/admin/AppClient";

class AppClient extends Client {
  /** Apps **/

  /**
   * @throws {Error} if the request failed
   */
  public async getApps(limit?: number, page?: number, query?: string): Promise<AppListResponse> {
    const response = await this.get(`/app`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as AppListResponse;

    throw new Error(`Failed to fetch app list: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createApp(
    request: AppCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AppCreateResponse> {
    const response = await this.post(`/app`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AppCreateResponse;

    throw new Error(`Failed to create app: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchApps(request: AppListSearchRequest): Promise<AppListSearchResponse> {
    const response = await this.get(`/search/app`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AppListSearchResponse;

    throw new Error(`Failed to search for apps: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getApp(id: string): Promise<AppSingleResponse> {
    const response = await this.get(`/app/${id}`, { headers: { Accept: "application/json" } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AppSingleResponse;

    throw new Error(`Failed to fetch app: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteApp(id: string): Promise<void> {
    const response = await this.delete(`/app/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete app: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateApp(
    id: string,
    request: AppUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AppUpdateResponse> {
    const response = await this.patch(`/app/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AppUpdateResponse;

    throw new Error(`Failed to update app: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getAppAggregate(request: AppAggregationRequest): Promise<AppAggregationResponse> {
    const response = await this.post(`/aggregate/app`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AppAggregationResponse;

    throw new Error(`Failed to aggregate app: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Action Buttons **/

  /**
   * @throws {Error} if the request failed
   */
  public async getActionButtons(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ActionButtonListResponse> {
    const response = await this.get(`/app-action-button`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ActionButtonListResponse;

    throw new Error(
      `Failed to fetch action button list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createActionButton(
    request: ActionButtonCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ActionButtonCreateResponse> {
    const response = await this.post(`/app-action-button`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ActionButtonCreateResponse;

    throw new Error(`Failed to create app: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchActionButtons(
    request: ActionButtonListSearchRequest
  ): Promise<ActionButtonListSearchResponse> {
    const response = await this.get(`/search/app-action-button`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ActionButtonListSearchResponse;

    throw new Error(
      `Failed to search for action buttons: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getActionButton(id: string): Promise<ActionButtonSingleResponse> {
    const response = await this.get(`/app-action-button/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ActionButtonSingleResponse;

    throw new Error(
      `Failed to fetch action button: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteActionButton(id: string): Promise<void> {
    const response = await this.delete(`/app-action-button/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete action button: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateActionButton(
    id: string,
    request: ActionButtonUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ActionButtonUpdateResponse> {
    const response = await this.patch(`/app-action-button/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ActionButtonUpdateResponse;

    throw new Error(
      `Failed to update action button: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getActionButtonAggregate(
    request: ActionButtonAggregationRequest
  ): Promise<ActionButtonAggregationResponse> {
    const response = await this.post(`/aggregate/app-action-button`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ActionButtonAggregationResponse;

    throw new Error(
      `Failed to aggregate action button: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Admin Snippets **/

  /**
   * @throws {Error} if the request failed
   */
  public async getAdminSnippets(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<AdminSnippetListResponse> {
    const response = await this.get(`/app-administration-snippet`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AdminSnippetListResponse;

    throw new Error(
      `Failed to fetch administration snippet list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createAdminSnippet(
    request: AdminSnippetCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AdminSnippetCreateResponse> {
    const response = await this.post(`/app-administration-snippet`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AdminSnippetCreateResponse;

    throw new Error(`Failed to create app: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchAdminSnippets(
    request: AdminSnippetListSearchRequest
  ): Promise<AdminSnippetListSearchResponse> {
    const response = await this.get(`/search/app-administration-snippet`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AdminSnippetListSearchResponse;

    throw new Error(
      `Failed to search for administration snippets: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getAdminSnippet(id: string): Promise<AdminSnippetSingleResponse> {
    const response = await this.get(`/app-administration-snippet/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AdminSnippetSingleResponse;

    throw new Error(
      `Failed to fetch administration snippet: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteAdminSnippet(id: string): Promise<void> {
    const response = await this.delete(`/app-administration-snippet/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete administration snippet: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateAdminSnippet(
    id: string,
    request: AdminSnippetUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<AdminSnippetUpdateResponse> {
    const response = await this.patch(`/app-administration-snippet/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AdminSnippetUpdateResponse;

    throw new Error(
      `Failed to update administration snippet: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getAdminSnippetAggregate(
    request: AdminSnippetAggregationRequest
  ): Promise<AdminSnippetAggregationResponse> {
    const response = await this.post(`/aggregate/app-administration-snippet`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as AdminSnippetAggregationResponse;

    throw new Error(
      `Failed to aggregate administration snippet: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Cms Blocks **/

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsBlocks(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<CmsBlockListResponse> {
    const response = await this.get(`/app-cms-block`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsBlockListResponse;

    throw new Error(
      `Failed to fetch cms block list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createCmsBlock(
    request: CmsBlockCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CmsBlockCreateResponse> {
    const response = await this.post(`/app-cms-block`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsBlockCreateResponse;

    throw new Error(`Failed to create app: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchCmsBlocks(
    request: CmsBlockListSearchRequest
  ): Promise<CmsBlockListSearchResponse> {
    const response = await this.get(`/search/app-cms-block`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsBlockListSearchResponse;

    throw new Error(
      `Failed to search for cms blocks: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsBlock(id: string): Promise<CmsBlockSingleResponse> {
    const response = await this.get(`/app-cms-block/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsBlockSingleResponse;

    throw new Error(`Failed to fetch cms block: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteCmsBlock(id: string): Promise<void> {
    const response = await this.delete(`/app-cms-block/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete cms block: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateCmsBlock(
    id: string,
    request: CmsBlockUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<CmsBlockUpdateResponse> {
    const response = await this.patch(`/app-cms-block/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsBlockUpdateResponse;

    throw new Error(`Failed to update cms block: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getCmsBlockAggregate(
    request: CmsBlockAggregationRequest
  ): Promise<CmsBlockAggregationResponse> {
    const response = await this.post(`/aggregate/app-cms-block`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as CmsBlockAggregationResponse;

    throw new Error(
      `Failed to aggregate cms block: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Flow Actions **/

  /**
   * @throws {Error} if the request failed
   */
  public async getFlowActions(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<FlowActionListResponse> {
    const response = await this.get(`/app-flow-action`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowActionListResponse;

    throw new Error(
      `Failed to fetch flow action list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createFlowAction(
    request: FlowActionCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FlowActionCreateResponse> {
    const response = await this.post(`/app-flow-action`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowActionCreateResponse;

    throw new Error(`Failed to create app: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchFlowActions(
    request: FlowActionListSearchRequest
  ): Promise<FlowActionListSearchResponse> {
    const response = await this.get(`/search/app-flow-action`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowActionListSearchResponse;

    throw new Error(
      `Failed to search for flow actions: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFlowAction(id: string): Promise<FlowActionSingleResponse> {
    const response = await this.get(`/app-flow-action/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowActionSingleResponse;

    throw new Error(
      `Failed to fetch flow action: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteFlowAction(id: string): Promise<void> {
    const response = await this.delete(`/app-flow-action/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete flow action: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateFlowAction(
    id: string,
    request: FlowActionUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FlowActionUpdateResponse> {
    const response = await this.patch(`/app-flow-action/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowActionUpdateResponse;

    throw new Error(
      `Failed to update flow action: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFlowActionAggregate(
    request: FlowActionAggregationRequest
  ): Promise<FlowActionAggregationResponse> {
    const response = await this.post(`/aggregate/app-flow-action`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowActionAggregationResponse;

    throw new Error(
      `Failed to aggregate flow action: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Flow Events **/

  /**
   * @throws {Error} if the request failed
   */
  public async getFlowEvents(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<FlowEventListResponse> {
    const response = await this.get(`/app-flow-event`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowEventListResponse;

    throw new Error(
      `Failed to fetch flow event list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createFlowEvent(
    request: FlowEventCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FlowEventCreateResponse> {
    const response = await this.post(`/app-flow-event`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowEventCreateResponse;

    throw new Error(`Failed to create app: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchFlowEvents(
    request: FlowEventListSearchRequest
  ): Promise<FlowEventListSearchResponse> {
    const response = await this.get(`/search/app-flow-event`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowEventListSearchResponse;

    throw new Error(
      `Failed to search for flow events: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFlowEvent(id: string): Promise<FlowEventSingleResponse> {
    const response = await this.get(`/app-flow-event/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowEventSingleResponse;

    throw new Error(`Failed to fetch flow event: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteFlowEvent(id: string): Promise<void> {
    const response = await this.delete(`/app-flow-event/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete flow event: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateFlowEvent(
    id: string,
    request: FlowEventUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<FlowEventUpdateResponse> {
    const response = await this.patch(`/app-flow-event/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowEventUpdateResponse;

    throw new Error(
      `Failed to update flow event: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getFlowEventAggregate(
    request: FlowEventAggregationRequest
  ): Promise<FlowEventAggregationResponse> {
    const response = await this.post(`/aggregate/app-flow-event`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as FlowEventAggregationResponse;

    throw new Error(
      `Failed to aggregate flow event: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Payment Methods **/

  /**
   * @throws {Error} if the request failed
   */
  public async getPaymentMethods(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<PaymentMethodListResponse> {
    const response = await this.get(`/app-payment-method`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodListResponse;

    throw new Error(
      `Failed to fetch payment method list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createPaymentMethod(
    request: PaymentMethodCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PaymentMethodCreateResponse> {
    const response = await this.post(`/app-payment-method`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodCreateResponse;

    throw new Error(`Failed to create app: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchPaymentMethods(
    request: PaymentMethodListSearchRequest
  ): Promise<PaymentMethodListSearchResponse> {
    const response = await this.get(`/search/app-payment-method`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodListSearchResponse;

    throw new Error(
      `Failed to search for payment methods: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPaymentMethod(id: string): Promise<PaymentMethodSingleResponse> {
    const response = await this.get(`/app-payment-method/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodSingleResponse;

    throw new Error(
      `Failed to fetch payment method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deletePaymentMethod(id: string): Promise<void> {
    const response = await this.delete(`/app-payment-method/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete payment method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updatePaymentMethod(
    id: string,
    request: PaymentMethodUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<PaymentMethodUpdateResponse> {
    const response = await this.patch(`/app-payment-method/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodUpdateResponse;

    throw new Error(
      `Failed to update payment method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getPaymentMethodAggregate(
    request: PaymentMethodAggregationRequest
  ): Promise<PaymentMethodAggregationResponse> {
    const response = await this.post(`/aggregate/app-payment-method`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as PaymentMethodAggregationResponse;

    throw new Error(
      `Failed to aggregate payment method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Script Conditions **/

  /**
   * @throws {Error} if the request failed
   */
  public async getScriptConditions(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ScriptConditionListResponse> {
    const response = await this.get(`/app-script-condition`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptConditionListResponse;

    throw new Error(
      `Failed to fetch script condition list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createScriptCondition(
    request: ScriptConditionCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ScriptConditionCreateResponse> {
    const response = await this.post(`/app-script-condition`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptConditionCreateResponse;

    throw new Error(`Failed to create app: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchScriptConditions(
    request: ScriptConditionListSearchRequest
  ): Promise<ScriptConditionListSearchResponse> {
    const response = await this.get(`/search/app-script-condition`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptConditionListSearchResponse;

    throw new Error(
      `Failed to search for script conditions: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getScriptCondition(id: string): Promise<ScriptConditionSingleResponse> {
    const response = await this.get(`/app-script-condition/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptConditionSingleResponse;

    throw new Error(
      `Failed to fetch script condition: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteScriptCondition(id: string): Promise<void> {
    const response = await this.delete(`/app-script-condition/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete script condition: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateScriptCondition(
    id: string,
    request: ScriptConditionUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ScriptConditionUpdateResponse> {
    const response = await this.patch(`/app-script-condition/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptConditionUpdateResponse;

    throw new Error(
      `Failed to update script condition: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getScriptConditionAggregate(
    request: ScriptConditionAggregationRequest
  ): Promise<ScriptConditionAggregationResponse> {
    const response = await this.post(`/aggregate/app-script-condition`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ScriptConditionAggregationResponse;

    throw new Error(
      `Failed to aggregate script condition: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Shipping Methods **/

  /**
   * @throws {Error} if the request failed
   */
  public async getShippingMethods(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<ShippingMethodListResponse> {
    const response = await this.get(`/app-shipping-method`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodListResponse;

    throw new Error(
      `Failed to fetch shipping method list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createShippingMethod(
    request: ShippingMethodCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ShippingMethodCreateResponse> {
    const response = await this.post(`/app-shipping-method`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodCreateResponse;

    throw new Error(`Failed to create app: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchShippingMethods(
    request: ShippingMethodListSearchRequest
  ): Promise<ShippingMethodListSearchResponse> {
    const response = await this.get(`/search/app-shipping-method`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodListSearchResponse;

    throw new Error(
      `Failed to search for shipping methods: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getShippingMethod(id: string): Promise<ShippingMethodSingleResponse> {
    const response = await this.get(`/app-shipping-method/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodSingleResponse;

    throw new Error(
      `Failed to fetch shipping method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteShippingMethod(id: string): Promise<void> {
    const response = await this.delete(`/app-shipping-method/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete shipping method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateShippingMethod(
    id: string,
    request: ShippingMethodUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<ShippingMethodUpdateResponse> {
    const response = await this.patch(`/app-shipping-method/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodUpdateResponse;

    throw new Error(
      `Failed to update shipping method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getShippingMethodAggregate(
    request: ShippingMethodAggregationRequest
  ): Promise<ShippingMethodAggregationResponse> {
    const response = await this.post(`/aggregate/app-shipping-method`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as ShippingMethodAggregationResponse;

    throw new Error(
      `Failed to aggregate shipping method: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Templates **/

  /**
   * @throws {Error} if the request failed
   */
  public async getTemplates(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<TemplateListResponse> {
    const response = await this.get(`/app-template`, {
      query: { limit, page, query },
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateListResponse;

    throw new Error(
      `Failed to fetch template list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createTemplate(
    request: TemplateCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TemplateCreateResponse> {
    const response = await this.post(`/app-template`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateCreateResponse;

    throw new Error(`Failed to create app: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchTemplates(
    request: TemplateListSearchRequest
  ): Promise<TemplateListSearchResponse> {
    const response = await this.get(`/search/app-template`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateListSearchResponse;

    throw new Error(
      `Failed to search for templates: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTemplate(id: string): Promise<TemplateSingleResponse> {
    const response = await this.get(`/app-template/${id}`, {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateSingleResponse;

    throw new Error(`Failed to fetch template: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTemplate(id: string): Promise<void> {
    const response = await this.delete(`/app-template/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(`Failed to delete template: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateTemplate(
    id: string,
    request: TemplateUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TemplateUpdateResponse> {
    const response = await this.patch(`/app-template/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateUpdateResponse;

    throw new Error(`Failed to update template: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTemplateAggregate(
    request: TemplateAggregationRequest
  ): Promise<TemplateAggregationResponse> {
    const response = await this.post(`/aggregate/app-template`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateAggregationResponse;

    throw new Error(
      `Failed to aggregate template: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default AppClient;