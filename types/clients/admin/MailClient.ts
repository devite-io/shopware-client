import { MailHeaderFooter } from "#types/api/admin/mail/MailHeaderFooter";
import { MailTemplate } from "#types/api/admin/mail/template/MailTemplate";
import { MailTemplateType } from "#types/api/admin/mail/template/MailTemplateType";
import { Criteria } from "#types/api/global/query/Criteria";
import { Aggregation } from "#types/api/global/aggregation/Aggregation";

/** Operations **/

export interface MailSendRequest {
  recipients: Record<string, string>;
  salesChannelId: string;
  contentHtml: string;
  contentPlain: string;
  subject: string;
  senderName: string;
  senderEmail?: string;
  mediaIds?: Array<string>;
  binAttachments?: Array<{
    content?: string;
    fileName?: string;
    mimeType?: string;
  }>;
  recipientsBcc?: Record<string, string>;
  recipientsCc?: Record<string, string>;
  replyTo?: Record<string, string>;
  returnPath?: Record<string, string>;
}
export interface MailSendResponse {
  size?: number;
}

export interface ContentValidationRequest {
  contentHtml: string;
  contentPlain: string;
}

export interface TemplatePreviewRequest {
  mailTemplateType: {
    templateData?: object;
  };
  mailTemplate: {
    contentHtml?: string;
  };
}
export type TemplatePreviewResponse = string;

/** Header Footers **/

export interface HeaderFooterListResponse {
  total?: number;
  data?: Array<MailHeaderFooter>;
}

export type HeaderFooterCreateRequest = MailHeaderFooter;
export type HeaderFooterCreateResponse = { data: MailHeaderFooter };

export type HeaderFooterListSearchRequest = Criteria;
export interface HeaderFooterListSearchResponse {
  total?: number;
  data?: Array<MailHeaderFooter>;
}

export interface HeaderFooterSingleResponse {
  data: MailHeaderFooter;
}

export type HeaderFooterUpdateRequest = MailHeaderFooter;
export type HeaderFooterUpdateResponse = { data: MailHeaderFooter };

export interface HeaderFooterAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface HeaderFooterAggregationResponse {
  total?: number;
  data?: Array<MailHeaderFooter>;
}

/** Templates **/

export interface TemplateListResponse {
  total?: number;
  data?: Array<MailTemplate>;
}

export type TemplateCreateRequest = MailTemplate;
export type TemplateCreateResponse = { data: MailTemplate };

export type TemplateListSearchRequest = Criteria;
export interface TemplateListSearchResponse {
  total?: number;
  data?: Array<MailTemplate>;
}

export interface TemplateSingleResponse {
  data: MailTemplate;
}

export type TemplateUpdateRequest = MailTemplate;
export type TemplateUpdateResponse = { data: MailTemplate };

export interface TemplateAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface TemplateAggregationResponse {
  total?: number;
  data?: Array<MailTemplate>;
}

/** Template Types **/

export interface TemplateTypeListResponse {
  total?: number;
  data?: Array<MailTemplateType>;
}

export type TemplateTypeCreateRequest = MailTemplateType;
export type TemplateTypeCreateResponse = { data: MailTemplateType };

export type TemplateTypeListSearchRequest = Criteria;
export interface TemplateTypeListSearchResponse {
  total?: number;
  data?: Array<MailTemplateType>;
}

export interface TemplateTypeSingleResponse {
  data: MailTemplateType;
}

export type TemplateTypeUpdateRequest = MailTemplateType;
export type TemplateTypeUpdateResponse = { data: MailTemplateType };

export interface TemplateTypeAggregationRequest {
  aggregations: Array<Aggregation>;
}
export interface TemplateTypeAggregationResponse {
  total?: number;
  data?: Array<MailTemplateType>;
}
