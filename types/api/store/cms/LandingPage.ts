import { GenericRecord } from "#types/api/global/GenericRecord";
import { CmsPage } from "./CmsPage";
import { SeoUrlEntity } from "../seo/SeoUrlEntity";

export interface LandingPage {
  apiAlias: "landing_page";
  id: string;
  versionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  active?: boolean;
  name: string;
  url: string;
  seoUrls?: Array<SeoUrlEntity>;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  slotConfig?: object;
  cmsPageId?: string;
  cmsPageVersionId?: string;
  cmsPage?: CmsPage;
  customFields?: GenericRecord;
  translated?: Record<string, string>;
}
