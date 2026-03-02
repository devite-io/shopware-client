import { Media } from "../../media/Media";

export interface MailTemplateMedia {
  id: string;
  position?: number;
  mediaId: string;
  media?: Media;
}
