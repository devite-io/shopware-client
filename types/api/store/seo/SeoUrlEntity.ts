import { GenericRecord } from "#types/api/global/GenericRecord";

export interface SeoUrlEntity {
  id: string;
  salesChannelId?: string;
  languageId: string;
  foreignKey: string;
  routeName: "frontend.navigation.page" | "frontend.landing.page" | "frontend.detail.page";
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
}
