import { GenericRecord } from "../GenericRecord";
import { CmsPage } from ".";
import { SeoUrlEntity } from "../seo";

export type LandingPage = {
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
};
