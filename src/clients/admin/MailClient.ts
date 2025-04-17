import JsonPayload from "#payloads/JsonPayload";
import HtmlPayload from "#payloads/HtmlPayload";
import Client from "../Client";
import { Criteria } from "#types/api/global/query/Criteria";
import { buildQuery } from "#utils/SwagQL";
import ShopwareError from "#http/ShopwareError";
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
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async sendMail(request: MailSendRequest): Promise<MailSendResponse> {
    const response = await this.post(`/_action/mail-template/send`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200) return (response.body as JsonPayload).data as MailSendResponse;

    throw new ShopwareError("Failed to send mail", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async validateContent(request: ContentValidationRequest): Promise<void> {
    const response = await this.post(`/_action/mail-template/validate`, {
      body: new JsonPayload(request)
    });

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to validate content", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async previewTemplate(request: TemplatePreviewRequest): Promise<TemplatePreviewResponse> {
    const response = await this.post(`/_action/mail-template/build`, {
      headers: { Accept: "text/html" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as HtmlPayload).data as TemplatePreviewResponse;

    throw new ShopwareError("Failed to preview template", response);
  }

  /** Header Footers **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getHeaderFooters(query?: Criteria): Promise<HeaderFooterListResponse> {
    const response = await this.get(`/header-footer` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as HeaderFooterListResponse;

    throw new ShopwareError("Failed to fetch header footer list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createHeaderFooter(
    request: HeaderFooterCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<HeaderFooterCreateResponse> {
    const response = await this.post(`/header-footer`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as HeaderFooterCreateResponse;

    throw new ShopwareError("Failed to create header footer", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchHeaderFooters(
    request: HeaderFooterListSearchRequest
  ): Promise<HeaderFooterListSearchResponse> {
    const response = await this.post(`/search/header-footer`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as HeaderFooterListSearchResponse;

    throw new ShopwareError("Failed to search for header footers", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getHeaderFooter(id: string, query?: Criteria): Promise<HeaderFooterSingleResponse> {
    const response = await this.get(`/header-footer/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as HeaderFooterSingleResponse;

    throw new ShopwareError("Failed to fetch header footer", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteHeaderFooter(id: string): Promise<void> {
    const response = await this.delete(`/header-footer/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete header footer", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateHeaderFooter(
    id: string,
    request: HeaderFooterUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<HeaderFooterUpdateResponse> {
    const response = await this.patch(`/header-footer/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as HeaderFooterUpdateResponse;

    throw new ShopwareError("Failed to update header footer", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getHeaderFooterAggregate(
    request: HeaderFooterAggregationRequest
  ): Promise<HeaderFooterAggregationResponse> {
    const response = await this.post(`/aggregate/header-footer`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as HeaderFooterAggregationResponse;

    throw new ShopwareError("Failed to aggregate header footer", response);
  }

  /** Templates **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTemplates(query?: Criteria): Promise<TemplateListResponse> {
    const response = await this.get(`/template` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateListResponse;

    throw new ShopwareError("Failed to fetch template list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createTemplate(
    request: TemplateCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TemplateCreateResponse> {
    const response = await this.post(`/template`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateCreateResponse;

    throw new ShopwareError("Failed to create template", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchTemplates(
    request: TemplateListSearchRequest
  ): Promise<TemplateListSearchResponse> {
    const response = await this.post(`/search/template`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateListSearchResponse;

    throw new ShopwareError("Failed to search for templates", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTemplate(id: string, query?: Criteria): Promise<TemplateSingleResponse> {
    const response = await this.get(`/template/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateSingleResponse;

    throw new ShopwareError("Failed to fetch template", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteTemplate(id: string): Promise<void> {
    const response = await this.delete(`/template/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete template", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateTemplate(
    id: string,
    request: TemplateUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TemplateUpdateResponse> {
    const response = await this.patch(`/template/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as TemplateUpdateResponse;

    throw new ShopwareError("Failed to update template", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTemplateAggregate(
    request: TemplateAggregationRequest
  ): Promise<TemplateAggregationResponse> {
    const response = await this.post(`/aggregate/template`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateAggregationResponse;

    throw new ShopwareError("Failed to aggregate template", response);
  }

  /** Template Types **/

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTemplateTypes(query?: Criteria): Promise<TemplateTypeListResponse> {
    const response = await this.get(`/template-type` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateTypeListResponse;

    throw new ShopwareError("Failed to fetch template type list", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async createTemplateType(
    request: TemplateTypeCreateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TemplateTypeCreateResponse> {
    const response = await this.post(`/template-type`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateTypeCreateResponse;

    throw new ShopwareError("Failed to create template type", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async searchTemplateTypes(
    request: TemplateTypeListSearchRequest
  ): Promise<TemplateTypeListSearchResponse> {
    const response = await this.post(`/search/template-type`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateTypeListSearchResponse;

    throw new ShopwareError("Failed to search for template types", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTemplateType(id: string, query?: Criteria): Promise<TemplateTypeSingleResponse> {
    const response = await this.get(`/template-type/${id}` + buildQuery(query), {
      headers: { Accept: "application/json" }
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateTypeSingleResponse;

    throw new ShopwareError("Failed to fetch template type", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async deleteTemplateType(id: string): Promise<void> {
    const response = await this.delete(`/template-type/${id}`);

    if (response.statusCode === 204) return;

    throw new ShopwareError("Failed to delete template type", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async updateTemplateType(
    id: string,
    request: TemplateTypeUpdateRequest,
    responseDetails?: "basic" | "detail"
  ): Promise<TemplateTypeUpdateResponse> {
    const response = await this.patch(`/template-type/${id}`, {
      query: { _response: responseDetails },
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === (responseDetails !== "detail" ? 204 : 200))
      return (response.body as JsonPayload | undefined)?.data as TemplateTypeUpdateResponse;

    throw new ShopwareError("Failed to update template type", response);
  }

  /**
   * @throws {ShopwareError | import('ofetch').FetchError} if the request failed
   */
  public async getTemplateTypeAggregate(
    request: TemplateTypeAggregationRequest
  ): Promise<TemplateTypeAggregationResponse> {
    const response = await this.post(`/aggregate/template-type`, {
      headers: { Accept: "application/json" },
      body: new JsonPayload(request)
    });

    if (response.statusCode === 200)
      return (response.body as JsonPayload).data as TemplateTypeAggregationResponse;

    throw new ShopwareError("Failed to aggregate template type", response);
  }
}

export default MailClient;
