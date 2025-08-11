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
  documentIds?: Array<string>;
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
