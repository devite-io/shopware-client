export interface MailHeaderFooter {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  name: string;
  description?: string;
  headerHtml?: string;
  headerPlain?: string;
  footerHtml?: string;
  footerPlain?: string;
  translated?: Record<string, any>;
}
