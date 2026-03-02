import { GenericRecord } from "#types/api/global/GenericRecord";
import { CmsSection } from "./CmsSection";
import { Media } from "../media/Media";
import { LandingPage } from "./LandingPage";

export interface CmsPage {
  apiAlias: "cms_page";
  id: string;
  versionId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  name?: string;
  type: "landingpage" | "page" | "product_list" | "product_detail";
  config?: { backgroundColor?: string };
  cssClass?: string;
  entity?: string;
  sections?: Array<CmsSection>;
  previewMediaId?: string;
  previewMedia?: Media;
  landingPages?: Array<LandingPage>;
  customFields?: GenericRecord;
  translated?: Record<string, string>;
}
