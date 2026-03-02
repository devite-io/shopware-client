import { MailTemplate } from "./MailTemplate";
import { GenericRecord } from "#types/api/global/GenericRecord";

export interface MailTemplateType {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  technicalName: string;
  name: string;
  templateData?: object;
  mailTemplates?: Array<MailTemplate>;
  customFields?: GenericRecord;
  translated?: Record<string, string>;
}
