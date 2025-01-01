import { MailTemplate } from "./MailTemplate";

export interface MailTemplateType {
  id: string;
  name: string;
  technicalName: string;
  availableEntities?: object;
  customFields?: object;
  templateData?: object;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  mailTemplates?: Array<MailTemplate>;
}
