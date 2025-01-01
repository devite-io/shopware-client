import { GenericRecord } from "#types/api/global/GenericRecord";
import { MailTemplateType } from "./MailTemplateType";
import { MailTemplateMedia } from "./MailTemplateMedia";

export interface MailTemplate {
  id: string;
  mailTemplateTypeId: string;
  systemDefault?: boolean;
  senderName?: string;
  description?: string;
  subject: string;
  contentHtml: string;
  contentPlain: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  mailTemplateType?: MailTemplateType;
  media?: Array<MailTemplateMedia>;
}
