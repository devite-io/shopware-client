import { GenericRecord } from "#types/api/global/GenericRecord";

export interface SeoUrlEntity {
  id: string;
  readonly createdAt: string;
  readonly updatedAt?: string;
  url?: string;
  pathInfo: string;
  seoPathInfo: string;
  isCanonical?: boolean;
  isModified?: boolean;
  isDeleted?: boolean;
  languageId: string;
  routeName: "frontend.navigation.page" | "frontend.landing.page" | "frontend.detail.page";
  error?: string;
  customFields?: GenericRecord;
}
