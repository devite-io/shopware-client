import { GenericRecord } from "#types/api/global/GenericRecord";
import { Language } from "../locale/Language";
import { SalesChannel } from "../salesChannel/SalesChannel";

export interface SeoUrl {
  id: string;
  salesChannelId?: string;
  languageId: string;
  foreignKey: string;
  routeName: string;
  pathInfo: string;
  seoPathInfo: string;
  isCanonical?: boolean;
  isModified?: boolean;
  isDeleted?: boolean;
  error?: string;
  url?: string;
  customFields?: GenericRecord;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  language?: Language;
  salesChannel?: SalesChannel;
}
