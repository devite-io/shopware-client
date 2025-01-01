import { MailTemplate } from "./MailTemplate";
import { Media } from "../../media/Media";

export interface MailTemplateMedia {
  id: string;
  mailTemplateId: string;
  languageId: string;
  mediaId: string;
  position?: number;
  mailTemplate?: MailTemplate;
  media?: Media;
}
