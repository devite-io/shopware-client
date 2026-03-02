/** Operations **/

export interface MailSendRequest {
  salesChannelId: string;
  recipients: Record<string, string>;
  recipientsBcc?: Record<string, string>;
  recipientsCc?: Record<string, string>;
  senderName: string;
  senderEmail?: string;
  replyTo?: Record<string, string>;
  subject: string;
  contentHtml: string;
  contentPlain: string;
  documentIds?: Array<string>;
  mediaIds?: Array<string>;
  binAttachments?: Array<{
    content?: string;
    fileName?: string;
    mimeType?: string;
  }>;
  mailTemplateData?: Record<string, any>;
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
