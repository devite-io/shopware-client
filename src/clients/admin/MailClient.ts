import JsonPayload from "#payloads/JsonPayload";
import HtmlPayload from "#payloads/HtmlPayload";
import Client from "../Client";
import ShopwareError from "#http/ShopwareError";
import {
  ContentValidationRequest,
  MailSendRequest,
  MailSendResponse,
  TemplatePreviewRequest,
  TemplatePreviewResponse
} from "#types/clients/admin/MailClient";
import { MailHeaderFooter } from "#types/api/admin/mail/MailHeaderFooter";
import { MailTemplate } from "#types/api/admin/mail/template/MailTemplate";
import { MailTemplateType } from "#types/api/admin/mail/template/MailTemplateType";
import createRestEndpoint from "../../utils/createRestEndpoint";

class MailClient extends Client {
  /** Operations **/

  /**
   * Requires `api_send_email` permission.
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

  /** Rest Endpoints **/

  public headerFooters = createRestEndpoint<MailHeaderFooter>(
    this,
    "mail-header-footer",
    "mail header/footer"
  );
  public templates = createRestEndpoint<MailTemplate>(this, "mail-template", "mail template");
  public templateTypes = createRestEndpoint<MailTemplateType>(
    this,
    "mail-template-type",
    "mail template type"
  );
}

export default MailClient;
