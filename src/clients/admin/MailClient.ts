import JsonPayload from "#payloads/JsonPayload";
import HtmlPayload from "#payloads/HtmlPayload";
import Client from "#clients/Client";
import {
  ContentValidationRequest,
  HeaderFooterAggregationRequest,
  HeaderFooterAggregationResponse,
  HeaderFooterCreateRequest,
  HeaderFooterCreateResponse,
  HeaderFooterListResponse,
  HeaderFooterListSearchRequest,
  HeaderFooterListSearchResponse,
  HeaderFooterSingleResponse,
  HeaderFooterUpdateRequest,
  HeaderFooterUpdateResponse,
  MailSendRequest,
  MailSendResponse,
  TemplateAggregationRequest,
  TemplateAggregationResponse,
  TemplateCreateRequest,
  TemplateCreateResponse,
  TemplateListResponse,
  TemplateListSearchRequest,
  TemplateListSearchResponse,
  TemplatePreviewRequest,
  TemplatePreviewResponse,
  TemplateSingleResponse,
  TemplateTypeAggregationRequest,
  TemplateTypeAggregationResponse,
  TemplateTypeCreateRequest,
  TemplateTypeCreateResponse,
  TemplateTypeListResponse,
  TemplateTypeListSearchRequest,
  TemplateTypeListSearchResponse,
  TemplateTypeSingleResponse,
  TemplateTypeUpdateRequest,
  TemplateTypeUpdateResponse,
  TemplateUpdateRequest,
  TemplateUpdateResponse
} from "#types/clients/admin/MailClient";

class MailClient extends Client {
  /** Operations **/

  /**
   * @throws {Error} if the request failed
   */
  public async sendMail(request: MailSendRequest): Promise<MailSendResponse> {
    const response = await this.post(`/_action/mail-template/send`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as MailSendResponse;

    throw new Error(`Failed to send mail: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async validateContent(request: ContentValidationRequest): Promise<void> {
    const response = await this.post(`/_action/mail-template/validate`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 204) return;

    throw new Error(`Failed to validate content: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async previewTemplate(request: TemplatePreviewRequest): Promise<TemplatePreviewResponse> {
    const response = await this.post(`/_action/mail-template/build`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as HtmlPayload).data as TemplatePreviewResponse;

    throw new Error(`Failed to preview template: ${response.statusCode} ${response.statusMessage}`);
  }

  /** Header Footers **/

  /**
   * @throws {Error} if the request failed
   */
  public async getHeaderFooters(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<HeaderFooterListResponse> {
    const response = await this.get(`/header-footer`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as HeaderFooterListResponse;

    throw new Error(
      `Failed to fetch header footer list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createHeaderFooter(
    request: HeaderFooterCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<HeaderFooterCreateResponse> {
    const response = await this.post(`/header-footer`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as HeaderFooterCreateResponse;

    throw new Error(
      `Failed to create header footer: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchHeaderFooters(
    request: HeaderFooterListSearchRequest
  ): Promise<HeaderFooterListSearchResponse> {
    const response = await this.get(`/search/header-footer`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as HeaderFooterListSearchResponse;

    throw new Error(
      `Failed to search for header footers: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getHeaderFooter(id: string): Promise<HeaderFooterSingleResponse> {
    const response = await this.get(`/header-footer/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as HeaderFooterSingleResponse;

    throw new Error(
      `Failed to fetch header footer: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteHeaderFooter(id: string): Promise<void> {
    const response = await this.delete(`/header-footer/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete header footer: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateHeaderFooter(
    id: string,
    request: HeaderFooterUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<HeaderFooterUpdateResponse> {
    const response = await this.patch(`/header-footer/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as HeaderFooterUpdateResponse;

    throw new Error(
      `Failed to update header footer: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getHeaderFooterAggregate(
    request: HeaderFooterAggregationRequest
  ): Promise<HeaderFooterAggregationResponse> {
    const response = await this.post(`/aggregate/header-footer`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as HeaderFooterAggregationResponse;

    throw new Error(
      `Failed to aggregate header footer: ${response.statusCode} ${response.statusMessage}`
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
    const response = await this.get(`/template`, { query: { limit, page, query } });

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
    const response = await this.post(`/template`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateCreateResponse;

    throw new Error(`Failed to create template: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchTemplates(
    request: TemplateListSearchRequest
  ): Promise<TemplateListSearchResponse> {
    const response = await this.get(`/search/template`, { body: new JsonPayload(request) });

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
    const response = await this.get(`/template/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateSingleResponse;

    throw new Error(`Failed to fetch template: ${response.statusCode} ${response.statusMessage}`);
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTemplate(id: string): Promise<void> {
    const response = await this.delete(`/template/${id}`);

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
    const response = await this.patch(`/template/${id}`, {
      query: { _response: responseDetails },
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
    const response = await this.post(`/aggregate/template`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateAggregationResponse;

    throw new Error(
      `Failed to aggregate template: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /** Template Types **/

  /**
   * @throws {Error} if the request failed
   */
  public async getTemplateTypes(
    limit?: number,
    page?: number,
    query?: string
  ): Promise<TemplateTypeListResponse> {
    const response = await this.get(`/template-type`, { query: { limit, page, query } });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateTypeListResponse;

    throw new Error(
      `Failed to fetch template type list: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async createTemplateType(
    request: TemplateTypeCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TemplateTypeCreateResponse> {
    const response = await this.post(`/template-type`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateTypeCreateResponse;

    throw new Error(
      `Failed to create template type: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async searchTemplateTypes(
    request: TemplateTypeListSearchRequest
  ): Promise<TemplateTypeListSearchResponse> {
    const response = await this.get(`/search/template-type`, { body: new JsonPayload(request) });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateTypeListSearchResponse;

    throw new Error(
      `Failed to search for template types: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTemplateType(id: string): Promise<TemplateTypeSingleResponse> {
    const response = await this.get(`/template-type/${id}`);

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateTypeSingleResponse;

    throw new Error(
      `Failed to fetch template type: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async deleteTemplateType(id: string): Promise<void> {
    const response = await this.delete(`/template-type/${id}`);

    if (response.statusCode === 204) return;

    throw new Error(
      `Failed to delete template type: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async updateTemplateType(
    id: string,
    request: TemplateTypeUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TemplateTypeUpdateResponse> {
    const response = await this.patch(`/template-type/${id}`, {
      query: { _response: responseDetails },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateTypeUpdateResponse;

    throw new Error(
      `Failed to update template type: ${response.statusCode} ${response.statusMessage}`
    );
  }

  /**
   * @throws {Error} if the request failed
   */
  public async getTemplateTypeAggregate(
    request: TemplateTypeAggregationRequest
  ): Promise<TemplateTypeAggregationResponse> {
    const response = await this.post(`/aggregate/template-type`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateTypeAggregationResponse;

    throw new Error(
      `Failed to aggregate template type: ${response.statusCode} ${response.statusMessage}`
    );
  }
}

export default MailClient;
