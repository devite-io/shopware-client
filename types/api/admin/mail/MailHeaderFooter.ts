import { SalesChannel } from "../salesChannel/SalesChannel";

export interface MailHeaderFooter {
  id: string;
  systemDefault?: boolean;
  name: string;
  description?: string;
  headerHtml?: string;
  headerPlain?: string;
  footerHtml?: string;
  footerPlain?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  salesChannels?: Array<SalesChannel>;
}
