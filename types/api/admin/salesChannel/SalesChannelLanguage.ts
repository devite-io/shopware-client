import { SalesChannel } from "./SalesChannel";
import { Language } from "../locale/Language";

export interface SalesChannelLanguage {
  id?: string;
  salesChannelId: string;
  languageId: string;
  salesChannel?: SalesChannel;
  language?: Language;
}
