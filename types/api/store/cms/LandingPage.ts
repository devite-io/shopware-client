import { GenericRecord } from "#types/api/global/GenericRecord";
import { CmsPage } from "./CmsPage";
import { SeoUrlEntity } from "../seo/SeoUrlEntity";

export interface LandingPage {
  apiAlias: "landing_page";
  id: string;
  versionId?: string;
  active?: boolean;
  name: string;
  customFields?: GenericRecord;
  slotConfig?: object;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  url: string;
  cmsPageId?: string;
  cmsPageVersionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  translated?: object;
  cmsPage?: CmsPage;
  seoUrls?: Array<SeoUrlEntity>;
}
