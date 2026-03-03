import { GenericRecord } from "#types/api/global/GenericRecord";
import { MailTemplateType } from "./MailTemplateType";
import { MailTemplateMedia } from "./MailTemplateMedia";

export interface MailTemplate {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  senderName?: string;
  subject: string;
  description?: string;
  contentHtml: string;
  contentPlain: string;
  mailTemplateTypeId: string;
  mailTemplateType?: MailTemplateType;
  media?: Array<MailTemplateMedia>;
  customFields?: GenericRecord;
  translated?: Record<string, any>;
}
