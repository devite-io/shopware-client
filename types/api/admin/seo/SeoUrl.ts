import { GenericRecord } from "#types/api/global/GenericRecord";
import { Language } from "../locale/Language";

export interface SeoUrl {
  id: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  error?: string;
  url?: string;
  isCanonical?: boolean;
  isModified?: boolean;
  isDeleted?: boolean;
  pathInfo: string;
  seoPathInfo: string;
  routeName: string;
  languageId: string;
  language?: Language;
  customFields?: GenericRecord;
}
